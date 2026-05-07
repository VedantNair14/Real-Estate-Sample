"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Check, Sparkles, Send, MapPin, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "./Magnetic";

interface ConciergeInquiryProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  { id: 1, title: "Intent", icon: Sparkles, description: "What brings you to our portfolio?" },
  { id: 2, title: "Interests", icon: Building2, description: "Which asset classes interest you?" },
  { id: 3, title: "Identity", icon: User, description: "How shall we address you?" },
];

const options = [
  { step: 1, choices: ["Acquisition", "Divestment", "Portfolio Management", "Consultation"] },
  { step: 2, choices: ["Modernist Villas", "Sky Penthouses", "Legacy Estates", "Private Islands"] },
];

const ConciergeInquiry = ({ isOpen, onClose }: ConciergeInquiryProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    intent: "",
    interest: "",
    name: "",
    email: "",
    message: ""
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl glass rounded-[4rem] border-white/5 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Sidebar (Progress) */}
            <div className="md:w-1/3 bg-white/5 p-12 flex flex-col justify-between border-r border-white/5">
              <div>
                <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-12 block">Concierge Entry</span>
                <div className="space-y-8">
                  {steps.map((s) => (
                    <div key={s.id} className={`flex items-start gap-4 transition-opacity duration-500 ${step >= s.id ? "opacity-100" : "opacity-20"}`}>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${step > s.id ? "bg-gold border-gold" : "border-white/20"}`}>
                        {step > s.id ? <Check className="w-4 h-4 text-black" /> : <span className="text-[10px] font-bold text-white">{s.id}</span>}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white">{s.title}</p>
                        <p className="text-[10px] text-white/40 mt-1">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-white/10 font-bold uppercase tracking-[0.5em] text-[8px]">
                Estate Intelligence v4.0
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-12 md:p-20 relative">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-3 rounded-full hover:bg-white/5 transition-colors"
              >
                <X className="w-6 h-6 text-white/20" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full flex flex-col justify-center"
                >
                  <h3 className="editorial-heading text-4xl md:text-5xl text-white mb-10">
                    {steps[step-1].description}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step < 3 ? (
                      options.find(o => o.step === step)?.choices.map((choice) => (
                        <button
                          key={choice}
                          onClick={() => {
                            setFormData({ ...formData, [step === 1 ? 'intent' : 'interest']: choice });
                            nextStep();
                          }}
                          className="group relative p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-gold/50 text-left transition-all duration-500"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-gold transition-colors">{choice}</span>
                          <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/10 group-hover:text-gold transition-all group-hover:translate-x-1" />
                        </button>
                      ))
                    ) : (
                      <div className="col-span-full space-y-6">
                        <div className="relative">
                          <input 
                            placeholder="Full Name" 
                            className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 h-16 text-white outline-none focus:border-gold/50 transition-colors placeholder:text-white/10"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="relative">
                          <input 
                            placeholder="Email Address" 
                            className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 h-16 text-white outline-none focus:border-gold/50 transition-colors placeholder:text-white/10"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <Magnetic>
                          <Button 
                            onClick={onClose}
                            className="w-full bg-gold hover:bg-white text-black h-16 rounded-2xl font-bold uppercase tracking-widest text-[10px] gap-3"
                          >
                            Initialize Consultation
                            <Send className="w-4 h-4" />
                          </Button>
                        </Magnetic>
                      </div>
                    )}
                  </div>

                  {step > 1 && (
                    <button 
                      onClick={prevStep}
                      className="mt-8 text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors text-left"
                    >
                      Back to previous
                    </button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConciergeInquiry;
