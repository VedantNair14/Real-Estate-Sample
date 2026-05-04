"use client";

import React, { useState, useEffect } from "react";
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  status: string;
  main_image: string;
}

const AdminPage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newProperty, setNewProperty] = useState({
    title: "",
    location: "",
    price: 0,
    beds: 0,
    baths: 0,
    sqft: 0,
    property_type: "Villa",
    main_image: "",
    description: "",
  });

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8001/api/properties");
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8001/api/properties/${id}`);
      setProperties(properties.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const handleAddProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8001/api/properties", newProperty);
      setProperties([...properties, response.data]);
      setIsAddDialogOpen(false);
      setNewProperty({
        title: "",
        location: "",
        price: 0,
        beds: 0,
        baths: 0,
        sqft: 0,
        property_type: "Villa",
        main_image: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  const filteredProperties = properties.filter((p) => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mini Sidebar */}
      <aside className="w-20 bg-luxury-black flex flex-col items-center py-8 gap-8">
        <div className="w-10 h-10 bg-gold rounded-xl" />
        <div className="flex flex-col gap-6 mt-10">
            <div className="w-10 h-10 bg-white/10 rounded-xl hover:bg-gold/20 transition-colors cursor-pointer" />
            <div className="w-10 h-10 bg-white/10 rounded-xl hover:bg-gold/20 transition-colors cursor-pointer" />
            <div className="w-10 h-10 bg-white/10 rounded-xl hover:bg-gold/20 transition-colors cursor-pointer" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold text-luxury-black mb-2">Inventory Management</h1>
              <p className="text-gray-500">Manage your property listings and exclusive collection.</p>
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gold hover:bg-luxury-black h-12 rounded-xl px-6 gap-2">
                  <Plus className="w-4 h-4" />
                  Add New Property
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Add New Property</DialogTitle>
                  <DialogDescription>
                    Enter the details of the new luxury listing.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddProperty} className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Title</label>
                      <Input 
                        placeholder="Property Title" 
                        value={newProperty.title}
                        onChange={(e) => setNewProperty({...newProperty, title: e.target.value})}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Location</label>
                      <Input 
                        placeholder="City, State" 
                        value={newProperty.location}
                        onChange={(e) => setNewProperty({...newProperty, location: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Price ($)</label>
                      <Input 
                        type="number" 
                        value={newProperty.price}
                        onChange={(e) => setNewProperty({...newProperty, price: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Type</label>
                      <select 
                        className="flex h-11 w-full rounded-xl border border-input bg-gray-50 px-3 py-2 text-sm focus:outline-none"
                        value={newProperty.property_type}
                        onChange={(e) => setNewProperty({...newProperty, property_type: e.target.value})}
                      >
                        <option>Villa</option>
                        <option>Penthouse</option>
                        <option>Apartment</option>
                        <option>Mansion</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Beds</label>
                      <Input 
                        type="number" 
                        value={newProperty.beds}
                        onChange={(e) => setNewProperty({...newProperty, beds: parseInt(e.target.value)})}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Baths</label>
                      <Input 
                        type="number" 
                        value={newProperty.baths}
                        onChange={(e) => setNewProperty({...newProperty, baths: parseInt(e.target.value)})}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Sqft</label>
                      <Input 
                        type="number" 
                        value={newProperty.sqft}
                        onChange={(e) => setNewProperty({...newProperty, sqft: parseInt(e.target.value)})}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Image URL</label>
                    <Input 
                      placeholder="https://images.unsplash.com/..." 
                      value={newProperty.main_image}
                      onChange={(e) => setNewProperty({...newProperty, main_image: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Description</label>
                    <textarea 
                      className="flex min-h-[80px] w-full rounded-xl border border-input bg-gray-50 px-3 py-2 text-sm focus:outline-none"
                      placeholder="Describe the property..."
                      value={newProperty.description}
                      onChange={(e) => setNewProperty({...newProperty, description: e.target.value})}
                    />
                  </div>
                  <DialogFooter className="mt-4">
                    <Button type="submit" className="bg-gold hover:bg-luxury-black w-full h-12 rounded-xl">Create Listing</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Total Listings", value: properties.length.toString() },
              { label: "Active Deals", value: "12" },
              { label: "Total Revenue", value: "$42.5M" },
              { label: "Pending Inquiries", value: "38" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-luxury-black">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Table Area */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search listings..." 
                  className="pl-10 h-11 rounded-xl bg-gray-50 border-none" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="h-11 rounded-xl gap-2 border-gray-100">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>

            <div className="overflow-x-auto min-h-[300px]">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="w-10 h-10 text-gold animate-spin" />
                </div>
              ) : (
                <table className="w-full text-left">
                  <thead className="bg-gray-50/50">
                    <tr>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Property</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Location</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Price</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Status</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredProperties.length > 0 ? filteredProperties.map((property) => (
                      <tr key={property.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div 
                              className="w-12 h-12 rounded-lg bg-gray-100 bg-cover bg-center" 
                              style={{ backgroundImage: `url(${property.main_image})` }}
                            />
                            <div>
                              <p className="font-bold text-luxury-black">{property.title}</p>
                              <p className="text-xs text-gray-400">ID: ESTATE-2024-{property.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{property.location}</td>
                        <td className="px-6 py-4 text-sm font-bold text-luxury-black">
                          ${property.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-100 text-green-600 border-none hover:bg-green-100">
                            {property.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors outline-none">
                                <MoreHorizontal className="w-4 h-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                              <DropdownMenuItem className="gap-2"><Edit className="w-3 h-3" /> Edit</DropdownMenuItem>
                              <DropdownMenuItem 
                                className="gap-2 text-red-500"
                                onSelect={() => handleDelete(property.id)}
                              >
                                <Trash2 className="w-3 h-3" /> Delete
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2" asChild>
                                <Link href={`/property/${property.id}`} className="flex items-center gap-2">
                                  <ExternalLink className="w-3 h-3" /> View Site
                                </Link>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    )) : (
                        <tr>
                            <td colSpan={5} className="px-6 py-10 text-center text-gray-400">
                                No properties found.
                            </td>
                        </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
