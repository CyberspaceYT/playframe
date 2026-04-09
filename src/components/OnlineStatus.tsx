import { useEffect, useState } from "react";

interface OnlineStatusProps {
  showCount?: boolean;
}

const OnlineStatus = ({ showCount = true }: OnlineStatusProps) => {
  const [onlineCount, setOnlineCount] = useState(1247);

  useEffect(() => {
    // Simulate online count changes
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.floor(Math.random() * 10) - 4; // Random change between -4 and +5
        return Math.max(1000, prev + change); // Keep it above 1000
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2.5 glass-panel px-3 py-1.5 rounded-full backdrop-blur-sm border border-green-400/40">
      <div className="relative flex items-center justify-center">
        {/* Pulsing outer ring */}
        <div 
          className="absolute inset-0 rounded-full bg-green-400/40" 
          style={{ 
            animation: 'glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            width: '12px',
            height: '12px'
          }} 
        />
        
        {/* Solid green dot */}
        <div 
          className="relative h-3 w-3 rounded-full bg-gradient-to-br from-green-300 to-green-500 shadow-lg" 
          style={{ 
            boxShadow: '0 0 12px rgba(34, 197, 94, 0.8), inset 0 0 5px rgba(255, 255, 255, 0.4)',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }} 
        />
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xs font-bold text-green-400 drop-shadow-sm">LIVE</span>
        {showCount && (
          <span className="text-xs font-semibold text-green-300 drop-shadow-sm">
            {onlineCount.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default OnlineStatus;
