import React, { useState } from 'react';
import { X, Bell, Calendar, Download, Search, Filter, Sparkles, ExternalLink } from 'lucide-react';
import { NOTIFICATION_LIST } from '../data/portalData';
import { NotificationItem } from '../types';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = ['All', 'Academic', 'Examination', 'Recruitment', 'Research', 'Conference'];

  const filtered = NOTIFICATION_LIST.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-slate-300 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f3b7d] text-white px-5 py-4 flex items-center justify-between border-b-2 border-red-500 flex-shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-red-600 rounded-lg text-white">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold leading-tight">University Notification &amp; Alert Board</h3>
              <p className="text-xs text-blue-200">Official circulars, tenders, academic notices &amp; orders</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md hover:bg-blue-900/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex-shrink-0 space-y-2.5">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notifications by keywords..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0f3b7d] text-white'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-2.5">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs">
              No circulars found matching your search criteria.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-start justify-between gap-3 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#0f3b7d] uppercase tracking-wider">
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-red-600 text-white uppercase animate-pulse">
                        NEW
                      </span>
                    )}
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#0f3b7d] transition-colors leading-snug">
                    {item.title}
                  </h4>
                </div>

                <button
                  onClick={() => alert(`Opening official notification file: ${item.title}`)}
                  className="flex-shrink-0 p-1.5 text-slate-400 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                  title="Download Notification Document"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 flex-shrink-0">
          <span>Notice Board Archives: 2024 - 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1 bg-slate-300 hover:bg-slate-400 text-slate-800 font-semibold rounded cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
