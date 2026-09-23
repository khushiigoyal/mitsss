import React, { useState } from 'react';
import { Volume2, VolumeX, Bell, Briefcase, Users, PhoneCall, Search } from 'lucide-react';
import { MitsSealLogo, MitsModernEmblem } from './Logos';

interface HeaderProps {
  fontSize: 'normal' | 'large' | 'larger';
  setFontSize: (size: 'normal' | 'large' | 'larger') => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  onOpenRecruitment: () => void;
  onOpenNotifications: () => void;
  onOpenContact: () => void;
  onOpenAlumni: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
  onOpenRecruitment,
  onOpenNotifications,
  onOpenContact,
  onOpenAlumni,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleScreenReader = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const announcement =
        'Welcome to Madhav Institute of Technology and Science, Gwalior, Madhya Pradesh, India. Deemed University, Declared under Distinct Category by Ministry of Education, Government of India. NAAC Accredited with A plus plus Grade. Established in 1957. Work is Worship.';
      const utterance = new SpeechSynthesisUtterance(announcement);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <header className="w-full select-none" id="site-header">
      {/* Top Accessibility & Action Bar (Emerald/Teal header bar matching screenshot) */}
      <div className={`w-full text-white transition-colors duration-200 ${highContrast ? 'bg-black border-b border-yellow-400' : 'bg-[#156e62]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs font-medium">
          {/* Left: Accessibility Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              id="btn-screen-reader"
              onClick={handleScreenReader}
              title="Screen Reader Access (Text-to-Speech)"
              className="flex items-center space-x-1.5 hover:text-amber-200 transition-colors cursor-pointer py-1 px-1.5 rounded focus:outline-none focus:ring-1 focus:ring-white"
            >
              {isSpeaking ? (
                <VolumeX className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
              <span className="hidden sm:inline">Screen Reader Access</span>
              <span className="sm:hidden">Reader</span>
            </button>

            <span className="text-teal-300/60">|</span>

            {/* Contrast Switchers */}
            <div className="flex items-center space-x-1">
              <button
                id="btn-contrast-normal"
                onClick={() => setHighContrast(false)}
                title="Standard Contrast"
                className={`w-5 h-5 flex items-center justify-center font-bold text-[11px] rounded transition-all cursor-pointer ${
                  !highContrast
                    ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-400'
                    : 'bg-stone-200 text-black hover:bg-white'
                }`}
              >
                A
              </button>
              <button
                id="btn-contrast-high"
                onClick={() => setHighContrast(true)}
                title="High Contrast Mode"
                className={`w-5 h-5 flex items-center justify-center font-bold text-[11px] rounded transition-all cursor-pointer ${
                  highContrast
                    ? 'bg-black text-white ring-2 ring-yellow-400'
                    : 'bg-slate-900 text-white hover:bg-black'
                }`}
              >
                A
              </button>
            </div>

            <span className="text-teal-300/60">|</span>

            {/* Font Size Adjusters */}
            <div className="flex items-center space-x-1 tracking-tight font-semibold">
              <button
                id="btn-font-smaller"
                onClick={() => setFontSize('normal')}
                title="Normal Font Size"
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  fontSize === 'normal' ? 'bg-black/30 text-white font-bold underline' : 'hover:text-amber-200'
                }`}
              >
                A-
              </button>
              <button
                id="btn-font-default"
                onClick={() => setFontSize('large')}
                title="Medium Font Size"
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  fontSize === 'large' ? 'bg-black/30 text-white font-bold underline' : 'hover:text-amber-200'
                }`}
              >
                A
              </button>
              <button
                id="btn-font-larger"
                onClick={() => setFontSize('larger')}
                title="Larger Font Size"
                className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                  fontSize === 'larger' ? 'bg-black/30 text-white font-bold underline' : 'hover:text-amber-200'
                }`}
              >
                A+
              </button>
            </div>
          </div>

          {/* Right: Quick Action Links */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              id="btn-notification-alerts"
              onClick={onOpenNotifications}
              className="flex items-center space-x-1 hover:text-amber-200 transition-colors cursor-pointer py-1 px-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
              </span>
              <span className="hidden md:inline">Notification Alerts</span>
              <span className="md:hidden">Alerts</span>
            </button>

            <span className="hidden md:inline text-teal-300/60">|</span>

            <button
              id="btn-top-recruitment"
              onClick={onOpenRecruitment}
              className="hover:text-amber-200 transition-colors cursor-pointer py-1 px-1.5 hidden sm:inline-block"
            >
              Recruitment
            </button>

            <span className="hidden sm:inline text-teal-300/60">|</span>

            <button
              id="btn-alumni-portal"
              onClick={onOpenAlumni}
              className="hover:text-amber-200 transition-colors cursor-pointer py-1 px-1.5 hidden sm:inline-block"
            >
              Alumni Portal
            </button>

            {/* Contact Us - Orange/Red Solid Button */}
            <button
              id="btn-top-contact"
              onClick={onOpenContact}
              className="bg-[#f25c27] hover:bg-[#d94815] text-white font-bold px-3 py-1 rounded shadow-xs transition-colors cursor-pointer active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Main University Banner Header with Logos and Bilingual Typography */}
      <div className={`w-full py-4 sm:py-5 border-b transition-colors duration-200 ${
        highContrast ? 'bg-black border-yellow-500' : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          
          {/* Left: Historic Seal of MITS */}
          <div className="flex-shrink-0 flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <MitsSealLogo className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>

          {/* Center: Institutional Typography (Hindi & English exact match) */}
          <div className="flex-1 text-center px-1 sm:px-4">
            {/* Hindi Header */}
            <h2 className="text-base sm:text-xl md:text-[22px] font-bold text-[#1a2e70] font-['Noto_Sans_Devanagari',sans-serif] tracking-tight leading-snug">
              माधव प्रौद्योगिकी एवं विज्ञान संस्थान, ग्वालियर (म.प्र.), भारत
            </h2>

            {/* English Header */}
            <h1 className="text-sm sm:text-lg md:text-[21px] font-black text-[#133075] uppercase tracking-normal mt-0.5 leading-snug">
              MADHAV INSTITUTE OF TECHNOLOGY &amp; SCIENCE, GWALIOR (M.P.), INDIA
            </h1>

            {/* Deemed University Subtitle in Red */}
            <div className="mt-1">
              <span className="text-base sm:text-lg font-bold text-[#dc2626] tracking-wide inline-block">
                Deemed University
              </span>
            </div>

            {/* Distinct Category Announcement in Green */}
            <div className="text-xs sm:text-sm font-semibold text-[#15803d] tracking-tight">
              (Declared under Distinct Category by Ministry of Education, Government of India)
            </div>

            {/* NAAC Accreditation Grade in Bold Crimson */}
            <div className="mt-0.5">
              <span className="text-xs sm:text-sm font-extrabold text-[#b91c1c] uppercase tracking-wider">
                NAAC ACCREDITED WITH A++ GRADE
              </span>
            </div>
          </div>

          {/* Right: Modern MITS Emblem */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <MitsModernEmblem className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>

        </div>
      </div>
    </header>
  );
};
