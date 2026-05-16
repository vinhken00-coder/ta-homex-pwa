import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full mx-auto overflow-hidden shadow-2xl flex flex-col justify-between bg-surface text-on-surface">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Luxury penthouse apartment" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8NucF4LAX_dONzKtVWJuwpQimxA1LjTbovgIgGl_KVicWsn8j5z8i_cvl4hpHrefnM5uxBqTbniPVG8prX84J3Lj_xgRC_FA-f0l1kw3-hpTqXEiVIKWETiso2jLBaC9uR7FtEVQ5G8u72BUsygM9t_91BhqZa4vW6pL5yGHIy5FTY6TJcYGPBKsvoNcUbM4eyTsH3LOI01dyJAVAWob7syrkcW6-1xyLm1y20c1F-Iez3-TeqY6wibZn_ISNkUTeOqQlIWjidww" 
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col flex-1 px-margin-mobile pt-16 pb-12">
        {/* Logo & Branding Section */}
        <header className="flex flex-col items-center text-center mb-stack-lg">
          <div className="mb-6 flex justify-center items-center w-full">
            {/* Using text logo if image is missing from external URL, but we have text below */}
            <div className="w-48 h-auto drop-shadow-xl text-antique-gold flex items-center justify-center">
               <span className="material-symbols-outlined text-6xl">apartment</span>
            </div>
          </div>
          <h1 className="font-display-lg text-headline-sm tracking-tight text-white mb-2">
            TA <span className="text-antique-gold">HOMEX</span>
          </h1>
          <p className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-outline-variant">
            Smart Living • Smart Hospitality
          </p>
        </header>

        {/* Welcome Text */}
        <section className="mt-auto mb-10">
          <h2 className="font-headline-lg text-headline-lg text-white mb-2">Welcome back</h2>
          <p className="font-body-md text-body-md text-outline-variant">Sign in to continue your premium residential experience.</p>
        </section>

        {/* Form Section */}
        <section className="space-y-stack-md">
          {/* Input Group: Identifier */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline-variant text-[20px]">person</span>
            </div>
            <input 
              className="w-full h-14 pl-12 pr-4 glass-input rounded-xl text-white placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-antique-gold/50 transition-all font-body-md text-body-md" 
              placeholder="Phone number / Email" 
              type="text" 
            />
          </div>
          
          {/* Input Group: Password */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline-variant text-[20px]">lock</span>
            </div>
            <input 
              className="w-full h-14 pl-12 pr-12 glass-input rounded-xl text-white placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-antique-gold/50 transition-all font-body-md text-body-md" 
              placeholder="Password" 
              type="password" 
            />
            <button className="absolute inset-y-0 right-4 flex items-center text-outline-variant">
              <span className="material-symbols-outlined text-[20px]">visibility</span>
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a className="font-label-lg text-label-lg text-antique-gold hover:text-secondary-fixed transition-colors" href="#">Forgot password?</a>
          </div>

          {/* Primary Action */}
          <Link href="/" className="w-full h-14 bg-antique-gold text-deep-navy font-headline-sm text-headline-sm rounded-xl shadow-lg hover:bg-secondary-fixed active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            Sign In
          </Link>
        </section>

        {/* Features Checklist */}
        <section className="mt-8 grid grid-cols-1 gap-2">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-antique-gold text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-label-sm text-label-sm text-outline-variant">Luxury experience</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-antique-gold text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-label-sm text-label-sm text-outline-variant">Simple & easy to use</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-antique-gold text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-label-sm text-label-sm text-outline-variant">Smart living</span>
          </div>
        </section>

        {/* Footer Action */}
        <footer className="mt-12 text-center">
          <p className="font-body-sm text-body-sm text-outline-variant">
            Don't have an account? 
            <a className="text-antique-gold font-label-lg text-label-lg ml-1 hover:underline" href="#">Sign up</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
