import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, ShieldAlert, ListChecks, Search, HelpCircle, FileText, CheckCircle2, ChevronRight, Menu, Star, StarHalf, X } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

const AppLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#ffffff" />
    <rect x="34" y="16" width="32" height="68" rx="4" fill="#27ae60" />
    <rect x="16" y="34" width="68" height="32" rx="4" fill="#27ae60" />
  </svg>
);

const StaticPhoneMockup = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => (
  <div className={`shrink-0 bg-slate-900 rounded-[44px] p-2 sm:p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-[4px] sm:border-[6px] border-slate-900 overflow-hidden relative ${className}`}>
    <div className="absolute top-0 inset-x-0 h-4 sm:h-6 bg-slate-900 rounded-b-2xl w-24 sm:w-32 mx-auto z-40" />
    <div className="h-full w-full rounded-[30px] overflow-hidden bg-white flex flex-col relative z-10">
      <img src={src} alt={alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
  </div>
);

// --- Main Page Component ---

export default function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);

    try {
      // Secretly track the download click in Firebase without disturbing the user
      await addDoc(collection(db, 'download_clicks'), {
        clickedAt: serverTimestamp(),
        userAgent: navigator.userAgent
      });
    } catch (error) {
      console.warn("Analytics error (non-blocking): ", error);
    }

    setTimeout(() => {
      setIsDownloading(false);
      // Direct download link generated from Google Drive ID
      window.location.href = 'https://drive.google.com/uc?export=download&id=1j461o46j6Rd7BZxurd21nWilBXEvjcvo';
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#27ae60] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 py-8 flex justify-between items-center border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-xl z-50"
      >
        <div className="flex items-center gap-3">
          <AppLogo className="w-9 h-9" />
          <div className="text-[15px] font-black tracking-[-0.01em] text-gray-900">DruggedApp</div>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-500">
          <a href="#features" className="hover:text-gray-900 transition-colors">Capabilities</a>
          <a href="#security" className="hover:text-gray-900 transition-colors">Safety</a>
          <button 
            onClick={handleDownload} 
            className="bg-gray-900 text-white px-8 py-3.5 rounded-2xl text-[13px] font-bold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="pt-20 pb-24 border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-3xl mx-auto lg:mx-0"
          >
            <h1 className="text-5xl sm:text-6xl md:text-[88px] font-black text-gray-900 leading-[1.0] md:leading-[0.95] tracking-[-0.04em] mb-8 lg:mb-10 lg:pr-12">
              Master your medicine cabinet.
            </h1>
            <p className="text-lg md:text-2xl font-medium text-gray-400 mb-10 lg:mb-14 leading-relaxed tracking-tight max-w-2xl lg:max-w-none mx-auto">
              The definitive pharmacist in your pocket. Access 23,000+ Egyptian medications, analyzed for safety and clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-6">
              <button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-[#27ae60] text-white px-12 py-5 rounded-[22px] text-[17px] font-bold hover:bg-[#219653] shadow-2xl shadow-[#27ae60]/40 transition-all active:scale-95 flex items-center justify-center gap-3 group"
              >
                {isDownloading ? 'Initializing...' : 'Get Started Now'}
                {!isDownloading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
              <div className="flex items-center justify-center gap-4 px-6 text-gray-400">
                <span className="text-[14px] font-bold">Trusted by more than 5 doctors and 3K patients</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid Gallery */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 md:mt-24 relative z-10 w-full mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "/1_welcome.png", alt: "Welcome Screen" },
              { src: "/2_symptoms.png", alt: "Symptoms Screen" },
              { src: "/3_search.png", alt: "Search Screen" },
              { src: "/4_search_active.png", alt: "Search Results" },
              { src: "/5_search_list.png", alt: "Search List" },
              { src: "/6_details.png", alt: "Drug Details" },
              { src: "/7_report.png", alt: "Report Issue" },
              { src: "/8_extra.png", alt: "Additional Screenshot" }
            ].map((img, i) => (
              <div 
                key={i} 
                className={`transform hover:-translate-y-2 transition-transform duration-500 shadow-2xl rounded-3xl overflow-hidden border-slate-900 bg-slate-900 ${
                  i === 0 
                  ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2 shadow-[0_20px_50px_-15px_rgba(39,174,96,0.3)] border-8 aspect-[1/2] md:aspect-auto md:h-[600px] lg:h-[700px]' 
                  : 'col-span-1 border-4 aspect-[1/2.2]'
                }`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={`w-full h-full rounded-2xl bg-[#0B1120] ${i === 0 ? 'object-cover object-top' : 'object-cover'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Expanded Features Section */}
      <section id="features" className="py-32 bg-slate-50/50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-[-0.02em]">
              Professional tools for better care.
            </h2>
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              DruggedApp provides uncompromised medical logic for domestic OTC medications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Search, title: "Universal Search", desc: "Instantly find active ingredients, commercial names, and medical categories." },
              { icon: ShieldAlert, title: "Safety Profiles", desc: "Rigorous alerts for contraindications, pediatric restrictions, and pregnancy grades." },
              { icon: ListChecks, title: "Brand Alternatives", desc: "Map any medication to dozens of equivalent commercial brands available in Egypt." },
              { icon: Activity, title: "Symptom Mapper", desc: "From common symptoms to targeted cures. A structured path to relief." },
              { icon: FileText, title: "Data Reporting", desc: "Crowdsourced accuracy. Report data issues directly from within the app for review." },
              { icon: CheckCircle2, title: "Verified Guide", desc: "Educational datasets curated to respect official medical protocols." }
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-default"
              >
                <div className="w-16 h-16 bg-white rounded-[24px] flex items-center justify-center mb-8 shadow-sm border border-gray-100 group-hover:bg-[#27ae60] group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <feat.icon size={28} strokeWidth={2.5} className="text-[#27ae60] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{feat.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="security" className="py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[0.95] tracking-tight">Built for medical precision.</h2>
            <div className="space-y-10">
              {[
                { t: "Offline Database", d: "Access critical drug data even without an active internet connection." },
                { t: "Unbiased Results", d: "Zero advertisements. We prioritize medical efficacy over brand promotion." },
                { t: "Symptom Privacy", d: "Your diagnostic flows are local and private to your device." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-1.5 h-12 bg-[#27ae60] rounded-full" />
                  <div>
                    <h4 className="text-xl font-black mb-2">{item.t}</h4>
                    <p className="text-gray-400 font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute w-[800px] h-[800px] bg-[#27ae60]/10 rounded-full blur-[120px]" />
            <div className="relative z-10 bg-white/5 backdrop-blur-2xl p-10 rounded-[40px] border border-white/10 max-w-sm">
              <ShieldAlert size={80} strokeWidth={1} className="text-[#27ae60] mb-8" />
              <div className="space-y-4">
                <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                <div className="h-2 w-full bg-white/10 rounded-full" />
                <div className="h-2 w-1/2 bg-white/10 rounded-full" />
              </div>
              <p className="mt-8 text-gray-400 font-medium text-sm leading-relaxed italic">
                * Our database is verified against the Egyptian Drug Authority (EDA). Always consult your doctor before starting any medication. Do not self-diagnose or self-medicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <AppLogo />
              <div className="text-[20px] font-black text-gray-900">DruggedApp</div>
            </div>
            <p className="text-gray-400 font-medium max-w-sm leading-relaxed mb-10">
              Transforming how patients understand medication in Egypt. Simple, safe, and reliable.
            </p>
          </div>
          <div>
            <h4 className="font-black text-gray-900 mb-8 uppercase text-xs tracking-widest">Platform</h4>
            <div className="flex flex-col gap-4 text-gray-400 font-bold text-sm">
              <a href="#" className="hover:text-gray-900">Features</a>
              <a href="#" className="hover:text-gray-900">Safety Guide</a>
              <a href="#" className="hover:text-gray-900">APK Download</a>
            </div>
          </div>
          <div>
            <h4 className="font-black text-gray-900 mb-8 uppercase text-xs tracking-widest">Support / Contact</h4>
            <div className="flex flex-col gap-4 text-gray-400 font-bold text-sm">
              <a href="#" className="hover:text-gray-900">Report Issue</a>
              <a href="#" className="hover:text-gray-900">Medical Privacy</a>
              <a href="mailto:weroperking@gmail.com" className="hover:text-gray-900 text-[#27ae60]">
                weroperking@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between gap-6 text-[11px] font-bold text-gray-300 uppercase tracking-widest">
          <div>&copy; {new Date().getFullYear()} DruggedApp. Expertly crafted for healing.</div>
          <div className="flex gap-8">
            <span className="text-red-300/50">Educational Use Only</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
