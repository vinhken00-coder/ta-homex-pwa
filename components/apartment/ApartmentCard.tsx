'use client';
import React from 'react';
import Link from 'next/link';
import { Apartment } from '@/types';

interface ApartmentCardProps {
  apartment: Apartment;
}

export default function ApartmentCard({ apartment }: ApartmentCardProps) {
  return (
    <Link href={`/apartments/${apartment.id}`} className="block w-full">
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-outline-variant/30 flex-shrink-0 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] active:scale-[0.98]">
        <div className="relative h-48 sm:h-56 p-2">
          <img 
            className="w-full h-full object-cover rounded-2xl" 
            src={apartment.imageUrl} 
            alt={apartment.name} 
          />
          <button 
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white z-10 transition-transform active:scale-90"
            onClick={(e) => {
              e.preventDefault(); 
            }}
          >
            <span 
              className="material-symbols-outlined text-[20px]" 
              style={{ fontVariationSettings: apartment.isFavorite ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-deep-navy shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-antique-gold" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-sm font-bold">{apartment.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="p-4 pt-2">
          <div className="flex justify-between items-start mb-1">
            <h4 className="font-headline-sm text-deep-navy truncate pr-2">{apartment.name}</h4>
          </div>
          <p className="font-body-sm text-on-surface-variant flex items-center gap-1 mb-3">
            <span className="material-symbols-outlined text-[14px] text-antique-gold">location_on</span>
            {apartment.location}
          </p>
          
          <div className="flex justify-between items-center pt-3 border-t border-outline-variant/30">
             <p className="font-headline-sm text-deep-navy">
                <span className="text-antique-gold font-bold">{(apartment.pricePerNight).toLocaleString('vi-VN')}đ</span>
                <span className="text-sm font-normal text-on-surface-variant"> / night</span>
             </p>
             <span className="font-label-sm bg-surface-container text-deep-navy px-2 py-1 rounded-md">
               {apartment.type}
             </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
