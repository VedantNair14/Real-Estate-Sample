"use client";

import React, { useState, useEffect, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import PropertyCard from "@/components/shared/PropertyCard";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Map as MapIcon, List, SlidersHorizontal, Loader2, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import Magnetic from "@/components/shared/Magnetic";

const MOCK_PROPERTIES = [
  { id: 1, title: "The Glass Pavilion", location: "Malibu, CA", price: 12500000, beds: 5, baths: 6, sqft: 8500, property_type: "Villa", main_image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200", status: "For Sale" },
  { id: 2, title: "Skyline Penthouse", location: "Manhattan, NY", price: 8900000, beds: 3, baths: 4, sqft: 4200, property_type: "Penthouse", main_image: "https://images.unsplash.com/photo-1600607687940-c52fb0729a5c?auto=format&fit=crop&w=1200", status: "For Sale" },
  { id: 3, title: "Azure Coastal Villa", location: "Miami, FL", price: 15700000, beds: 6, baths: 8, sqft: 11000, property_type: "Mansion", main_image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200", status: "Exclusive" },
  { id: 4, title: "Modernist Desert Retreat", location: "Palm Springs, CA", price: 6500000, beds: 4, baths: 4, sqft: 5800, property_type: "Villa", main_image: "https://images.unsplash.com/photo-1600585154340-be6199f7e009?auto=format&fit=crop&w=1200", status: "For Sale" },
  { id: 5, title: "European Classic Estate", location: "Greenwich, CT", price: 22000000, beds: 8, baths: 12, sqft: 18000, property_type: "Mansion", main_image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200", status: "For Sale" },
];

const SearchContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [view, setView] = useState<"grid" | "map">("grid");
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(searchParams.get("location") || "");

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8001/api/properties", { timeout: 2000 });
        let results = response.data;
        
        const locationFilter = searchParams.get("location");
        const typeFilter = searchParams.get("type");
        
        if (locationFilter) {
          results = results.filter((p: any) => 
            p.location.toLowerCase().includes(locationFilter.toLowerCase())
          );
        }
        
        if (typeFilter && typeFilter !== "All") {
          results = results.filter((p: any) => 
            p.property_type === typeFilter || p.category === typeFilter
          );
        }

        setProperties(results);
      } catch (error) {
        console.warn("API unreachable, using production fallback data.");
        setProperties(MOCK_PROPERTIES);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [searchParams]);

  const handleSearch = () => {
    router.push(`/search?location=${query}`);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-luxury-black">
      <Navbar />
      
      {/* Premium Search Header */}
      <div className="pt-32 pb-8 shrink-0 relative z-20">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-10">
            <div className="w-full max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">Curated Intelligence</span>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gold/10 blur-2xl group-focus-within:bg-gold/20 transition-all duration-500" />
                <div className="relative glass rounded-[2rem] border-white/10 flex items-center px-8 h-20">
                  <Search className="text-white/30 w-6 h-6 mr-6" />
                  <input 
                    placeholder="Search by city, neighborhood, or legacy..." 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="flex-1 bg-transparent border-none outline-none text-white text-xl font-light placeholder:text-white/20"
                  />
                  <Magnetic>
                    <Button onClick={handleSearch} className="bg-gold hover:bg-white text-black font-bold rounded-xl px-6 h-12 ml-4">
                      Search
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 pb-2">
              <Sheet>
                <SheetTrigger
                  render={
                    <Button variant="outline" className="h-14 px-8 rounded-2xl gap-3 border-white/10 text-white hover:bg-white/5 font-bold uppercase tracking-widest text-[10px]">
                      <SlidersHorizontal className="w-4 h-4" />
                      Refine
                    </Button>
                  }
                />
                <SheetContent className="bg-luxury-dark border-white/5 text-white">
                  <SheetHeader>
                    <SheetTitle className="editorial-heading text-4xl text-white mb-10">Filters</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-12">
                    <div>
                      <p className="text-[10px] font-bold mb-6 uppercase tracking-[0.4em] text-white/30">Property Class</p>
                      <div className="grid grid-cols-2 gap-3">
                        {["All", "Villa", "Penthouse", "Mansion", "Apartment"].map((t) => (
                          <button key={t} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white hover:border-gold/50 transition-all">
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              
              <div className="flex bg-white/5 p-1.5 rounded-[1.5rem] border border-white/10">
                <button
                  onClick={() => setView("grid")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    view === "grid" ? "bg-gold text-black shadow-xl" : "text-white/40 hover:text-white"
                  }`}
                >
                  <List className="w-4 h-4" />
                  Gallery
                </button>
                <button
                  onClick={() => setView("map")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    view === "map" ? "bg-gold text-black shadow-xl" : "text-white/40 hover:text-white"
                  }`}
                >
                  <MapIcon className="w-4 h-4" />
                  Cartography
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative">
        <div className={`flex h-full transition-transform duration-700 ease-out-expo ${view === "map" ? "-translate-x-full md:translate-x-0" : ""}`}>
          {/* Results Column */}
          <div className="w-full md:w-[55%] lg:w-[45%] h-full overflow-y-auto custom-scrollbar p-6 lg:p-12">
            <div className="mb-10 flex items-center justify-between">
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em]">
                {loading ? "Decrypting..." : `Showing ${properties.length} Private Listings`}
              </p>
            </div>
            
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-32 gap-6"
                >
                  <Loader2 className="w-12 h-12 text-gold animate-spin" />
                  <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">Updating Portfolio...</span>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-20"
                >
                  {properties.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <PropertyCard property={property} />
                    </motion.div>
                  ))}
                  {properties.length === 0 && (
                    <div className="col-span-full text-center py-32 border border-dashed border-white/10 rounded-[3rem]">
                      <h3 className="editorial-heading text-3xl text-white mb-4">No Matches Found</h3>
                      <p className="text-white/20 font-light">Your selection criteria returned zero results in our current portfolio.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Map / Visual Column */}
          <div className="hidden md:block flex-1 h-full bg-luxury-dark relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#C5A358 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            
            <div className="absolute inset-0 flex items-center justify-center p-20">
              <div className="w-full h-full glass rounded-[4rem] border-white/5 relative overflow-hidden">
                {/* Fake Map Content */}
                <div className="absolute inset-0 opacity-50 grayscale contrast-125 scale-110" style={{ backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-118.4912,34.0195,11,0/1200x800?access_token=MOCK')" }} />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass px-10 py-5 rounded-full border-white/20 shadow-2xl flex items-center gap-4 animate-pulse">
                    <div className="w-3 h-3 bg-gold rounded-full" />
                    <span className="text-white font-bold uppercase tracking-widest text-[10px]">Real-Time Market Visualization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchPage = () => {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center bg-luxury-black">
        <Loader2 className="w-12 h-12 text-gold animate-spin" />
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage;

