// import React from 'react';
import { motion } from 'framer-motion';
import { Search, Mic, Send, Globe } from 'lucide-react';

const CandyChatUI = () => {
  // Animation variants for the background bubbles
  const bubbleVariants = {
    animate: (i) => ({
      x: [0, i.x, -i.x, 0],
      y: [0, i.y, -i.y, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: i.duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const options = [
    "Fee structure for 2025–26",
    "Admission process and eligibility",
    "Available courses and programs",
    "Placement statistics and companies",
    "Important dates and deadlines",
    "Scholarship opportunities",
  ];

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden font-sans text-slate-700">
      
      {/* --- Animated Background Bubbles --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">
        
        {/* Cyan Circle - Very Sharp */}
        <motion.div
          custom={{ x: 30, y: 20, duration: 12 }}
          variants={bubbleVariants}
          animate="animate"
          className="absolute top-[5%] left-[38%] w-64 h-64 bg-[#B2EBF2] rounded-full blur-[2px] opacity-100 shadow-inner"
        />

        {/* Large Purple Circle - Central */}
        <motion.div
          custom={{ x: -40, y: 40, duration: 15 }}
          variants={bubbleVariants}
          animate="animate"
          className="absolute top-[35%] left-[15%] w-130 h-130 bg-[#E0E7FF] rounded-full blur-[3px] opacity-100"
        />

        {/* Large Green Circle - Right */}
        <motion.div
          custom={{ x: 50, y: -30, duration: 18 }}
          variants={bubbleVariants}
          animate="animate"
          className="absolute top-[38%] right-[5%] w-125 h-125 bg-[#DCFCE7] rounded-full blur-[3px] opacity-100"
        />

        {/* Small Rose Circle - Bottom Left */}
        <motion.div
          custom={{ x: -25, y: -20, duration: 10 }}
          variants={bubbleVariants}
          animate="animate"
          className="absolute bottom-[15%] left-[8%] w-64 h-64 bg-[#FCE7F3] rounded-full blur-[2px] opacity-100 shadow-inner"
        />
      </div>

      {/* --- Header --- */}
      <header className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <span className="text-xl">🤖</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-indigo-900 leading-none">Candy</h1>
            <p className="text-xs text-slate-400 font-medium">Your Campus Guide</p>
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-slate-50 transition-colors">
          <Globe size={18} />
          <span className="text-sm font-medium">English</span>
        </button>
      </header>

      {/* --- Main Content --- */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-10">
        <div className="mb-8">
          <div className="inline-block bg-white px-6 py-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
            <p className="text-lg">Hi, I'm Candy. How can I help you today?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, idx) => (
            <button
              key={idx}
              className="bg-white/80 backdrop-blur-md p-5 rounded-2xl text-center font-semibold text-slate-600 shadow-sm border border-white hover:shadow-md hover:scale-[1.02] transition-all duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      </main>

      {/* --- Input Bar --- */}
      <footer className="fixed bottom-8 left-0 right-0 z-20 px-6">
        <div className="max-w-4xl mx-auto relative group">
          <input
            type="text"
            placeholder="Ask anything about your campus..."
            className="w-full pl-6 pr-28 py-5 rounded-full bg-white shadow-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-lg"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button className="p-3 text-slate-400 hover:text-indigo-500 transition-colors">
              <Mic size={24} />
            </button>
            <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg active:scale-95">
              <Send size={24} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CandyChatUI;