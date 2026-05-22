'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { mockBookings, mockApartments } from '@/data/mock-data';
import GuestBottomNav from '@/components/layout/GuestBottomNav';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

export default function MyBookingsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');

  const filteredBookings = mockBookings.filter(b => {
    if (activeTab === 'upcoming') return b.status === 'upcoming';
    if (activeTab === 'completed') return b.status === 'completed';
    return b.status === 'cancelled';
  });

  return (
    <div className="bg-background text-on-surface min-h-screen pb-32">
      {/* Top AppBar */}
      <header className="flex justify-between items-center px-margin-mobile h-16 w-full sticky top-0 z-50 bg-white shadow-xs">
        <div className="flex items-center gap-3">
          <img 
            alt="TA HomeX Logo" 
            className="h-9 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4vQvEeWhiWd3ysQThYAeeaKyThfmlEjTcS3vD-xv574_T4_7vi_Ai4w_nYQm1xwTsqkSE7Nbd_hZi4O8MzMGAzD2eex07irjI5Ay7_WiyLUW-irNOAS-Z0jDE6rT9sEno71TgmcwSmnwgimbI29VIO0bnRiYVtXZEnycF2hZhscQ8Rt2-VK8Xaaq2wnoNpFzxCB8riiyfmzOvAtdBYZZov7OUOv9ht-nk7VW8eQ89TW1TMSRlegRwNeV3yneYjmgyHGyWvW7IIE" 
          />
          <h1 className="text-lg font-bold text-deep-navy">My Bookings</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="material-symbols-outlined text-deep-navy p-1.5 rounded-full hover:bg-surface-container-low transition-colors">
            notifications
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/30 flex-shrink-0">
            <img 
              alt="Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv9w9xjm16-ssw_5iH5LStPv26pl-eKi8p9Bj9nNsvfu6eyss1KkrKda9iV_FYg1-ZVfLeNnJzh5Y0FkyAmHDZXdDYanjHC5hkSziGOLOm6p6AqrSgw4yCPJzrWYri5KGYQiJZdMI-cZfcp7R391xB2z11FjWindahUEdz6JhqA8UOccdEEG0H8IwMYroYxpYzZUn9yHv-_-lnPV81HqHwiO2BubrLYdXkQ7IP34IRxF8tfZwQlblozNSqIEn0OhMnJLWZkZ6R4Dw" 
            />
          </div>
        </div>
      </header>

      <main className="px-margin-mobile pt-6 space-y-6">
        {/* Tabs */}
        <div className="flex bg-surface-container p-1 rounded-2xl border border-outline-variant/20 shadow-xs">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 ${
              activeTab === 'upcoming' 
                ? 'bg-white text-deep-navy shadow-sm' 
                : 'text-on-surface-variant/80 hover:text-deep-navy'
            }`}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 ${
              activeTab === 'completed' 
                ? 'bg-white text-deep-navy shadow-sm' 
                : 'text-on-surface-variant/80 hover:text-deep-navy'
            }`}
          >
            Completed
          </button>
          <button 
            onClick={() => setActiveTab('cancelled')}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 ${
              activeTab === 'cancelled' 
                ? 'bg-white text-deep-navy shadow-sm' 
                : 'text-on-surface-variant/80 hover:text-deep-navy'
            }`}
          >
            Cancelled
          </button>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.map(booking => {
            const apartment = mockApartments.find(a => a.id === booking.apartmentId);
            if (!apartment) return null;

            const isUpcoming = booking.status === 'upcoming';
            const isCompleted = booking.status === 'completed';

            return (
              <div 
                key={booking.id} 
                className="bg-white rounded-3xl overflow-hidden border border-outline-variant/30 shadow-sm hover:border-antique-gold/40 transition-all duration-300 group"
              >
                {/* Image Section */}
                <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                  <img 
                    alt={apartment.name} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                    src={apartment.imageUrl} 
                  />
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 backdrop-blur-md rounded-full border text-[10px] font-bold uppercase tracking-wider ${
                    isUpcoming 
                      ? 'bg-success-green/10 border-success-green/20 text-success-green' 
                      : isCompleted 
                        ? 'bg-deep-navy/10 border-deep-navy/20 text-deep-navy' 
                        : 'bg-on-surface-variant/10 border-on-surface-variant/20 text-on-surface-variant'
                  }`}>
                    {isUpcoming ? 'Confirmed' : booking.status}
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-deep-navy leading-tight">{apartment.name}</h3>
                    <p className="text-xs text-on-surface-variant font-medium mt-1">{apartment.location}</p>
                  </div>

                  {/* Date & Guest details */}
                  <div className="flex items-center gap-3 py-3 border-y border-outline-variant/20 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-antique-gold text-base">calendar_today</span>
                      <span className="font-bold text-on-surface">{formatDate(booking.checkIn)} – {formatDate(booking.checkOut)}</span>
                    </div>
                    <div className="h-4 w-[1px] bg-outline-variant/30" />
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-antique-gold text-base">person</span>
                      <span className="font-bold text-on-surface">2 Guests</span>
                    </div>
                  </div>

                  {/* Booking Code and Price details */}
                  <div className="flex justify-between items-center pt-1">
                    <div>
                      <p className="text-[9px] text-on-surface-variant/70 font-bold uppercase tracking-wider">Booking Code</p>
                      <p className="text-xs font-bold text-deep-navy mt-0.5">#TAHX-{booking.id.toUpperCase()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-on-surface-variant/70 font-bold uppercase tracking-wider">Total Price</p>
                      <p className="text-base font-black text-deep-navy mt-0.5">{booking.totalPrice.toLocaleString('vi-VN')} VND</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Link 
                      href={`/apartments/${apartment.id}`}
                      className="flex-1 bg-antique-gold hover:bg-deep-navy hover:text-white text-deep-navy text-center py-3 rounded-xl text-xs font-bold shadow-xs active:scale-95 transition-all duration-200"
                    >
                      {isUpcoming ? 'View Details' : 'Leave a Review'}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredBookings.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-outline-variant/40 shadow-xs px-6">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4 border border-outline-variant/20">
                <span className="material-symbols-outlined text-outline-variant text-3xl">calendar_month</span>
              </div>
              <h3 className="text-base font-bold text-deep-navy mb-1">No {activeTab} bookings</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed max-w-xs mx-auto mb-6">
                You don't have any bookings in this section at the moment.
              </p>
              <Link
                href="/"
                className="inline-block bg-deep-navy hover:bg-antique-gold hover:text-deep-navy text-white px-6 py-3 rounded-xl text-xs font-bold transition-all duration-200"
              >
                Start Exploring
              </Link>
            </div>
          )}
        </div>

        {/* Featured Smart Mode Premium Card */}
        <section className="bg-deep-navy rounded-3xl overflow-hidden relative min-h-[200px] flex items-center border border-outline-variant/10 shadow-md">
          <div className="absolute inset-0 opacity-20">
            <img 
              alt="Luxury Services" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX7wZfodD6awXUHzCKbC0RP4MA_dVt9HiPD1Ya-ee6U1XwSoAABtKugXds8S_sdLFvbfw_-z4PrK_dcePf0v7WNWSk0AKXcgS4OCKJvbxzXx65bFr_axwS-hf3TNuomtBtyhNiPuZI7B8xvz0b7gjvunxzX3djCLXC0YPGNrnkDxxWyIlb9PZq80TvKIqFtTTJhA4JNEnnXJ2blQWVFU5_ZDfvmc3BvXPNFAIaCOl4KCcK1CAqkKsKlqBr2ARO0SBvwDRFnkr1VRY" 
            />
          </div>
          <div className="relative z-10 p-6 space-y-3">
            <span className="text-antique-gold text-[9px] font-bold uppercase tracking-[0.2em] block">Exclusive Membership</span>
            <h2 className="text-white text-lg font-black leading-tight">Elevate Your Living Experience</h2>
            <p className="text-white/70 text-xs leading-relaxed">Unlock smart home features, priority booking, and curated services by joining our elite tier.</p>
            <button className="bg-antique-gold hover:bg-white text-deep-navy font-bold text-xs px-5 py-2.5 rounded-xl transition-all active:scale-95 shadow-sm">
              Upgrade to Smart Mode
            </button>
          </div>
        </section>
      </main>

      {/* Shared Bottom Navigation Bar */}
      <GuestBottomNav />
    </div>
  );
}
