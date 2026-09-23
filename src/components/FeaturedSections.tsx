import React, { useState } from 'react';
import { Plane, Award, Calendar, BookOpen, ChevronRight, CheckCircle2, Sparkles, ExternalLink, GraduationCap, Users } from 'lucide-react';
import { RecruitmentNotice } from '../types';

interface FeaturedSectionsProps {
  onOpenRecruitment: () => void;
  onOpenContact: () => void;
  onSelectNotice: (notice: RecruitmentNotice) => void;
  highContrast: boolean;
}

export const FeaturedSections: React.FC<FeaturedSectionsProps> = ({
  onOpenRecruitment,
  onOpenContact,
  onSelectNotice,
  highContrast,
}) => {
  const [activeTab, setActiveTab] = useState<'aviation' | 'conferences' | 'academics' | 'gallery'>('aviation');

  return (
    <section id="featured-initiatives" className="w-full py-8 bg-stone-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300 pb-3">
          <div>
            <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wider block">
              MITS Centers of Excellence &amp; Programs
            </span>
            <h3 className="text-lg sm:text-2xl font-extrabold text-[#133075]">
              Explore Key Institutional Highlights
            </h3>
          </div>

          {/* Interactive Navigation Filter Tabs */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveTab('aviation')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'aviation'
                  ? 'bg-[#0f3b7d] text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Aviation Training</span>
            </button>
            <button
              onClick={() => setActiveTab('conferences')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'conferences'
                  ? 'bg-[#0f3b7d] text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Conferences 2026</span>
            </button>
            <button
              onClick={() => setActiveTab('academics')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'academics'
                  ? 'bg-[#0f3b7d] text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Programs</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#0f3b7d] text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Inauguration Gallery</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Aviation Training */}
        {activeTab === 'aviation' && (
          <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 animate-in fade-in duration-300">
            <div className="lg:col-span-7 p-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold uppercase tracking-wider">
                <Plane className="w-3.5 h-3.5" />
                <span>DGCA Authorized Remote Pilot Training Organization (RPTO)</span>
              </div>
              <h4 className="text-xl font-black text-[#0f3b7d] leading-snug">
                Advanced Aviation, UAV Flight Simulators &amp; Drone Technology Center
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                MITS Gwalior is among the select premier technical institutes in central India to host a Directorate General of Civil Aviation (DGCA) certified Drone Academy. The center offers professional certification for commercial drone pilots, precision agriculture mapping, GIS aerial surveying, and UAV engineering.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-800">DGCA Remote Pilot License (Micro &amp; Small)</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-800">UAV Flight Simulator &amp; Aerodynamics Lab</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-800">Drone Hardware Diagnostics &amp; Assembly</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-800">AI Aerial Surveillance &amp; Photogrammetry</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenContact}
                  className="px-4 py-2 bg-[#0f3b7d] hover:bg-[#0c3066] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Inquire Aviation Admissions
                </button>
                <a
                  href="#recruitment"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenRecruitment();
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 transition-colors"
                >
                  View Aviation Faculty Openings
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[260px] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80"
                alt="Aviation Drone Facility"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-400">DGCA Hub Gwalior</p>
                  <p className="text-sm font-bold">Dedicated Flight Training Grounds &amp; Flight Simulator</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Conferences */}
        {activeTab === 'conferences' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">
                  Upcoming International Conference
                </span>
                <span className="text-xs text-slate-500 font-semibold">Dec 18-20, 2026</span>
              </div>
              <h4 className="text-base font-bold text-[#0f3b7d] leading-snug">
                6th International Conference on Sustainable Engineering, Smart Computing &amp; Green Energy (ICSE-2026)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Organized under the patronage of MITS Gwalior in technical sponsorship with IEEE and Springer. All accepted peer-reviewed papers will be published in Scopus-indexed conference proceedings.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold">Paper Submission Open</span>
                <button
                  onClick={onOpenContact}
                  className="px-3 py-1.5 bg-[#0f3b7d] text-white font-bold rounded hover:bg-blue-900 cursor-pointer"
                >
                  Call for Papers &amp; Guidelines
                </button>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">
                  National Research Conclave
                </span>
                <span className="text-xs text-slate-500 font-semibold">Nov 08-09, 2026</span>
              </div>
              <h4 className="text-base font-bold text-[#0f3b7d] leading-snug">
                National Symposium on Artificial Intelligence, Cyber-Physical Systems &amp; Robotics (NSR-2026)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Featuring keynote addresses from renowned researchers from IISc Bangalore, IIT Delhi, DRDO, and ISRO. Interactive poster sessions for doctoral and post-graduate scholars.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-blue-700 font-bold">Early Bird Registration Active</span>
                <button
                  onClick={onOpenContact}
                  className="px-3 py-1.5 bg-slate-800 text-white font-bold rounded hover:bg-black cursor-pointer"
                >
                  Register as Delegate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Academics */}
        {activeTab === 'academics' && (
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 animate-in fade-in duration-300">
            <h4 className="text-lg font-bold text-[#0f3b7d]">
              Degrees &amp; Disciplines at MITS Deemed University
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                <h5 className="font-bold text-sm text-[#0f3b7d] border-b pb-1">Undergraduate (B.Tech - 4 Years)</h5>
                <ul className="space-y-1 text-slate-600">
                  <li>• Computer Science &amp; Engineering</li>
                  <li>• AI &amp; Machine Learning</li>
                  <li>• Data Science &amp; IoT</li>
                  <li>• Electronics &amp; Communication</li>
                  <li>• Electrical Engineering</li>
                  <li>• Mechanical Engineering</li>
                  <li>• Civil &amp; Infrastructure Engineering</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                <h5 className="font-bold text-sm text-[#0f3b7d] border-b pb-1">Postgraduate (M.Tech, MCA, MBA)</h5>
                <ul className="space-y-1 text-slate-600">
                  <li>• M.Tech in Cyber Security</li>
                  <li>• M.Tech in VLSI &amp; Embedded Systems</li>
                  <li>• M.Tech in Structural Engineering</li>
                  <li>• M.Tech in Thermal &amp; Design</li>
                  <li>• Master of Computer Applications (MCA)</li>
                  <li>• Master of Business Administration (MBA)</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                <h5 className="font-bold text-sm text-[#0f3b7d] border-b pb-1">Doctoral Research (Ph.D.)</h5>
                <ul className="space-y-1 text-slate-600">
                  <li>• Visvesvaraya Ph.D. Fellowships</li>
                  <li>• AICTE QIP Sponsored Fellowships</li>
                  <li>• Interdisciplinary Engineering Research</li>
                  <li>• Applied Physics, Chemistry &amp; Mathematics</li>
                  <li>• Management &amp; Humanities Studies</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Inauguration Gallery */}
        {activeTab === 'gallery' && (
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-[#0f3b7d]">Inauguration &amp; Campus Conclave Glimpses</h4>
                <p className="text-xs text-slate-500">Capturing historic milestones, faculty gatherings and student assemblies</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Official Campus Archives
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="relative rounded-lg overflow-hidden group h-40">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                  alt="Inauguration Ceremony"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5 text-white">
                  <p className="text-xs font-bold leading-tight">Grand Inauguration Ceremony</p>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden group h-40">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
                  alt="Historic Campus"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5 text-white">
                  <p className="text-xs font-bold leading-tight">1957 Heritage Block</p>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden group h-40">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                  alt="Robotics Lab"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5 text-white">
                  <p className="text-xs font-bold leading-tight">Center of Excellence Lab</p>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden group h-40">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
                  alt="Convocation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5 text-white">
                  <p className="text-xs font-bold leading-tight">Annual Convocation</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
