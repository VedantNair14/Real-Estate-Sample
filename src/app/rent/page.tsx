"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import PropertyCard from "@/components/shared/PropertyCard";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Bed, Bath, MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const RENTAL_PROPERTIES = [
  {
    id: "r1",
    title: "Sunset Loft Suite",
    price: "$8,500/mo",
    location: "Santa Monica, CA",
    beds: 2,
    baths: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    category: "Loft",
  },
  {
    id: "r2",
    title: "The Grand Penthouse",
    price: "$25,000/mo",
    location: "Manhattan, NY",
    beds: 4,
    baths: 4,
    sqft: 4200,
    image: "https://images.unsplash.com/photo-1600607687940-c52fb0729a5c?q=80&w=2070&auto=format&fit=crop",
    category: "Penthouse",
  },
  {
    id: "r3",
    title: "Coastal Villa Retreat",
    price: "$15,000/mo",
    location: "Laguna Beach, CA",
    beds: 5,
    baths: 6,
    sqft: 5500,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    category: "Villa",
  },
  {
    id: "r4",
    title: "Modern Urban Flat",
    price: "$6,200/mo",
    location: "Austin, TX",
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    category: "Apartment",
  },
  {
    id: "r5",
    title: "Skyline Tower Residence",
    price: "$18,500/mo",
    location: "Miami, FL",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1600585154340-be6199f7e009?q=80&w=2070&auto=format&fit=crop",
    category: "Penthouse",
  },
  {
    id: "r6",
    title: "Hillside Garden Estate",
    price: "$22,000/mo",
    location: "Beverly Hills, CA",
    beds: 6,
    baths: 7,
    sqft: 7000,
    image: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2187&auto=format&fit=crop",
    category: "Mansion",
  },
];

import { MOCK_PROPERTIES } from "@/lib/mockData";

const RentPage = () => {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/properties", { timeout: 2000 });
        const rentals = response.data.filter((p: any) => p.status === "For Rent" || p.price < 100000);
        setProperties(rentals.length > 0 ? rentals : MOCK_PROPERTIES.filter(p => p.status === "For Rent"));
      } catch (error) {
        console.warn("API unreachable, switching to production fallback.");
        setProperties(MOCK_PROPERTIES.filter(p => p.status === "For Rent"));
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const filters = ["All", "Penthouse", "Villa", "Apartment", "Loft", "Mansion"];

  const filtered = activeFilter === "All"
    ? properties
    : properties.filter((p) => p.property_type === activeFilter || p.category === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Rent Properties"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="container px-6 mx-auto relative z-10 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-gold text-white border-none mb-4">For Rent</Badge>
            <h1 className="editorial-heading text-5xl md:text-7xl text-white mb-4">
              Luxury <span className="italic">Rentals</span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg">
              Experience premium living without the commitment. Our exclusive rental collection offers unmatched elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-5">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeFilter === f ? "bg-luxury-black text-white shadow-md" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search rentals..." className="pl-10 h-11 rounded-xl bg-gray-50 border-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Rental Info Banner */}
      <section className="py-10 bg-[#faf9f6]">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: CalendarDays, title: "Flexible Leasing", desc: "Short & long-term options available" },
              { icon: Bed, title: "Fully Furnished", desc: "Move-in ready luxury interiors" },
              { icon: MapPin, title: "Premium Locations", desc: "In the world's most desirable addresses" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-luxury-black">{title}</h4>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container px-6 mx-auto">
          <p className="text-gray-400 text-sm font-medium mb-8">
            Showing <span className="text-luxury-black font-bold">{filtered.length}</span> luxury rentals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property, i) => (
              <motion.div key={property.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentPage;
