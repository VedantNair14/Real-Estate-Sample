"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Bed, Bath, Square, MapPin, Share2, Heart, ShieldCheck, Calendar, Phone, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "next/navigation";
import axios from "axios";

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  property_type: string;
  beds: number;
  baths: number;
  sqft: number;
  main_image: string;
  status: string;
}

const PropertyDetailPage = () => {
  const params = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8001/api/properties/${params.id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProperty();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 text-gold animate-spin" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold">Property not found</h1>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Immersive Gallery */}
      <section className="pt-24 pb-10">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:col-span-2 relative rounded-3xl overflow-hidden group"
            >
              <img 
                src={property.main_image || "https://images.unsplash.com/photo-1600585154340-be6199f7e009?q=80&w=2070&auto=format&fit=crop"} 
                alt="Main" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <div className="hidden md:grid grid-rows-2 gap-4">
              <div className="relative rounded-3xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1600607687940-c52fb0729a5c?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative rounded-3xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="hidden md:block relative rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070&auto=format&fit=crop" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="outline" className="text-white border-white">View All Photos</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Details */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-gold/10 text-gold border-none px-4 py-1">{property.status || "Exclusive Listing"}</Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                  </div>
                  <h1 className="editorial-heading text-4xl md:text-6xl text-luxury-black mb-4">{property.title}</h1>
                  <p className="text-3xl font-bold tracking-tight text-luxury-black">${property.price?.toLocaleString()}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full"><Share2 className="w-4 h-4" /></Button>
                  <Button variant="outline" size="icon" className="rounded-full"><Heart className="w-4 h-4" /></Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100 mb-10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Bedrooms</p>
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-gold" />
                    <span className="text-xl font-bold">{property.beds?.toString().padStart(2, '0')}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Bathrooms</p>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-gold" />
                    <span className="text-xl font-bold">{property.baths?.toString().padStart(2, '0')}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Area</p>
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5 text-gold" />
                    <span className="text-xl font-bold">{property.sqft?.toLocaleString()} <span className="text-sm font-medium text-gray-400">sqft</span></span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Type</p>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                    <span className="text-xl font-bold">{property.property_type}</span>
                  </div>
                </div>
              </div>

              {/* Description & Tabs */}
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="bg-transparent border-b border-gray-100 w-full justify-start rounded-none h-auto p-0 mb-8">
                  <TabsTrigger value="description" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none px-8 py-4 font-bold uppercase tracking-widest text-xs">Description</TabsTrigger>
                  <TabsTrigger value="features" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none px-8 py-4 font-bold uppercase tracking-widest text-xs">Features</TabsTrigger>
                  <TabsTrigger value="neighborhood" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none px-8 py-4 font-bold uppercase tracking-widest text-xs">Neighborhood</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="text-gray-600 leading-relaxed text-lg whitespace-pre-wrap">
                  {property.description}
                </TabsContent>
                <TabsContent value="features">
                  <ul className="grid grid-cols-2 gap-4">
                    {["Smart Home Integration", "Private Infinity Pool", "Chef's Kitchen", "Wine Cellar", "Private Elevator", "24/7 Concierge"].map(f => (
                      <li key={f} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column: Contact Sidebar */}
            <div className="w-full lg:w-[400px]">
              <div className="sticky top-32 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gray-200" />
                  <div>
                    <h4 className="font-bold text-xl">Elena Sterling</h4>
                    <p className="text-sm text-gold font-medium">Senior Luxury Advisor</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <Button className="w-full h-14 bg-luxury-black hover:bg-gold rounded-xl gap-2">
                    <Calendar className="w-4 h-4" />
                    Schedule a Visit
                  </Button>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-14 rounded-xl gap-2">
                      <Phone className="w-4 h-4" />
                      Call
                    </Button>
                    <Button variant="outline" className="h-14 rounded-xl gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h5 className="font-bold text-sm uppercase tracking-widest mb-4">Request Details</h5>
                  <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 focus:ring-1 focus:ring-gold outline-none text-sm" />
                    <input type="email" placeholder="Email Address" className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 focus:ring-1 focus:ring-gold outline-none text-sm" />
                    <textarea placeholder="Your message..." rows={4} className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:ring-1 focus:ring-gold outline-none text-sm resize-none" />
                    <Button className="w-full h-12 bg-gold hover:bg-luxury-black transition-colors rounded-xl font-bold">
                      Send Inquiry
                    </Button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetailPage;
