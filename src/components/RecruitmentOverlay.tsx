import React, { useState } from 'react';
import { X, Users, ChevronRight, BellRing, Sparkles } from 'lucide-react';
import { RECRUITMENT_NOTICES } from '../data/portalData';
import { RecruitmentNotice } from '../types';

interface RecruitmentOverlayProps {
  onSelectNotice: (notice: RecruitmentNotice) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const RecruitmentOverlay: React.FC<RecruitmentOverlayProps> = ({
  onSelectNotice,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="recruitment-overlay-card"
      className="absolute top-4 sm:top-6 left-3 sm:left-6 z-30 w-[92%] sm:w-80 md:w-96 bg-white rounded shadow-2xl border border-slate-300/80 overflow-hidden backdrop-blur-xs transition-all duration-300 animate-in fade-in slide-in-from-left-4"
    >
      {/* Header bar matching user screenshot */}
      <div className="bg-[#0e3b7b] text-white px-3.5 py-2.5 flex items-center justify-between border-b-2 border-amber-400">
        <div className="flex items-center space-x-2 font-bold text-sm tracking-wide">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300"></span>
          </span>
          <span>Recruitment 2026</span>
        </div>
        <button
          id="btn-close-recruitment-card"
          onClick={onClose}
          aria-label="Close Recruitment Card"
          className="text-slate-300 hover:text-white hover:bg-blue-900/60 p-1 rounded transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-3 sm:p-4 flex items-start gap-3 bg-white/95">
        
        {/* Recruitment Badge Icon from screenshot */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
            {/* Outer dotted/patterned circle */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0e3b7b]/40 bg-sky-50"></div>
            
            {/* Center blue badge */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-[#0e3b7b] rounded-full flex flex-col items-center justify-center text-white shadow-sm">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-0.5" />
            </div>

            {/* Bottom ribbon banner: RECRUITMENT */}
            <div className="absolute -bottom-1 bg-[#0284c7] text-[7.5px] font-black tracking-tighter text-white px-1.5 py-0.5 rounded shadow-xs uppercase">
              RECRUITMENT
            </div>
          </div>
        </div>

        {/* Notices List */}
        <div className="flex-1 min-w-0 space-y-3.5">
          {RECRUITMENT_NOTICES.map((notice, idx) => (
            <div
              key={notice.id}
              className={`space-y-1.5 ${idx !== 0 ? 'pt-2.5 border-t border-slate-200' : ''}`}
            >
              <p className="text-[12px] sm:text-[13px] font-semibold text-[#093570] leading-snug tracking-tight">
                {notice.title}
              </p>
              
              <div>
                <button
                  id={`btn-view-details-${notice.id}`}
                  onClick={() => onSelectNotice(notice)}
                  className="inline-flex items-center px-3 py-1 bg-[#15803d] hover:bg-[#166534] text-white text-xs font-bold rounded shadow-xs transition-transform active:scale-95 cursor-pointer"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3 h-3 ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer sub-note */}
      <div className="bg-slate-50 px-3.5 py-1.5 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
        <span className="text-emerald-700 font-semibold flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5" /> Online Applications Active
        </span>
        <button
          onClick={() => onSelectNotice(RECRUITMENT_NOTICES[0])}
          className="hover:text-[#0e3b7b] font-medium underline cursor-pointer"
        >
          View General Instructions
        </button>
      </div>
    </div>
  );
};
