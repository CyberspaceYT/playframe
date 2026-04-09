const OnlineStatus = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center justify-center">
        {/* Pulsing outer ring */}
        <div className="absolute inset-0 rounded-full bg-green-400/40 animate-pulse" style={{ animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
        
        {/* Solid green dot */}
        <div className="relative h-3 w-3 rounded-full bg-gradient-to-br from-green-300 to-green-500 shadow-lg shadow-green-500/50" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.6), inset 0 0 5px rgba(255, 255, 255, 0.3)' }} />
      </div>
      <span className="text-xs font-semibold text-green-500 drop-shadow-sm">LIVE</span>
    </div>
  );
};

export default OnlineStatus;
