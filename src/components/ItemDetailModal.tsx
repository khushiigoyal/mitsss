import React from 'react';
import { X, GraduationCap, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

interface ItemDetailModalProps {
  title: string | null;
  description?: string;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  title,
  description,
  onClose,
  onOpenContact,
}) => {
  if (!title) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden border border-slate-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f3b7d] text-white px-5 py-4 flex items-center justify-between border-b-2 border-amber-400">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-blue-800 rounded-lg text-amber-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                MITS Gwalior Portal Directory
              </span>
              <h3 className="text-base font-bold leading-tight line-clamp-1">{title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md hover:bg-blue-900/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-3.5 text-slate-700 text-xs sm:text-sm">
          <div className="p-3.5 bg-blue-50/70 rounded-lg border border-blue-100">
            <p className="font-semibold text-slate-800 text-sm leading-relaxed">
              {description || 'Official regulations, syllabi, circulars, and departmental updates for this category.'}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#0f3b7d] uppercase tracking-wider">Quick Actions &amp; Services</h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200 hover:bg-slate-100 cursor-pointer">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>View Academic Regulations &amp; NEP 2020 Compliance</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200 hover:bg-slate-100 cursor-pointer">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Download Guidelines, Ordinances &amp; Notices (PDF)</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200 hover:bg-slate-100 cursor-pointer">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Faculty Directory &amp; Departmental Coordinators</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-xs">
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="text-blue-700 hover:underline font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>Have Questions? Inquire With Us</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#0f3b7d] text-white font-bold rounded cursor-pointer hover:bg-[#0c3169]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
