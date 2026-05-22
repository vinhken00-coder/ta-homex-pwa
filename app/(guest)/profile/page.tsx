import React from 'react';
import Link from 'next/link';
import GuestBottomNav from '@/components/layout/GuestBottomNav';
import { mockUsers } from '@/data/mock-data';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCH4vQvEeWhiWd3ysQThYAeeaKyThfmlEjTcS3vD-xv574_T4_7vi_Ai4w_nYQm1xwTsqkSE7Nbd_hZi4O8MzMGAzD2eex07irjI5Ay7_WiyLUW-irNOAS-Z0jDE6rT9sEno71TgmcwSmnwgimbI29VIO0bnRiYVtXZEnycF2hZhscQ8Rt2-VK8Xaaq2wnoNpFzxCB8riiyfmzOvAtdBYZZov7OUOv9ht-nk7VW8eQ89TW1TMSRlegRwNeV3yneYjmgyHGyWvW7IIE';

interface MenuItem {
  icon: string;
  label: string;
  description: string;
  href: string;
  danger?: boolean;
}

const menuItems: MenuItem[] = [
  {
    icon: 'person',
    label: 'Personal Information',
    description: 'Update your details and contact info',
    href: '#',
  },
  {
    icon: 'payments',
    label: 'Payment Methods',
    description: 'Manage your saved cards and billing',
    href: '#',
  },
  {
    icon: 'star',
    label: 'My Reviews',
    description: 'View and manage your stay reviews',
    href: '#',
  },
  {
    icon: 'help_center',
    label: 'Support Center',
    description: 'FAQs, support chat, and user guides',
    href: '#',
  },
  {
    icon: 'settings',
    label: 'Settings',
    description: 'App preferences and notifications',
    href: '#',
  },
];

const demoRoles = [
  {
    icon: 'real_estate_agent',
    label: 'Owner Dashboard',
    description: 'Manage properties & revenue',
    href: '/owner/dashboard',
  },
  {
    icon: 'engineering',
    label: 'Staff Dashboard',
    description: 'View tasks & guest details',
    href: '/staff/dashboard',
  },
];

