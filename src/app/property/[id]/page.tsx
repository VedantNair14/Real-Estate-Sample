"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Bed, Bath, Square, MapPin, Share2, Heart, ShieldCheck, Calendar, Phone, Mail, Loader2, ChevronLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Magnetic from "@/components/shared/Magnetic";
import { getMockProperty } from "@/lib/mockData";
import ConciergeInquiry from "@/components/shared/ConciergeInquiry";
import InteractiveFloorplan from "@/components/shared/InteractiveFloorplan";

const PropertyDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8001/api/properties/${params.id}`, { timeout: 2000 });
        setProperty(response.data);
      } catch (error) {
        console.warn("API unreachable, switching to production fallback.");
        setProperty(getMockProperty(params.id as string));
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchProperty();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-luxury-black gap-6">
        <Loader2 className="w-12 h-12 text-gold animate-spin" />
        <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">Retrieving Masterpiece...</span>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-luxury-black gap-8">
        <h1 className="editorial-heading text-5xl text-white">Estate <span className="italic text-gold">Not Found</span></h1>
        <Button onClick={() => router.back()} className="bg-gold text-black rounded-full px-10">Return to Portfolio</Button>
      </div>
    );
  }

  return (
    <div className="bg-luxury-black min-h-screen pb-24">
      <Navbar />
      
      {/* Immersive Hero Header */}
      <section className="pt-32 pb-12">
        <div className="container px-6 mx-auto">
          <motion.button 
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-white/40 hover:text-gold transition-colors mb-8 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Collection</span>
          </motion.button>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <Badge className="bg-gold/10 text-gold border border-gold/20 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold">
                  {property.property_type}
                </Badge>
                <div className="flex items-center text-white/30 text-[10px] uppercase font-bold tracking-widest">
                  <MapPin className="w-3 h-3 mr-2 text-gold" />
                  {property.location}
                </div>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="editorial-heading text-5xl md:text-8xl text-white mb-6"
              >
                {property.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-gold tracking-tighter"
              >
                ${property.price?.toLocaleString()}
              </motion.p>
            </div>
            
            <div className="flex gap-4">
              <Magnetic><Button variant="outline" size="icon" className="w-14 h-14 rounded-full border-white/10 text-white hover:bg-white/5"><Share2 className="w-5 h-5" /></Button></Magnetic>
              <Magnetic><Button variant="outline" size="icon" className="w-14 h-14 rounded-full border-white/10 text-white hover:bg-white/5"><Heart className="w-5 h-5" /></Button></Magnetic>
            </div>
          </div>

          {/* Cinematic Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[700px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:col-span-8 relative rounded-[3rem] overflow-hidden group"
            >
              <img 
                src={property.main_image || "https://images.unsplash.com/photo-1600585154340-be6199f7e009?q=80&w=2070&auto=format&fit=crop"} 
                alt="Main" 
                className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            <div className="md:col-span-4 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex-1 relative rounded-[3rem] overflow-hidden group"
              >
                <img src="https://images.unsplash.com/photo-1600607687940-c52fb0729a5c?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-[1.5s]" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex-1 relative rounded-[3rem] overflow-hidden group"
              >
                <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-[1.5s]" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button variant="outline" className="text-white border-white/40 hover:bg-white hover:text-black rounded-full px-8">View All Media</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details & Intelligence */}
      <section className="py-20">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left Content */}
            <div className="flex-1">
              {/* Refined Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-white/5 mb-16">
                {[
                  { icon: Bed, label: "Bedrooms", val: property.beds?.toString().padStart(2, '0') },
                  { icon: Bath, label: "Bathrooms", val: property.baths?.toString().padStart(2, '0') },
                  { icon: Square, label: "Living Area", val: `${property.sqft?.toLocaleString()} ft²` },
                  { icon: ShieldCheck, label: "Integrity", val: "Verified" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold mb-3">{stat.label}</p>
                    <div className="flex items-center gap-3">
                      <stat.icon className="w-5 h-5 text-gold" />
                      <span className="text-2xl font-bold text-white tracking-tighter">{stat.val}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Narratives & Features */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-transparent border-b border-white/5 w-full justify-start rounded-none h-auto p-0 mb-12 gap-10">
                  {["Overview", "Amenities", "Location Intelligence"].map((tab) => (
                    <TabsTrigger 
                      key={tab}
                      value={tab.toLowerCase().split(' ')[0]} 
                      className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none px-0 py-4 font-bold uppercase tracking-[0.3em] text-[10px] text-white/40 data-[state=active]:text-white transition-all"
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value="overview" className="text-white/60 leading-relaxed text-xl font-light whitespace-pre-wrap">
                  {property.description}
                </TabsContent>
                <TabsContent value="amenities">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {["Biometric Security", "Wine Vault", "Private Helipad", "Smart Home OS", "Geothermal Heating", "Service Quarters"].map(f => (
                      <div key={f} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                        <CheckCircle2 className="w-5 h-5 text-gold" />
                        <span className="text-white/70 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Architectural Intelligence */}
              <div className="mt-24">
                <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Architecture</span>
                <h3 className="editorial-heading text-4xl md:text-5xl text-white mb-12">
                  Structural <span className="italic text-gold">Poetry</span>
                </h3>
                <InteractiveFloorplan />
              </div>
            </div>

            {/* Sticky Interaction Sidebar */}
            <div className="w-full lg:w-[450px]">
              <div className="sticky top-32 glass p-10 rounded-[3.5rem] border-white/5 shadow-2xl">
                <div className="flex items-center gap-5 mb-10">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Private Advisor</span>
                    </div>
                    <h4 className="font-bold text-2xl text-white">Elena Sterling</h4>
                    <p className="text-white/40 text-sm">Luxury Estates Director</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-10">
                  <Magnetic>
                    <Button 
                      onClick={() => setIsInquiryOpen(true)}
                      className="w-full h-16 bg-gold hover:bg-white text-black font-bold rounded-2xl gap-3 text-lg transition-all duration-500"
                    >
                      <Calendar className="w-5 h-5" />
                      Secure a Private Showing
                    </Button>
                  </Magnetic>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      onClick={() => setIsInquiryOpen(true)}
                      variant="outline" className="h-14 rounded-2xl border-white/10 text-white hover:bg-white/5 gap-2 text-xs uppercase tracking-widest font-bold"
                    >
                      <Phone className="w-4 h-4" />
                      Concierge
                    </Button>
                    <Button 
                      onClick={() => setIsInquiryOpen(true)}
                      variant="outline" className="h-14 rounded-2xl border-white/10 text-white hover:bg-white/5 gap-2 text-xs uppercase tracking-widest font-bold"
                    >
                      <Mail className="w-4 h-4" />
                      Inquiry
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConciergeInquiry isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </div>
  );
};

export default PropertyDetailPage;

