'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function OwnerBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/owner/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { href: '/owner/properties', icon: 'apartment', label: 'Properties' },
    { href: '/owner/calendar', icon: 'calendar_month', label: 'Calendar' },
    { href: '/owner/revenue', icon: 'payments', label: 'Revenue' },
    { href: '/profile', icon: 'person', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 flex justify-around items-center px-4 pb-safe h-20 bg-white/95 backdrop-blur-md rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-outline-variant/30">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center transition-all duration-200 ease-out ${
              isActive
                ? "text-deep-navy dark:text-antique-gold relative after:content-[''] after:w-1 after:h-1 after:bg-antique-gold after:rounded-full after:mt-1 scale-90"
                : "text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim"
            }`}
          >
            <div className="relative">
              <span 
                className="material-symbols-outlined" 
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
            </div>
            <span className="font-label-sm text-[10px] mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