export default function ProfilePage() {
  const user = mockUsers['guest1'];

  return (
    <div className="bg-background text-on-surface min-h-screen pb-32">
      {/* Top AppBar */}
      <header className="bg-white sticky top-0 z-50 flex justify-between items-center px-margin-mobile h-16 w-full border-b border-outline-variant/20 shadow-xs">
        <div className="flex items-center gap-3">
          <img alt="TA HomeX Logo" className="h-8 w-auto object-contain" src={LOGO_URL} />
          <span className="text-base font-extrabold uppercase tracking-tight text-deep-navy">
            TA HomeX
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-1.5 rounded-full hover:bg-surface-container-low transition-colors active:scale-95">
            <span className="material-symbols-outlined text-deep-navy">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
          </button>
          <div className="w-9 h-9 rounded-full border-2 border-antique-gold p-0.5 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src={user.avatarUrl}
              alt="Profile"
            />
          </div>
        </div>
      </header>

      <main className="px-margin-mobile py-6 space-y-6">
        {/* Profile Hero Card */}
        <section className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm flex flex-col items-center gap-5 text-center">
          {/* Avatar + Gold Member Badge */}
          <div className="relative mt-2">
            <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md border-4 border-white ring-2 ring-antique-gold/30">
              <img
                className="w-full h-full object-cover"
                src={user.avatarUrl}
                alt={user.name}
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-antique-gold text-deep-navy px-3 py-0.5 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
              <span
                className="material-symbols-outlined text-xs"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                Gold Member
              </span>
            </div>
          </div>

          <div className="pt-3">
            <h1 className="text-xl font-extrabold text-deep-navy">{user.name}</h1>
            <p className="text-xs text-on-surface-variant font-medium flex items-center justify-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              {user.email}
            </p>
          </div>

          <button className="bg-antique-gold hover:bg-deep-navy hover:text-white text-deep-navy font-bold text-sm px-6 py-2.5 rounded-xl shadow-sm active:scale-95 transition-all duration-200 flex items-center gap-2">
            <span className="material-symbols-outlined text-base">edit</span>
            Edit Profile
          </button>
        </section>

        {/* Membership Stats */}
        <section className="bg-white rounded-3xl p-5 border border-outline-variant/30 shadow-sm">
          <h2 className="text-base font-bold text-deep-navy mb-4">Membership Stats</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-on-surface-variant font-medium">Stayed Nights</span>
              <span className="font-extrabold text-deep-navy">24</span>
            </div>
            <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
              <div className="bg-antique-gold h-full rounded-full" style={{ width: '75%' }} />
            </div>
            <p className="text-xs text-on-surface-variant">
              6 more nights to reach{' '}
              <span className="text-antique-gold font-bold">Platinum</span> status.
            </p>
          </div>
        </section>

        {/* Account Settings Menu */}
        <section className="bg-white rounded-3xl border border-outline-variant/30 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-outline-variant/20">
            <h2 className="text-base font-bold text-deep-navy">Account Settings</h2>
          </div>
          <nav className="divide-y divide-outline-variant/10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-5 py-4 hover:bg-surface-container-low transition-colors group active:bg-surface-container"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-deep-navy/5 flex items-center justify-center text-deep-navy group-hover:bg-antique-gold/10 group-hover:text-antique-gold transition-colors">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{item.label}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{item.description}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-antique-gold transition-colors">
                  chevron_right
                </span>
              </a>
            ))}

            {/* Logout */}
            <Link
              href="/login"
              className="flex items-center justify-between px-5 py-4 hover:bg-error-container/20 transition-colors group active:bg-error/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center text-error">
                  <span className="material-symbols-outlined text-xl">logout</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-error">Log Out</p>
                  <p className="text-xs text-error/60 mt-0.5">Sign out of your account</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-error/30 group-hover:text-error transition-colors">
                logout
              </span>
            </Link>
          </nav>
        </section>

        {/* Become an Owner Card */}
        <section className="relative bg-deep-navy text-white rounded-3xl overflow-hidden p-6 shadow-md">
          <div className="absolute top-0 right-0 w-32 h-32 bg-antique-gold/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <span className="bg-antique-gold/20 text-antique-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">
              Partner with us
            </span>
            <h3 className="text-lg font-extrabold mb-2">Become an Owner</h3>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              List your property and earn passive income with our smart management system.
            </p>
            <Link
              href="/owner/dashboard"
              className="inline-flex items-center gap-2 text-antique-gold font-bold text-sm hover:gap-3 transition-all"
            >
              Learn more
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
          <div className="absolute bottom-4 right-6 opacity-20">
            <span
              className="material-symbols-outlined text-8xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              real_estate_agent
            </span>
          </div>
        </section>

        {/* Demo Role Switcher */}
        <section className="bg-white rounded-3xl border border-outline-variant/30 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-outline-variant/20">
            <h2 className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
              Demo Roles
            </h2>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {demoRoles.map((role) => (
              <Link
                key={role.label}
                href={role.href}
                className="flex items-center justify-between px-5 py-4 hover:bg-surface-container-low transition-colors group active:bg-surface-container"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-deep-navy/5 flex items-center justify-center text-deep-navy">
                    <span className="material-symbols-outlined text-xl">{role.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{role.label}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{role.description}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-deep-navy transition-colors">
                  chevron_right
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* App Info */}
        <div className="text-center pb-2">
          <p className="text-[10px] text-outline-variant font-medium">TA HomeX v2.4.1 (Stable)</p>
          <p className="text-[10px] text-outline-variant font-medium">© 2024 Luxury Smart Hospitality</p>
        </div>
      </main>

      <GuestBottomNav />
    </div>
  );
}
