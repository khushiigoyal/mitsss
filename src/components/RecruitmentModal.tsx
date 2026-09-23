import React, { useState } from 'react';
import { X, Briefcase, FileText, CheckCircle2, Download, Send, Calendar, Building, DollarSign } from 'lucide-react';
import { RecruitmentNotice } from '../types';

interface RecruitmentModalProps {
  notice: RecruitmentNotice | null;
  onClose: () => void;
}

export const RecruitmentModal: React.FC<RecruitmentModalProps> = ({ notice, onClose }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'apply'>('details');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [selectedPost, setSelectedPost] = useState('');
  const [experienceYears, setExperienceYears] = useState('2');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!notice) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden border border-slate-300 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f3b7d] text-white px-5 py-4 flex items-center justify-between border-b-2 border-amber-400 flex-shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-blue-800 rounded-lg text-amber-300">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                Official Recruitment Notice 2026
              </span>
              <h3 className="text-base font-bold leading-tight">
                {notice.category} Positions Advertisement
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md hover:bg-blue-900/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 flex-shrink-0 px-5 pt-2">
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-2 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'details'
                ? 'border-[#0f3b7d] text-[#0f3b7d]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Position Information &amp; Criteria
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`pb-2 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'apply'
                ? 'border-[#dc2626] text-[#dc2626]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Online Application Gateway</span>
            <span className="bg-red-100 text-red-700 text-[10px] px-1 rounded-full font-bold">Open</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4 text-slate-700 text-xs sm:text-sm">
          {activeTab === 'details' ? (
            <>
              {/* Notice Title Banner */}
              <div className="p-3.5 bg-blue-50/70 border-l-4 border-[#0f3b7d] rounded-r-md">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {notice.title}
                </h4>
                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-blue-700" />
                    <strong>Ref:</strong> {notice.referenceNo}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-red-600" />
                    <strong>Last Date:</strong> {notice.deadline}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                    <strong>Pay Scale:</strong> {notice.payScale}
                  </span>
                </div>
              </div>

              {/* Positions Offered */}
              <div>
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#0f3b7d] mb-2 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>Vacant Positions &amp; Disciplines</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {notice.positions.map((pos, i) => (
                    <li key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800">{pos}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minimum Eligibility */}
              <div>
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#0f3b7d] mb-1.5">
                  Eligibility &amp; Norms
                </h5>
                <p className="text-xs text-slate-600 bg-amber-50/60 p-3 rounded border border-amber-200 leading-relaxed">
                  {notice.eligibility}
                </p>
              </div>

              {/* Qualifications */}
              <div>
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#0f3b7d] mb-2">
                  Prescribed Essential Qualifications
                </h5>
                <div className="space-y-1.5">
                  {notice.qualifications.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Application Form */
            <div className="space-y-4">
              {isSubmitted ? (
                <div className="p-6 text-center space-y-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-base text-emerald-900">Application Submitted Successfully!</h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Your preliminary candidate registration for <strong>{selectedPost || notice.positions[0]}</strong> has been received under Application ID: <strong>MITS-2026-AP-{Math.floor(1000 + Math.random() * 9000)}</strong>. A confirmation email has been dispatched.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setActiveTab('details');
                    }}
                    className="px-4 py-1.5 bg-[#0f3b7d] text-white text-xs font-bold rounded cursor-pointer"
                  >
                    Back to Notice
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <p className="text-xs text-slate-600">
                    Please submit your candidate credentials below. All documents will be verified during candidate screening as per AICTE &amp; Institute norms.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Dr. / Prof. / Mr. / Ms."
                        className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="candidate@example.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Position Applied For *</label>
                    <select
                      value={selectedPost}
                      onChange={(e) => setSelectedPost(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                    >
                      {notice.positions.map((p, i) => (
                        <option key={i} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Relevant Experience (Years)</label>
                      <input
                        type="number"
                        min="0"
                        max="40"
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Curriculum Vitae (PDF) *</label>
                      <input
                        type="file"
                        accept=".pdf,.docx"
                        className="w-full px-2 py-1.5 border border-slate-300 rounded text-xs bg-slate-50 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Candidate Application Form</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 flex-shrink-0 text-xs">
          <button
            onClick={() => {
              alert('Downloading Official Gazette Notification PDF: ' + notice.referenceNo);
            }}
            className="flex items-center gap-1.5 text-blue-800 hover:text-blue-900 font-semibold cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official Circular PDF</span>
          </button>

          <div className="flex items-center space-x-2">
            {activeTab === 'details' && (
              <button
                onClick={() => setActiveTab('apply')}
                className="px-4 py-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold rounded cursor-pointer transition-colors"
              >
                Apply Online
              </button>
            )}
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-slate-300 hover:bg-slate-400 text-slate-800 font-semibold rounded cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
