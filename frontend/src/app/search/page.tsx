"use client";

import React, { useState, useEffect, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import PropertyCard from "@/components/shared/PropertyCard";
import { motion } from "framer-motion";
import { Search, Map as MapIcon, List, SlidersHorizontal, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const [view, setView] = useState<"grid" | "map">("grid");
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(searchParams.get("location") || "");

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8001/api/properties");
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
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [searchParams]);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      
      <div className="pt-24 pb-6 bg-white border-b border-gray-100 shrink-0">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 w-full max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search by city, neighborhood, or ZIP..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  window.location.href = `/search?location=${query}`;
                }
              }}
              className="pl-12 h-14 rounded-2xl bg-gray-50 border-none focus-visible:ring-gold/20 text-lg"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="h-14 px-6 rounded-2xl gap-2 border-gray-200">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="py-8">
                  <h3 className="text-2xl font-bold mb-6">Advanced Filters</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-bold mb-3 uppercase tracking-wider text-gray-400">Property Type</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["All", "Villa", "Penthouse", "Mansion", "Apartment"].map((t) => (
                          <button key={t} className="px-4 py-2 rounded-xl bg-gray-50 text-sm font-medium hover:bg-gold hover:text-white transition-colors">
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
              <button
                onClick={() => setView("grid")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  view === "grid" ? "bg-white shadow-md text-luxury-black" : "text-gray-400 hover:text-luxury-black"
                }`}
              >
                <List className="w-4 h-4" />
                List
              </button>
              <button
                onClick={() => setView("map")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  view === "map" ? "bg-white shadow-md text-luxury-black" : "text-gray-400 hover:text-luxury-black"
                }`}
              >
                <MapIcon className="w-4 h-4" />
                Map
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden relative bg-gray-50/50">
        <div className={`flex h-full transition-transform duration-500 ${view === "map" ? "-translate-x-full md:translate-x-0" : ""}`}>
          <div className="w-full md:w-[60%] lg:w-[50%] h-full overflow-y-auto p-6 md:p-10">
            <div className="mb-8">
              <p className="text-gray-500 text-sm font-medium">
                {loading ? "Searching..." : `Found ${properties.length} exclusive properties`}
              </p>
            </div>
            
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-10 h-10 text-gold animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {properties.map((property) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
                {properties.length === 0 && (
                  <div className="col-span-full text-center py-20">
                    <h3 className="text-xl font-bold mb-2">No properties found</h3>
                    <p className="text-gray-400">Try searching for a different location or adjusting filters.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="hidden md:block flex-1 h-full bg-gray-200 relative">
            <div 
              className="absolute inset-0 bg-[url('https://api.mapbox.com/maps/static/-118.4912,34.0195,10,0/1200x800?access_token=MOCK')] bg-cover bg-center"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[2px]">
                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white/50">
                  <p className="text-sm font-bold text-luxury-black flex items-center gap-2">
                    <MapIcon className="w-4 h-4 text-gold" />
                    Interactive Map Integration
                  </p>
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
      <div className="flex h-screen items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 text-gold animate-spin" />
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage;
