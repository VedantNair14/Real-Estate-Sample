"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import { useEstateStore } from "@/store/useEstateStore";
import PropertyCard from "@/components/shared/PropertyCard";
import { motion } from "framer-motion";
import { Heart, Calendar, MessageSquare, User, Settings, LogOut, ShieldCheck, TrendingUp, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/shared/Magnetic";

const DashboardPage = () => {
  const { favorites } = useEstateStore();

  return (
    <div className="bg-luxury-black min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container px-6 mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-white/5 pb-16">
            <div className="max-w-2xl">
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Concierge Access</span>
              <h1 className="editorial-heading text-5xl md:text-7xl text-white">
                Welcome Back, <span className="italic text-gold">Julian</span>
              </h1>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Verified Principal</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-80">
              <div className="glass rounded-[3rem] p-8 border-white/5 sticky top-32">
                <div className="flex items-center gap-5 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold font-bold text-xl border border-gold/20">
                    JS
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Julian Sterling</h3>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Elite Tier</p>
                    </div>
                  </div>
                </div>

                <nav className="space-y-2">
                  {[
                    { icon: Heart, label: "Private Collection", active: true },
                    { icon: Calendar, label: "Scheduled Visits", active: false },
                    { icon: MessageSquare, label: "Advisory Logs", active: false },
                    { icon: User, label: "Identity Profile", active: false },
                    { icon: Settings, label: "Preferences", active: false },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                        item.active 
                          ? "bg-gold text-black shadow-lg shadow-gold/20" 
                          : "text-white/40 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="pt-8 mt-8 border-t border-white/5">
                    <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all">
                      <LogOut className="w-4 h-4" />
                      Terminate Session
                    </button>
                  </div>
                </nav>
              </div>
            </aside>

            {/* Main Workspace */}
            <main className="flex-1">
              
              {/* Client Performance Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {[
                  { label: "Portfolio Value", val: "$42.8M", trend: "+8.2%", icon: TrendingUp },
                  { label: "Active Interests", val: "12 Assets", trend: "Curated", icon: Heart },
                  { label: "Next Briefing", val: "Oct 12", trend: "14:00 GMT", icon: Clock },
                ].map((stat, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                      <stat.icon className="w-4 h-4 text-gold" />
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">{stat.label}</p>
                    <div className="flex items-end gap-3">
                      <h4 className="text-3xl font-bold text-white tracking-tighter">{stat.val}</h4>
                      <span className="text-[10px] font-bold text-gold/60 mb-1">{stat.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Favorites Grid */}
              <div className="mb-10 flex justify-between items-end">
                <div>
                  <h2 className="editorial-heading text-4xl text-white mb-2">Private <span className="italic">Collection</span></h2>
                  <p className="text-white/30 text-sm">Securely stored high-value assets for your consideration.</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">{favorites.length} Items</span>
              </div>

              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {favorites.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="glass rounded-[3rem] p-24 text-center border-dashed border-white/10">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/5">
                    <Heart className="w-10 h-10 text-white/10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Your collection is currently empty</h3>
                  <p className="text-white/30 mb-10 max-w-sm mx-auto leading-relaxed">Our intelligence team is curating new assets daily. Start exploring our global portfolio to begin your legacy.</p>
                  <Magnetic>
                    <Button className="bg-gold hover:bg-white text-black rounded-full px-12 h-16 font-bold uppercase tracking-widest text-[10px]">
                      Explore Global Portfolio
                    </Button>
                  </Magnetic>
                </div>
              )}
            </main>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
