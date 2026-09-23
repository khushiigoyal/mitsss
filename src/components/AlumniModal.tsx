import React, { useState } from 'react';
import { X, Users, Globe, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface AlumniModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlumniModal: React.FC<AlumniModalProps> = ({ isOpen, onClose }) => {
  const [registered, setRegistered] = useState(false);
  const [batch, setBatch] = useState('2018');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-slate-300 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0f3b7d] text-white px-5 py-4 flex items-center justify-between border-b-2 border-amber-400 flex-shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-blue-800 rounded-lg text-amber-300">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold leading-tight">MITS Global Alumni Association (MITSGAA)</h3>
              <p className="text-xs text-blue-200">Connecting 45,000+ graduates across 65+ countries</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md hover:bg-blue-900/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 space-y-4 text-xs sm:text-sm text-slate-700">
          {/* Alumni Banner */}
          <div className="bg-gradient-to-r from-blue-900 to-[#1e3a8a] text-white p-4 rounded-lg shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                Annual Grand Homecoming &amp; Alumni Meet
              </span>
              <h4 className="font-extrabold text-sm sm:text-base mt-0.5">Silver &amp; Golden Jubilee Reunion 2026</h4>
              <p className="text-xs text-blue-100 mt-1">December 22 - 24, 2026 • MITS Heritage Auditorium, Gwalior</p>
            </div>
            <button
              onClick={() => alert('Opening Reunion Registration details and RSVP desk!')}
              className="flex-shrink-0 px-3.5 py-1.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs rounded shadow cursor-pointer"
            >
              RSVP for Reunion
            </button>
          </div>

          {/* Distinguished Alumni Highlights */}
          <div>
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#0f3b7d] mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Distinguished Alumni Impact</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                <p className="font-bold text-slate-800 text-xs">Industry Leaders</p>
                <p className="text-[11px] text-slate-500 mt-0.5">CEOs, VPs &amp; Founders at Google, Intel, L&amp;T, BHEL &amp; Microsoft</p>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                <p className="font-bold text-slate-800 text-xs">Civil &amp; Public Services</p>
                <p className="text-[11px] text-slate-500 mt-0.5">IAS, IPS, IES officers &amp; leaders in Indian space &amp; defense establishments</p>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                <p className="font-bold text-slate-800 text-xs">Academia &amp; Research</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Professors and research fellows at IITs, IISc, MIT, and Stanford</p>
              </div>
            </div>
          </div>

          {/* Fast Alumni Registration Card */}
          <div className="p-3.5 bg-blue-50/60 border border-blue-200 rounded-lg">
            <h5 className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-2">
              Update Your Alumni Registry Profile
            </h5>
            {registered ? (
              <div className="p-3 bg-emerald-100 text-emerald-900 rounded text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Thank you! Your profile update has been logged with the MITS Alumni Cell.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRegistered(true);
                }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2"
              >
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="px-2.5 py-1.5 border border-slate-300 rounded text-xs bg-white"
                />
                <input
                  type="text"
                  placeholder="Current Company & Designation"
                  className="px-2.5 py-1.5 border border-slate-300 rounded text-xs bg-white"
                />
                <button
                  type="submit"
                  className="bg-[#0f3b7d] hover:bg-[#092955] text-white font-bold py-1.5 px-3 rounded text-xs cursor-pointer"
                >
                  Join Alumni Network
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-300 hover:bg-slate-400 text-slate-800 font-semibold rounded text-xs cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
