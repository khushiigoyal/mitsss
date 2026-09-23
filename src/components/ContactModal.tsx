import React, { useState } from 'react';
import { X, MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', department: 'Admissions Desk', query: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-slate-300 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#f25c27] text-white px-5 py-4 flex items-center justify-between border-b-2 border-amber-300 flex-shrink-0">
          <div>
            <h3 className="text-base font-bold leading-tight">Contact MITS Gwalior</h3>
            <p className="text-xs text-orange-100">Campus administration, admissions &amp; inquiry helpline</p>
          </div>
          <button
            onClick={onClose}
            className="text-orange-200 hover:text-white p-1 rounded-md hover:bg-orange-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4 text-slate-700 text-xs sm:text-sm">
          {/* Institutional Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#0f3b7d] text-xs">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Campus Location</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Madhav Institute of Technology &amp; Science (MITS)<br />
                Race Course Road, Gwalior - 474005 (M.P.), INDIA
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#0f3b7d] text-xs">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Telephone Directory</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                EPABX: +91-751-2409300, 2409354<br />
                Admissions: +91-751-2409397 / 398<br />
                Director Office: +91-751-2409301
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#0f3b7d] text-xs">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Email Helplines</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                General: info@mitsgwalior.in<br />
                Admissions: admission@mitsgwalior.in<br />
                Placements: tpo@mitsgwalior.in
              </p>
            </div>

            <div className="p-3 bg-red-50 rounded-lg border border-red-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-red-800 text-xs">
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>Anti-Ragging 24x7 Helpline</span>
              </div>
              <p className="text-xs text-red-700 leading-relaxed font-medium">
                Toll Free: 1800-180-5522<br />
                Security Control: +91-751-2409399
              </p>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="pt-2 border-t border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 text-[#0f3b7d]">
              Submit an Inquiry / Request Information
            </h4>

            {submitted ? (
              <div className="p-4 bg-emerald-50 rounded border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-emerald-900 text-sm">Inquiry Dispatched Successfully</h5>
                <p className="text-xs text-emerald-800">
                  Thank you, <strong>{formData.name}</strong>. The {formData.department} will respond to your query at {formData.email} within 1 business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-3 py-1 bg-emerald-700 text-white text-xs font-bold rounded"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Candidate / Guardian / Scholar Name"
                      className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Concerned Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                  >
                    <option value="Admissions Desk">Admissions Desk (B.Tech / M.Tech / Ph.D.)</option>
                    <option value="Examination Section">Examination &amp; Degree Verification</option>
                    <option value="Training & Placements">Corporate &amp; Placement Inquiries</option>
                    <option value="Registrar Office">Administration &amp; General Inquiries</option>
                    <option value="Aviation Training">Aviation &amp; Drone Training Academy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Question *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    placeholder="Provide details about your academic query, admission year, or requirement..."
                    className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-[#f25c27] hover:bg-[#d94815] text-white font-bold text-xs rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry to MITS Secretariat</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 flex-shrink-0">
          <span>Office Hours: Mon - Fri (10:00 AM - 5:30 PM)</span>
          <button
            onClick={onClose}
            className="px-4 py-1 bg-slate-300 hover:bg-slate-400 text-slate-800 font-semibold rounded cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
