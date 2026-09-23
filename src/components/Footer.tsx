import React from 'react';
import { MapPin, Phone, Mail, Globe, Shield, Award, ExternalLink, ChevronRight, Heart } from 'lucide-react';
import { MitsSealLogo } from './Logos';

interface FooterProps {
  onOpenRecruitment: () => void;
  onOpenNotifications: () => void;
  onOpenContact: () => void;
  onOpenAlumni: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRecruitment,
  onOpenNotifications,
  onOpenContact,
  onOpenAlumni,
}) => {
  return (
    <footer id="main-footer" className="w-full bg-[#092248] text-white pt-10 pb-6 border-t-4 border-[#dc2626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-blue-900/80">
          
          {/* Column 1: Institute Overview & Crest */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-white rounded-full">
                <MitsSealLogo className="w-14 h-14" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white uppercase tracking-wider leading-snug">
                  MITS Gwalior
                </h4>
                <p className="text-[10px] text-amber-300 font-semibold">Deemed University • Estd. 1957</p>
                <p className="text-[9px] text-emerald-300 font-bold uppercase tracking-wider">NAAC A++ ACCREDITED</p>
              </div>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Madhav Institute of Technology &amp; Science is an autonomous pioneer institution dedicated to engineering, technology, architecture, and scientific innovation under the Ministry of Education, Govt. of India.
            </p>
            
            <div className="pt-1 text-xs text-amber-300 font-bold">
              &ldquo;Work is Worship&rdquo;
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-xs uppercase tracking-widest text-amber-400 border-b border-blue-800 pb-1.5">
              Essential Portals
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={onOpenRecruitment}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-red-400" />
                  <span>Faculty &amp; Staff Recruitment 2026</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenNotifications}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-red-400" />
                  <span>Official Circulars &amp; Notifications</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAlumni}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-red-400" />
                  <span>Global Alumni Association</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-red-400" />
                  <span>Admission Desk &amp; Fee Counter</span>
                </button>
              </li>
              <li>
                <a
                  href="#aviation"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-red-400" />
                  <span>DGCA Drone Training Academy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Statutory Compliances & Disclosures */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-xs uppercase tracking-widest text-amber-400 border-b border-blue-800 pb-1.5">
              Governance &amp; RTI
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="hover:text-amber-300 cursor-pointer flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-blue-400" />
                <span>Mandatory Public Disclosures (AICTE)</span>
              </li>
              <li className="hover:text-amber-300 cursor-pointer flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-blue-400" />
                <span>Right to Information (RTI Cell)</span>
              </li>
              <li className="hover:text-amber-300 cursor-pointer flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-blue-400" />
                <span>National Institutional Ranking Framework (NIRF)</span>
              </li>
              <li className="hover:text-amber-300 cursor-pointer flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-blue-400" />
                <span>Internal Complaints Committee (ICC)</span>
              </li>
              <li className="hover:text-amber-300 cursor-pointer flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-blue-400" />
                <span>Equal Opportunity &amp; SC/ST Cell</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Emergency Helplines */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-xs uppercase tracking-widest text-amber-400 border-b border-blue-800 pb-1.5">
              Campus Address
            </h5>
            <div className="text-xs text-slate-300 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>
                  Race Course Road, Gwalior - 474005 (M.P.), India
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>+91-751-2409300, 2409354</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>info@mitsgwalior.in</span>
              </p>
            </div>

            <div className="p-2.5 bg-red-950/60 border border-red-800 rounded mt-3">
              <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider block">
                Anti-Ragging 24x7 Helpline
              </span>
              <p className="text-xs font-black text-white mt-0.5">
                Toll Free: 1800-180-5522
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Accreditation & Copyright Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p className="text-center md:text-left">
            &copy; 2026 Madhav Institute of Technology &amp; Science, Gwalior (M.P.), India. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Use</span>
            <span>•</span>
            <span>Hyperlinking Policy</span>
            <span>•</span>
            <span>Site Map</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
