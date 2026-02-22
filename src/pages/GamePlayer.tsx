// ... (keep existing imports and logic)

const GamePlayer = () => {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPointerLocked, setIsPointerLocked] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true); // for "click to play"

  // ... (keep your fullscreenchange listener)

  useEffect(() => {
    const handlePointerLockChange = () => {
      setIsPointerLocked(document.pointerLockElement !== null);
      if (document.pointerLockElement) {
        setShowOverlay(false); // hide overlay once locked
      }
    };

    document.addEventListener("pointerlockchange", handlePointerLockChange);
    document.addEventListener("pointerlockerror", (e) => {
      console.warn("Pointer lock failed:", e);
      // You could show a message: "Click inside the game to lock mouse"
    });

    return () => {
      document.removeEventListener("pointerlockchange", handlePointerLockChange);
      document.removeEventListener("pointerlockerror", () => {});
    };
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!iframeRef.current) return;

    if (!document.fullscreenElement) {
      // Go fullscreen on iframe first (better for pointer lock in embeds)
      iframeRef.current
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
          // Try to request pointer lock right after fullscreen
          if (iframeRef.current) {
            try {
              (iframeRef.current as any).requestPointerLock?.(); // may work in same-origin or permitted cases
            } catch (err) {
              console.log("Direct iframe pointer lock failed (cross-origin expected)", err);
            }
          }
        })
        .catch(console.warn);
    } else {
      document.exitFullscreen().catch(console.warn);
      setIsFullscreen(false);
      document.exitPointerLock?.(); // clean up
    }
  }, []);

  const handlePlayClick = () => {
    if (iframeRef.current) {
      // Focus the iframe so clicks/keypresses go there
      iframeRef.current.focus();
      // Many games auto-request pointer lock on first click inside
      // If not, the overlay click at least focuses it
    }
    setShowOverlay(false);
  };

  // ... (your if (!game) return ...)

  return (
    <div className="flex min-h-screen flex-col">
      {!isFullscreen && (
        <>
          <Navbar showSearch={false} />
          <main className="flex-1">
            <div className="container mx-auto px-4 py-6">
              {/* header with back + title + fullscreen btn */}
              <div className="mb-6 flex items-center justify-between">
                {/* ... your existing header content ... */}
                <Button variant="outline" size="icon" onClick={toggleFullscreen}>
                  {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                </Button>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-border/40 bg-black shadow-xl">
                <iframe
                  ref={iframeRef}
                  src={game.embed_url}
                  title={game.title}
                  className="h-[75vh] w-full"
                  allow="fullscreen; autoplay; gamepad; pointer-lock; accelerometer; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock"
                />

                {/* Optional overlay for non-FPS games or to force focus */}
                {showOverlay && !isPointerLocked && (
                  <div
                    className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/60 text-white"
                    onClick={handlePlayClick}
                  >
                    <div className="text-center">
                      <div className="mb-4 text-3xl font-bold">Click to Play</div>
                      <p className="text-lg">
                        {isFullscreen
                          ? "Click here to lock mouse and start"
                          : "Fullscreen recommended for best experience"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
          <Footer />
        </>
      )}

      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black">
          <iframe
            ref={iframeRef}
            src={game.embed_url}
            title={game.title}
            className="h-full w-full"
            allow="fullscreen; autoplay; gamepad; pointer-lock; accelerometer; gyroscope; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock"
          />

          {/* Corner exit button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 bg-black/40 text-white hover:bg-black/70"
            onClick={toggleFullscreen}
          >
            <Minimize className="h-6 w-6" />
          </Button>

          {/* Overlay if pointer not yet locked */}
          {showOverlay && !isPointerLocked && (
            <div
              className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center bg-black/70 text-white"
              onClick={handlePlayClick}
            >
              <div className="text-center">
                <div className="mb-6 text-5xl font-bold">Click to Lock Mouse</div>
                <p className="text-2xl">Needed for looking around in FPS games</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
