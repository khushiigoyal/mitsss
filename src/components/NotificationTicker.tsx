import React, { useState, useEffect } from 'react';
import { Volume2, Pause, Play, X, BellRing, ExternalLink, Sparkles } from 'lucide-react';
import { NOTIFICATION_TICKER_ITEMS } from '../data/portalData';

interface NotificationTickerProps {
  onOpenAll: () => void;
  highContrast: boolean;
}

export const NotificationTicker: React.FC<NotificationTickerProps> = ({ onOpenAll, highContrast }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isPaused || isDismissed) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % NOTIFICATION_TICKER_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, isDismissed]);

  if (isDismissed) {
    return (
      <div className="w-full bg-[#0e3b7b] py-1 px-4 text-center text-xs text-white flex items-center justify-center gap-2">
        <span>University Notifications Ticker minimized.</span>
        <button
          onClick={() => setIsDismissed(false)}
          className="text-amber-300 underline font-semibold cursor-pointer"
        >
          Restore Ticker
        </button>
      </div>
    );
  }

  return (
    <div
      id="notifications-ticker-bar"
      className={`w-full flex items-stretch shadow-md overflow-hidden relative z-20 ${
        highContrast ? 'border-y-2 border-yellow-400' : ''
      }`}
    >
      {/* Left Navy Block: "NOTIFICATIONS" */}
      <div
        onClick={onOpenAll}
        className="flex-shrink-0 bg-[#072c63] text-white px-4 sm:px-6 py-2.5 flex items-center gap-2 font-black text-xs sm:text-sm tracking-wider uppercase cursor-pointer hover:bg-[#05214b] transition-colors select-none"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span>NOTIFICATIONS</span>
      </div>

      {/* Right Red Marquee/Announcement Bar */}
      <div
        className="flex-1 bg-[#dc2626] text-white px-3 sm:px-4 py-2 flex items-center justify-between overflow-hidden relative cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={onOpenAll}
      >
        {/* Ticker Content */}
        <div className="flex-1 overflow-hidden pr-3">
          <div className="whitespace-nowrap overflow-hidden text-ellipsis text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2">
            <span className="bg-white/20 text-white text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded">
              LATEST
            </span>
            <span className="hover:underline transition-all">
              {NOTIFICATION_TICKER_ITEMS[currentIndex]}
            </span>
          </div>
        </div>

        {/* Controls: Pause / Play & Dismiss */}
        <div
          className="flex-shrink-0 flex items-center space-x-1.5 text-white/90 pl-2 border-l border-red-400/40"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Resume auto-scroll' : 'Pause ticker'}
            className="p-1 hover:bg-black/20 rounded transition-colors cursor-pointer"
            aria-label="Pause or Resume Ticker"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onOpenAll}
            title="View all notifications in detail"
            className="p-1 hover:bg-black/20 rounded transition-colors cursor-pointer text-amber-200 text-xs font-bold hidden sm:inline-block"
          >
            View All
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            title="Close ticker bar"
            className="p-1 hover:bg-black/20 rounded transition-colors cursor-pointer"
            aria-label="Dismiss Ticker"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
