import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, ShieldAlert, ListChecks } from 'lucide-react';

const AppLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#ffffff" />
    <rect x="34" y="16" width="32" height="68" rx="4" fill="#27ae60" />
    <rect x="16" y="34" width="68" height="32" rx="4" fill="#27ae60" />
  </svg>
);

const PhoneMockup1 = () => (
  <div className="relative w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-[#1a1a1a] overflow-hidden flex flex-col">
    <div className="absolute top-0 inset-x-0 h-6 bg-[#1a1a1a] rounded-b-3xl w-40 mx-auto z-20"></div>
    <div className="flex-1 overflow-y-auto bg-gray-50 p-4 pt-10 pb-24 no-scrollbar">
      <h2 className="text-xl font-bold text-gray-900 mb-1 font-sans">What brings you here?</h2>
      <p className="text-sm text-gray-500 mb-6 font-sans">Select your main symptom</p>

      <div className="grid grid-cols-2 gap-2 mb-6">
        {['Headache', 'Fever', 'Diarrhea', 'Constipation', 'Cough', 'Nasal Congestion', 'Allergy', 'Heartburn'].map((symptom) => (
          <div key={symptom} className="bg-white border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-700 shadow-sm font-sans">
            {symptom}
          </div>
        ))}
      </div>

      <div className="bg-white border border-yellow-400 rounded-xl p-3 mb-4">
        <div className="bg-yellow-400 text-white text-[10px] font-bold px-2 py-1 rounded-full inline-block mb-2 font-sans">DISCLAIMER</div>
        <p className="text-xs text-gray-700 font-sans">Educational use only. Consult a pharmacist before taking any medication.</p>
      </div>
    </div>
    <div className="absolute bottom-0 inset-x-0 p-4 bg-white border-t border-gray-100">
      <div className="w-full bg-[#4ade80] text-white text-center py-3 rounded-xl font-bold shadow-md font-sans cursor-pointer hover:bg-[#22c55e] transition-colors">
        Continue
      </div>
    </div>
  </div>
);

const PhoneMockup2 = () => (
  <div className="relative w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-[#1a1a1a] overflow-hidden flex flex-col">
    <div className="absolute top-0 inset-x-0 h-6 bg-[#1a1a1a] rounded-b-3xl w-40 mx-auto z-20"></div>
    <div className="flex-1 overflow-y-auto bg-gray-50 p-4 pt-10 pb-24 no-scrollbar space-y-4">

      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 font-sans">aspirin</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <p className="text-xs text-gray-500 mb-1 font-sans">Available Brands:</p>
          <p className="text-sm text-gray-800 font-sans">Aspocid, Aspirin Bayer, Cevamol (effervescent)</p>
        </div>
        <div className="bg-red-50 border border-red-400 rounded-lg p-3 space-y-1">
          <p className="text-xs text-red-600 flex items-center gap-1 font-sans font-medium">⚠️ Risk of Reye syndrome in children</p>
          <p className="text-xs text-red-600 flex items-center gap-1 font-sans font-medium">⚠️ GI irritation</p>
          <p className="text-xs text-red-600 flex items-center gap-1 font-sans font-medium">⚠️ Avoid in bleeding disorders</p>
        </div>
        <p className="text-xs text-gray-400 mt-3 font-sans">Max use: 3 days</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 font-sans">naproxen</h3>
          <span className="bg-[#4ade80] text-white text-[10px] font-bold px-2 py-1 rounded-full font-sans">SAFE</span>
        </div>
        <p className="text-sm text-gray-600 mb-3 font-sans">Topical only per EDA OTC list.</p>
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <p className="text-xs text-gray-500 mb-1 font-sans">Available Brands:</p>
          <p className="text-sm text-gray-800 font-sans">Proxen gel, Aleve gel</p>
        </div>
        <div className="bg-red-50 border border-red-400 rounded-lg p-3 space-y-1">
          <p className="text-xs text-red-600 flex items-center gap-1 font-sans font-medium">⚠️ Topical only</p>
          <p className="text-xs text-red-600 flex items-center gap-1 font-sans font-medium">⚠️ Avoid in 3rd trimester</p>
        </div>
        <p className="text-xs text-gray-400 mt-3 font-sans">Max use: 7 days</p>
      </div>

    </div>
    <div className="absolute bottom-0 inset-x-0 p-4 bg-white border-t border-gray-100">
      <div className="w-full bg-[#4ade80] text-white text-center py-3 rounded-xl font-bold shadow-md font-sans cursor-pointer hover:bg-[#22c55e] transition-colors">
        Start Over
      </div>
    </div>
  </div>
);

