import React from 'react';
import { Award, ShieldCheck, GraduationCap, Building2, BookCheck, TrendingUp } from 'lucide-react';
import { INSTITUTIONAL_STATS } from '../data/portalData';

export const CampusStats: React.FC<{ highContrast: boolean }> = ({ highContrast }) => {
  return (
    <section
      id="campus-stats"
      className={`w-full py-6 border-b transition-colors ${
        highContrast ? 'bg-black text-yellow-300 border-yellow-400' : 'bg-white text-slate-800 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INSTITUTIONAL_STATS.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg border border-slate-200/80 hover:border-[#0f3b7d] hover:shadow-md transition-all group bg-gradient-to-b from-white to-slate-50/50 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block group-hover:text-[#0f3b7d]">
                  {stat.label}
                </span>
                <div className="text-xl sm:text-2xl font-black text-[#133075] mt-1 tracking-tight group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
              </div>
              <p className="text-[11px] text-slate-600 mt-2 font-medium line-clamp-2 leading-tight">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
