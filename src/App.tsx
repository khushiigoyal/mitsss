import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { NotificationTicker } from './components/NotificationTicker';
import { CampusStats } from './components/CampusStats';
import { FeaturedSections } from './components/FeaturedSections';
import { Footer } from './components/Footer';
import { RecruitmentModal } from './components/RecruitmentModal';
import { NotificationsModal } from './components/NotificationsModal';
import { ContactModal } from './components/ContactModal';
import { SearchModal } from './components/SearchModal';
import { AlumniModal } from './components/AlumniModal';
import { ItemDetailModal } from './components/ItemDetailModal';
import { RECRUITMENT_NOTICES } from './data/portalData';
import { RecruitmentNotice, QuickLinkItem } from './types';

export default function App() {
  // Accessibility state
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Modals state
  const [recruitmentNotice, setRecruitmentNotice] = useState<RecruitmentNotice | null>(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [alumniOpen, setAlumniOpen] = useState(false);
  const [recruitmentCardOpen, setRecruitmentCardOpen] = useState(true);

  // Generic selected item detail modal
  const [selectedItemDetail, setSelectedItemDetail] = useState<{ title: string; description?: string } | null>(null);

  // Keyboard shortcut for search (⌘K or Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setRecruitmentNotice(null);
        setNotificationsOpen(false);
        setContactOpen(false);
        setSearchOpen(false);
        setAlumniOpen(false);
        setSelectedItemDetail(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectQuickLink = (item: QuickLinkItem) => {
    setSelectedItemDetail({
      title: `${item.name} (${item.category})`,
      description: item.description,
    });
  };

  const getFontSizeClass = () => {
    if (fontSize === 'large') return 'text-[106%]';
    if (fontSize === 'larger') return 'text-[114%]';
    return 'text-[100%]';
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-200 ${getFontSizeClass()} ${
        highContrast ? 'bg-black text-white selection:bg-yellow-400 selection:text-black' : 'bg-stone-100 text-slate-900'
      }`}
    >
      {/* Top Accessibility & Institutional Header */}
      <Header
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        onOpenRecruitment={() => setRecruitmentNotice(RECRUITMENT_NOTICES[0])}
        onOpenNotifications={() => setNotificationsOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        onOpenAlumni={() => setAlumniOpen(true)}
      />

      {/* Main Navigation Bar */}
      <Navbar
        highContrast={highContrast}
        onSelectItem={(title, desc) => setSelectedItemDetail({ title, description: desc })}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Hero Banner Section (matches user uploaded image with inauguration slide & floating recruitment card) */}
      <main className="flex-1 w-full" id="home">
        <HeroCarousel
          onSelectNotice={(notice) => setRecruitmentNotice(notice)}
          onSelectQuickLink={handleSelectQuickLink}
          recruitmentCardOpen={recruitmentCardOpen}
          setRecruitmentCardOpen={setRecruitmentCardOpen}
        />

        {/* Bottom Red Notifications Ticker Bar (matches screenshot) */}
        <NotificationTicker
          highContrast={highContrast}
          onOpenAll={() => setNotificationsOpen(true)}
        />

        {/* Institutional Stats & Accreditation Ribbon */}
        <CampusStats highContrast={highContrast} />

        {/* Featured Creative & Interactive Sections */}
        <FeaturedSections
          highContrast={highContrast}
          onOpenRecruitment={() => setRecruitmentNotice(RECRUITMENT_NOTICES[0])}
          onOpenContact={() => setContactOpen(true)}
          onSelectNotice={(notice) => setRecruitmentNotice(notice)}
        />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenRecruitment={() => setRecruitmentNotice(RECRUITMENT_NOTICES[0])}
        onOpenNotifications={() => setNotificationsOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        onOpenAlumni={() => setAlumniOpen(true)}
      />

      {/* Interactive Modals */}
      <RecruitmentModal
        notice={recruitmentNotice}
        onClose={() => setRecruitmentNotice(null)}
      />

      <NotificationsModal
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectItem={(title, desc) => setSelectedItemDetail({ title, description: desc })}
      />

      <AlumniModal
        isOpen={alumniOpen}
        onClose={() => setAlumniOpen(false)}
      />

      <ItemDetailModal
        title={selectedItemDetail?.title || null}
        description={selectedItemDetail?.description}
        onClose={() => setSelectedItemDetail(null)}
        onOpenContact={() => {
          setSelectedItemDetail(null);
          setContactOpen(true);
        }}
      />
    </div>
  );
}