export default function App() {
  // Download count starts at 0 and only increments on actual successful download clicks
  const [downloadCount, setDownloadCount] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    // Simulate the time it takes to prepare and start the APK download
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadCount(prev => prev + 1);
      
      // Trigger actual file download
      const link = document.createElement('a');
      link.href = '/DruggedApp.apk';
      link.download = 'DruggedApp.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#27ae60] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-6 md:px-12 py-8 flex justify-between items-center border-b border-gray-100"
      >
        <div className="flex items-center gap-4">
          <AppLogo className="w-10 h-10 drop-shadow-sm" />
          <div className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-gray-900">DruggedApp</div>
        </div>
        <button 
          onClick={handleDownload} 
          className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase border border-gray-200 text-gray-600 px-6 py-3 hover:border-[#27ae60] hover:text-[#27ae60] rounded-xl transition-colors"
        >
          Download APK
        </button>
      </motion.nav>

      {/* Hero Section */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-32 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="max-w-2xl"
        >
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}
            className="font-mono text-5xl md:text-[94px] font-bold text-left leading-tight md:leading-[82.5px] tracking-tight mb-6 md:mb-10 text-gray-900"
          >
            Clarity in <br/>
            <span className="italic text-[#27ae60] font-light">medication.</span>
          </motion.h1>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}
            className="font-mono text-base md:text-[19px] font-bold max-w-md text-gray-500 mb-10 md:mb-16 leading-relaxed"
          >
            The definitive medical guide for Over-The-Counter drugs. Stripped of noise, designed for precision.
          </motion.p>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-10 w-full sm:w-auto"
          >
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className="bg-[#27ae60] text-white px-10 py-5 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#219653] shadow-xl shadow-[#27ae60]/20 transition-all disabled:opacity-50 flex items-center justify-center gap-4 group rounded-2xl w-full sm:w-auto"
            >
              {isDownloading ? 'Initializing...' : 'Get The App'}
              {!isDownloading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </motion.div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative z-10"
          >
            <PhoneMockup1 />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.4, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="absolute top-16 -left-12 z-0 hidden md:block transform -rotate-6 scale-90 blur-[1px]"
          >
            <PhoneMockup2 />
          </motion.div>
        </div>
      </main>

      {/* Modern Features Grid */}
      <section className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
            >
              Everything you need to know.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500 font-sans"
            >
              A powerful, intuitive guide to over-the-counter medications, designed for safety and clarity.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "Symptom Analysis", desc: "Select your symptoms from a structured index to instantly locate relevant OTC categories." },
              { icon: ShieldAlert, title: "Safety Profiles", desc: "Uncompromising alerts for contraindications, age restrictions, and pregnancy safety." },
              { icon: ListChecks, title: "Brand Alternatives", desc: "A comprehensive registry of commercial brands mapped directly to active ingredients." }
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }
                }}
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#27ae60]/10 transition-all group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#27ae60]/10 text-[#27ae60] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#27ae60] group-hover:text-white transition-all duration-300">
                  <feat.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-3">{feat.title}</h3>
                <p className="text-gray-500 font-sans leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.2em] text-gray-500 font-sans"
      >
        <div className="flex items-center gap-3">
          <AppLogo className="w-6 h-6 grayscale opacity-50" />
          <div>&copy; {new Date().getFullYear()} DruggedApp</div>
        </div>
        <div className="text-center max-w-xs leading-relaxed">Educational use only. Always consult a licensed medical professional.</div>
        <div>All rights reserved</div>
      </motion.footer>
    </div>
  );
}
