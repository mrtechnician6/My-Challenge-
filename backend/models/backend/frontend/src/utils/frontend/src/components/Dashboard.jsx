import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getProtocolDay } from '../utils/dateLogic';

const Dashboard = () => {
  const currentDay = getProtocolDay();
  const progressPercent = (currentDay / 60) * 100;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans">
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm">The Discipline Protocol</h2>
        <h1 className="text-5xl font-black mt-2">DAY {currentDay} <span className="text-slate-600">/ 60</span></h1>
      </motion.div>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto mb-12">
        <div className="flex justify-between text-xs mb-2 text-slate-400 font-mono">
          <span>START: MAR 05</span>
          <span>{Math.round(progressPercent)}% COMPLETE</span>
        </div>
        <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-orange-600 to-yellow-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          />
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {['Cricket', 'Fitness', 'Study', 'Nutrition', 'Mindset', 'Sleep'].map((item, idx) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.02, borderColor: '#f97316' }}
            className="bg-[#111] border border-slate-800 p-6 rounded-2xl flex justify-between items-center cursor-pointer transition-colors"
          >
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-tighter">Category {idx + 1}</p>
              <h3 className="text-xl font-bold">{item}</h3>
            </div>
            <div className="h-10 w-10 rounded-full border-2 border-slate-700 flex items-center justify-center">
               {/* Checkbox Placeholder */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
