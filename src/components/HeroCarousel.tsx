import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Pause, Play, Sparkles, Quote, Award } from 'lucide-react';
import { CAROUSEL_SLIDES } from '../data/portalData';
import { RecruitmentOverlay } from './RecruitmentOverlay';
import { QuickLauncher } from './QuickLauncher';
import { RecruitmentNotice, QuickLinkItem } from '../types';

interface HeroCarouselProps {
  onSelectNotice: (notice: RecruitmentNotice) => void;
  onSelectQuickLink: (item: QuickLinkItem) => void;
  recruitmentCardOpen: boolean;
  setRecruitmentCardOpen: (open: boolean) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onSelectNotice,
  onSelectQuickLink,
  recruitmentCardOpen,
  setRecruitmentCardOpen,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto slide
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const slide = CAROUSEL_SLIDES[currentSlide];

  return (
    <div
      id="hero-banner-section"
      className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] overflow-hidden bg-slate-900 select-none group"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slide 1: Inauguration Ceremony Graphic Recreation matching the user screenshot! */}
      {currentSlide === 0 ? (
        <div className="absolute inset-0 w-full h-full">
          {/* Background image: Authentic university convocation / inauguration crowd */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
          {/* Vignette & color grading to match the photograph's warmth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 backdrop-brightness-95" />

          {/* Authentic Institutional Backdrop Banners representing the stage background in the image */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-10 max-w-lg hidden lg:block text-right z-10 pointer-events-none">
            {/* Top Stage Banner */}
            <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/60 mb-3 text-center">
              <p className="text-[10px] font-bold text-[#1a2e70] font-['Noto_Sans_Devanagari',sans-serif]">
                माधव प्रौद्योगिकी एवं विज्ञान संस्थान, ग्वालियर (म.प्र.), भारत
              </p>
              <p className="text-[10px] font-black text-[#133075]">
                Madhav Institute of Technology &amp; Science, Gwalior
              </p>
              <span className="text-[9px] font-bold text-red-600 block">Deemed University • NAAC A++</span>
              
              {/* Inauguration Ceremony Banner Ribbon */}
              <div className="mt-1 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white font-extrabold text-xs tracking-widest uppercase py-0.5 px-3 rounded shadow-xs">
                INAUGURATION CEREMONY
              </div>
            </div>

            {/* Framed Inspirational Wall Quotes seen in the original photo! */}
            <div className="grid grid-cols-2 gap-2 text-left">
              {/* Dr. APJ Abdul Kalam Quote */}
              <div className="bg-white/85 backdrop-blur-md p-2.5 rounded shadow border-l-4 border-amber-500">
                <p className="text-[9.5px] italic text-slate-800 leading-tight">
                  &ldquo;Creativity is the key to success in the future, and education is where teachers can bring creativity in children&rdquo;
                </p>
                <p className="text-[8.5px] font-bold text-slate-900 mt-1 text-right">
                  — Dr. APJ Abdul Kalam
                </p>
              </div>

              {/* Mahatma Gandhi Quote */}
              <div className="bg-white/85 backdrop-blur-md p-2.5 rounded shadow border-l-4 border-emerald-500">
                <p className="text-[9.5px] italic text-slate-800 leading-tight">
                  &ldquo;Be the change you want to see in the world&rdquo;
                </p>
                <p className="text-[8.5px] font-bold text-slate-900 mt-1 text-right">
                  — Mahatma Gandhi
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Hero Caption */}
          <div className="absolute bottom-6 left-4 sm:left-8 max-w-xl z-20 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#dc2626] text-white text-xs font-bold uppercase tracking-wider mb-2 shadow">
              <Award className="w-3.5 h-3.5" />
              <span>Campus Milestone</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white drop-shadow-md tracking-tight">
              Inauguration &amp; Academic Conclave
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 drop-shadow leading-relaxed line-clamp-2">
              Empowering future technocrats, innovators, and leaders through world-class technical education.
            </p>
          </div>
        </div>
      ) : (
        /* Other Slides */
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-100"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

          {/* Slide Caption */}
          <div className="absolute bottom-6 left-4 sm:left-8 max-w-xl z-20 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0f3b7d] text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 shadow border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{slide.tag}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white drop-shadow-md tracking-tight">
              {slide.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 drop-shadow leading-relaxed line-clamp-2">
              {slide.subtitle}
            </p>
          </div>
        </div>
      )}

      {/* Floating Recruitment Overlay Card (Exact match to screenshot!) */}
      <RecruitmentOverlay
        isOpen={recruitmentCardOpen}
        onClose={() => setRecruitmentCardOpen(false)}
        onSelectNotice={onSelectNotice}
      />

      {/* Button to reopen Recruitment Card if dismissed */}
      {!recruitmentCardOpen && (
        <button
          onClick={() => setRecruitmentCardOpen(true)}
          className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0e3b7b] hover:bg-[#092955] text-white text-xs font-bold px-3 py-2 rounded shadow-lg border border-amber-400 transition-all cursor-pointer animate-in fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span>View Recruitment 2026</span>
        </button>
      )}

      {/* Right Carousel Navigation Arrow (Exact match to circular dark translucent button in user screenshot) */}
      <button
        id="btn-carousel-next"
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition-all cursor-pointer shadow-lg active:scale-95 border border-white/20"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Left Carousel Navigation Arrow */}
      <button
        id="btn-carousel-prev"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center backdrop-blur-xs transition-all cursor-pointer shadow-lg active:scale-95 border border-white/20"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Carousel Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
        {CAROUSEL_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all rounded-full cursor-pointer ${
              currentSlide === idx
                ? 'w-7 h-2 bg-amber-400'
                : 'w-2 h-2 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Cyan 3x3 Grid Quick Launcher Button at Bottom Right (Exact match to screenshot!) */}
      <QuickLauncher onSelectItem={onSelectQuickLink} />
    </div>
  );
};
