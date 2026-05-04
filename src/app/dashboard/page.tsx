"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import { useEstateStore } from "@/store/useEstateStore";
import PropertyCard from "@/components/shared/PropertyCard";
import { motion } from "framer-motion";
import { Heart, Calendar, MessageSquare, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardPage = () => {
  const { favorites } = useEstateStore();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar */}
            <aside className="w-full lg:w-80">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xl">
                    JS
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Julian Sterling</h3>
                    <p className="text-sm text-gray-400">Premium Member</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  {[
                    { icon: Heart, label: "Saved Properties", active: true },
                    { icon: Calendar, label: "Scheduled Visits", active: false },
                    { icon: MessageSquare, label: "Inquiries", active: false },
                    { icon: User, label: "Profile", active: false },
                    { icon: Settings, label: "Settings", active: false },
                  ].map((item) => (
                    <button
                      key={item.label}
                      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                        item.active 
                          ? "bg-luxury-black text-white shadow-lg" 
                          : "text-gray-500 hover:bg-gray-50 hover:text-luxury-black"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  ))}
                  <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all mt-8">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              <div className="mb-10">
                <h1 className="editorial-heading text-4xl md:text-5xl text-luxury-black mb-2">My <span className="italic">Collection</span></h1>
                <p className="text-gray-500">You have {favorites.length} properties saved in your collection.</p>
              </div>

              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {favorites.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-16 text-center border border-dashed border-gray-200">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Your collection is empty</h3>
                  <p className="text-gray-400 mb-8 max-w-sm mx-auto">Start exploring our exclusive properties and save your favorites here.</p>
                  <Button className="bg-luxury-black hover:bg-gold rounded-full px-8 h-14">Explore Properties</Button>
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
