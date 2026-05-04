"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import PropertyCard from "@/components/shared/PropertyCard";
import { motion } from "framer-motion";
import { Search, Map as MapIcon, List, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SEARCH_RESULTS = [
  {
    id: "1",
    title: "Azure Horizon Penthouse",
    price: "$4,250,000",
    location: "Malibu, CA",
    beds: 4,
    baths: 5,
    sqft: 3850,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    category: "Exclusive"
  },
  {
    id: "2",
    title: "The Onyx Villa",
    price: "$8,900,000",
    location: "Beverly Hills, CA",
    beds: 6,
    baths: 8,
    sqft: 7200,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    category: "Modern"
  },
  {
    id: "3",
    title: "Verdant Estate",
    price: "$2,750,000",
    location: "Austin, TX",
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    category: "Contemporary"
  },
  {
    id: "4",
    title: "Celestial Heights",
    price: "$12,000,000",
    location: "New York, NY",
    beds: 3,
    baths: 4,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1600607687940-c52fb0729a5c?q=80&w=2070&auto=format&fit=crop",
    category: "Luxury"
  }
];

const SearchPage = () => {
  const [view, setView] = useState<"grid" | "map">("grid");

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      
      {/* Search Header */}
      <div className="pt-24 pb-6 bg-white border-b border-gray-100">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 w-full max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search by city, neighborhood, or ZIP..." 
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
                  {/* Filter content would go here */}
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

      {/* Content Area */}
      <div className="flex-1 overflow-hidden relative">
        <div className={`flex h-full transition-transform duration-500 ${view === "map" ? "-translate-x-full md:translate-x-0" : ""}`}>
          
          {/* Listings Panel */}
          <div className="w-full md:w-[60%] lg:w-[50%] h-full overflow-y-auto bg-gray-50/50 p-6 md:p-10">
            <div className="mb-8">
              <p className="text-gray-500 text-sm font-medium">Found 24 exclusive properties in California</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SEARCH_RESULTS.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

          {/* Map Panel (Placeholder) */}
          <div className="hidden md:block flex-1 h-full bg-gray-200 relative">
            <div 
              className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-118.4912,34.0195,10,0/1200x800?access_token=MOCK_TOKEN')] bg-cover bg-center"
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

export default SearchPage;
