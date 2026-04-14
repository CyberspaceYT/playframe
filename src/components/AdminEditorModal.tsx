import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Game, categories, games } from '@/lib/games-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AdminEditorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthenticated: (password: string) => void;
}

export const AdminEditorModal = ({ open, onOpenChange, onAuthenticated }: AdminEditorModalProps) => {
  const [authStep, setAuthStep] = useState<'password' | 'editor'>('password');
  const [password, setPassword] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [editedGame, setEditedGame] = useState<Game | null>(null);
  const [newGame, setNewGame] = useState<Partial<Game>>({
    title: '',
    description: '',
    category: 'action',
    thumbnail_url: '',
    embed_url: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordSubmit = () => {
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    
    if (!correctPassword) {
      toast.error('Admin password not configured. Please set VITE_ADMIN_PASSWORD env var.');
      return;
    }

    if (password === correctPassword) {
      setAuthStep('editor');
      onAuthenticated(password);
    } else {
      toast.error('Incorrect password');
      setPassword('');
    }
  };

  const handlePublish = async () => {
    if (!editedGame && Object.keys(newGame).length === 0) {
      toast.error('No changes to publish');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: editedGame ? 'update' : 'create',
          game: editedGame || newGame,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to publish changes');
      }

      toast.success('Changes published and deployed!');
      setEditedGame(null);
      setNewGame({ title: '', description: '', category: 'action', thumbnail_url: '', embed_url: '' });
      setSelectedGame(null);
    } catch (error) {
      toast.error('Failed to publish: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setAuthStep('password');
    setPassword('');
    setEditedGame(null);
    setSelectedGame(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Admin Editor</DialogTitle>
          <DialogDescription>
            {authStep === 'password' ? 'Enter password to access editor' : 'Manage games and settings'}
          </DialogDescription>
        </DialogHeader>

        {authStep === 'password' ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                placeholder="Enter admin password"
              />
            </div>
            <Button onClick={handlePasswordSubmit} className="w-full">
              Unlock Admin Editor
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="edit">Edit Game</TabsTrigger>
              <TabsTrigger value="add">Add Game</TabsTrigger>
            </TabsList>

            <TabsContent value="edit" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="game-select">Select Game to Edit</Label>
                <Select value={selectedGame?.id || ''} onValueChange={(id) => {
                  const game = games.find(g => g.id === id);
                  if (game) {
                    setSelectedGame(game);
                    setEditedGame({ ...game });
                  }
                }}>
                  <SelectTrigger id="game-select">
                    <SelectValue placeholder="Choose a game..." />
                  </SelectTrigger>
                  <SelectContent>
                    {games.map(game => (
                      <SelectItem key={game.id} value={game.id}>
                        {game.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {editedGame && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="edit-title">Title</Label>
                    <Input
                      id="edit-title"
                      value={editedGame.title}
                      onChange={(e) => setEditedGame({ ...editedGame, title: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edit-description">Description</Label>
                    <Textarea
                      id="edit-description"
                      value={editedGame.description}
                      onChange={(e) => setEditedGame({ ...editedGame, description: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edit-category">Category</Label>
                    <Select value={editedGame.category} onValueChange={(cat) => setEditedGame({ ...editedGame, category: cat })}>
                      <SelectTrigger id="edit-category">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(cat => (
                          <SelectItem key={cat.id} value={cat.slug}>
                            {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edit-thumbnail">Thumbnail URL</Label>
                    <Input
                      id="edit-thumbnail"
                      value={editedGame.thumbnail_url}
                      onChange={(e) => setEditedGame({ ...editedGame, thumbnail_url: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edit-embed">Embed URL</Label>
                    <Input
                      id="edit-embed"
                      value={editedGame.embed_url}
                      onChange={(e) => setEditedGame({ ...editedGame, embed_url: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>

                  <Button
                    onClick={handlePublish}
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? 'Publishing...' : 'Publish Changes'}
                  </Button>
                </>
              )}
            </TabsContent>

            <TabsContent value="add" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new-title">Title</Label>
                <Input
                  id="new-title"
                  value={newGame.title || ''}
                  onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-description">Description</Label>
                <Textarea
                  id="new-description"
                  value={newGame.description || ''}
                  onChange={(e) => setNewGame({ ...newGame, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-category">Category</Label>
                <Select value={newGame.category || 'action'} onValueChange={(cat) => setNewGame({ ...newGame, category: cat })}>
                  <SelectTrigger id="new-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.id} value={cat.slug}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-thumbnail">Thumbnail URL</Label>
                <Input
                  id="new-thumbnail"
                  value={newGame.thumbnail_url || ''}
                  onChange={(e) => setNewGame({ ...newGame, thumbnail_url: e.target.value })}
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-embed">Embed URL</Label>
                <Input
                  id="new-embed"
                  value={newGame.embed_url || ''}
                  onChange={(e) => setNewGame({ ...newGame, embed_url: e.target.value })}
                  placeholder="https://..."
                />
              </div>

              <Button
                onClick={handlePublish}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'Publishing...' : 'Add Game'}
              </Button>
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
};
