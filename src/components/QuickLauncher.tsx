import React, { useState } from 'react';
import {
  Grid,
  X,
  LayoutGrid,
  BookOpen,
  CreditCard,
  Award,
  Library,
  Briefcase,
  ShieldCheck,
  Users,
  FileCheck,
  ExternalLink,
  Search,
} from 'lucide-react';
import { QUICK_LAUNCH_ITEMS } from '../data/portalData';
import { QuickLinkItem } from '../types';

interface QuickLauncherProps {
  onSelectItem: (item: QuickLinkItem) => void;
}

export const QuickLauncher: React.FC<QuickLauncherProps> = ({ onSelectItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getIcon = (name: string) => {
    switch (name) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-cyan-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-blue-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-600" />;
      case 'Library':
        return <Library className="w-5 h-5 text-indigo-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-purple-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-red-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-teal-600" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-orange-600" />;
      default:
        return <LayoutGrid className="w-5 h-5 text-cyan-600" />;
    }
  };

  const filtered = QUICK_LAUNCH_ITEMS.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Floating 3x3 Cyan Grid Launcher Button (matches screenshot bottom-right) */}
      <button
        id="btn-quick-launcher-toggle"
        onClick={() => setIsOpen(true)}
        aria-label="Open Quick Services & Portals Launcher"
        title="Quick Services & Portals Hub"
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00a3c4] hover:bg-[#008ba8] text-white shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer ring-4 ring-white/30"
      >
        {/* 3x3 Grid Icon matching the screenshot */}
        <div className="grid grid-cols-3 gap-1 p-2.5">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-xs shadow-xs"></div>
          ))}
        </div>
      </button>

      {/* Modal Dialog for Quick Launcher */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#0f3b7d] text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-cyan-400">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                  <Grid className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-bold text-base tracking-wide">University Services &amp; Portals Hub</h3>
                  <p className="text-xs text-blue-200">Fast access to MITS academic, student &amp; administrative tools</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-blue-900/50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center">
              <div className="relative w-full">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter portals, services, forms or LMS..."
                  className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800"
                />
              </div>
            </div>

            {/* Grid of Portals */}
            <div className="p-5 max-h-[60vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsOpen(false);
                    onSelectItem(item);
                  }}
                  className="text-left p-3.5 rounded-lg border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition-all group flex flex-col justify-between cursor-pointer"
                >
                  <div className="flex items-start justify-between w-full mb-2">
                    <div className="p-2 rounded-md bg-slate-100 group-hover:bg-white shadow-xs">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-cyan-700">
                      {item.category}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-cyan-900">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-2 text-[10px] font-semibold text-cyan-600 flex items-center gap-1 group-hover:underline">
                    <span>Open Service</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </div>
                </button>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span>MITS Gwalior Digital Governance</span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
