import React, { useState } from 'react';
import { X, Search, BookOpen, FileText, GraduationCap, ChevronRight, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, RECRUITMENT_NOTICES, NOTIFICATION_LIST, QUICK_LAUNCH_ITEMS } from '../data/portalData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (title: string, desc?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectItem }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  // Aggregate searchable items
  const results: { title: string; category: string; desc?: string }[] = [];

  if (query.trim().length > 1) {
    const q = query.toLowerCase();

    // From Nav Items
    NAV_ITEMS.forEach((item) => {
      if (item.children) {
        item.children.forEach((child) => {
          if (child.title.toLowerCase().includes(q) || child.description?.toLowerCase().includes(q)) {
            results.push({ title: `${item.label} › ${child.title}`, category: item.label, desc: child.description });
          }
        });
      } else if (item.label.toLowerCase().includes(q)) {
        results.push({ title: item.label, category: 'Main Menu' });
      }
    });

    // From Recruitment
    RECRUITMENT_NOTICES.forEach((r) => {
      if (r.title.toLowerCase().includes(q) || r.positions.some((p) => p.toLowerCase().includes(q))) {
        results.push({ title: r.title, category: 'Recruitment', desc: r.payScale });
      }
    });

    // From Notifications
    NOTIFICATION_LIST.forEach((n) => {
      if (n.title.toLowerCase().includes(q)) {
        results.push({ title: n.title, category: n.category, desc: n.date });
      }
    });

    // From Portals
    QUICK_LAUNCH_ITEMS.forEach((p) => {
      if (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        results.push({ title: p.name, category: p.category, desc: p.description });
      }
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-xl rounded-xl shadow-2xl overflow-hidden border border-slate-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search departments, syllabus, faculty, recruitment, results..."
            className="flex-1 text-sm bg-transparent outline-none text-slate-800 placeholder-slate-400 font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600 text-xs">
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-80 overflow-y-auto p-3 space-y-1">
          {query.trim().length <= 1 ? (
            <div className="p-6 text-center text-xs text-slate-400">
              Type at least 2 characters to search across MITS Gwalior official resources.
            </div>
          ) : results.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500">
              No results found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            results.map((res, i) => (
              <button
                key={i}
                onClick={() => {
                  onSelectItem(res.title, res.desc);
                  onClose();
                }}
                className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">
                    {res.category}
                  </span>
                  <p className="text-xs font-semibold text-slate-800 group-hover:text-blue-900">
                    {res.title}
                  </p>
                  {res.desc && <p className="text-[11px] text-slate-500 truncate max-w-md">{res.desc}</p>}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700" />
              </button>
            ))
          )}
        </div>

        <div className="bg-slate-100 px-4 py-2 text-[11px] text-slate-500 border-t border-slate-200 flex justify-between">
          <span>Press ESC to exit</span>
          <span>MITS Global Portal Index</span>
        </div>
      </div>
    </div>
  );
};
