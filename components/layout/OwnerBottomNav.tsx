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
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 flex justify-around items-center px-4 h-20 bg-white/95 backdrop-blur-md rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.08)] border-t border-outline-variant/30">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-2xl transition-all duration-200 ease-out ${
              isActive
                ? 'text-deep-navy'
                : 'text-on-surface-variant hover:text-deep-navy'
            }`}
          >
            <div className="relative">
              {isActive && (
                <div className="absolute -inset-2 bg-antique-gold/15 rounded-xl -z-10" />
              )}
              <span
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
            </div>
            <span className={`text-[10px] font-semibold leading-tight ${isActive ? 'text-deep-navy' : 'text-on-surface-variant'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
