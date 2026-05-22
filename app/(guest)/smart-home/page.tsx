'use client';
import React, { useState } from 'react';
import GuestBottomNav from '@/components/layout/GuestBottomNav';

interface Device {
  id: string;
  icon: string;
  label: string;
  status: string;
  active: boolean;
}

const initialDevices: Device[] = [
  { id: 'lock',    icon: 'lock',         label: 'Smart Lock',   status: 'Locked',   active: true  },
  { id: 'ac',      icon: 'ac_unit',      label: 'AC',           status: '24°C',     active: true  },
  { id: 'light',   icon: 'lightbulb',    label: 'Lighting',     status: 'On · 70%', active: true  },
  { id: 'tv',      icon: 'tv',           label: 'TV',           status: 'On',       active: true  },
  { id: 'curtain', icon: 'curtains',     label: 'Curtains',     status: 'Open',     active: true  },
  { id: 'heater',  icon: 'water_heater', label: 'Water Heater', status: 'On',       active: true  },
];

export default function SmartHomePage() {
  const [devices, setDevices] = useState<Device[]>(initialDevices);
  const [acTemp, setAcTemp] = useState(24);

  const toggleDevice = (id: string) => {
    setDevices((prev) =>
      prev.map((d) => {
        if (d.id !== id) return d;
        const nowActive = !d.active;
        let status = d.status;
        if (id === 'lock')    status = nowActive ? 'Locked'   : 'Unlocked';
        if (id === 'ac')      status = nowActive ? `${acTemp}°C` : 'Off';
        if (id === 'light')   status = nowActive ? 'On · 70%' : 'Off';
        if (id === 'tv')      status = nowActive ? 'On'        : 'Off';
        if (id === 'curtain') status = nowActive ? 'Open'      : 'Closed';
        if (id === 'heater')  status = nowActive ? 'On'        : 'Off';
        return { ...d, active: nowActive, status };
      })
    );
  };

  const activeCount = devices.filter((d) => d.active).length;

  return (
    <div className="min-h-screen text-white pb-28" style={{ backgroundColor: '#0A111F' }}>
      {/* Subtle ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-15%] w-96 h-96 rounded-full opacity-20 blur-[100px]" style={{ backgroundColor: '#C5A059' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 rounded-full opacity-10 blur-[80px]" style={{ backgroundColor: '#002349' }} />
      </div>

      {/* Top Header */}
      <header
        className="flex justify-between items-center px-margin-mobile h-16 w-full sticky top-0 z-50 border-b border-white/5"
        style={{ backgroundColor: 'rgba(10,17,31,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <div className="flex flex-col">
          <span className="text-lg font-extrabold text-antique-gold leading-tight tracking-tight">
            Smart Home
          </span>
          <span className="text-[10px] text-white/40 font-semibold tracking-wide">
            TA HomeX Landmark
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Online badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(39,174,96,0.12)' }}>
            <div className="w-2 h-2 rounded-full bg-success-green animate-pulse" />
            <span className="text-[11px] font-bold text-success-green">Online</span>
          </div>
          <button className="material-symbols-outlined text-white/40 hover:text-white transition-colors text-xl">
            notifications
          </button>
        </div>
      </header>

      <main className="relative z-10 px-margin-mobile pt-6 space-y-6">
        {/* Control Center Heading */}
        <section>
          <h2 className="text-xl font-extrabold text-antique-gold">Control Center</h2>
          <p className="text-xs text-white/40 font-medium mt-1">
            Manage your intelligent living space in real-time.
          </p>
        </section>

        {/* Active Devices Summary Bar */}
        <div
          className="rounded-2xl px-5 py-4 flex items-center justify-between border border-white/10"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
        >
          <div>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-0.5">Active Devices</p>
            <p className="text-2xl font-black text-white">
              {activeCount} <span className="text-sm font-normal text-white/40">/ {devices.length}</span>
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(197,160,89,0.15)', border: '1px solid rgba(197,160,89,0.3)' }}>
            <span className="material-symbols-outlined text-antique-gold text-2xl">settings_remote</span>
          </div>
        </div>

        {/* Device Control Grid */}
        <div className="grid grid-cols-2 gap-4">
          {devices.map((device) => (
            <button
              key={device.id}
              onClick={() => toggleDevice(device.id)}
              className="rounded-2xl p-5 flex flex-col items-center justify-between aspect-square text-center transition-all duration-200 active:scale-95 cursor-pointer"
              style={
                device.active
                  ? {
                      backgroundColor: 'rgba(197,160,89,0.15)',
                      border: '1px solid rgba(197,160,89,0.45)',
                      boxShadow: '0 0 18px rgba(197,160,89,0.18)',
                    }
                  : {
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {/* Icon + Toggle row */}
              <div className="w-full flex justify-between items-start">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{
                    color: device.active ? '#C5A059' : 'rgba(255,255,255,0.3)',
                    fontVariationSettings: device.active ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {device.icon}
                </span>

                {/* Mini toggle pill */}
                <div
                  className="w-9 h-5 rounded-full flex items-center px-0.5 transition-colors"
                  style={{
                    backgroundColor: device.active ? 'rgba(197,160,89,0.35)' : 'rgba(255,255,255,0.12)',
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: device.active ? '#C5A059' : 'rgba(255,255,255,0.35)',
                      transform: device.active ? 'translateX(16px)' : 'translateX(0)',
                    }}
                  />
                </div>
              </div>

              {/* Label + status */}
              <div className="mt-4 text-center">
                <p className="text-xs font-extrabold text-white leading-tight">{device.label}</p>
                <p
                  className="text-[11px] font-semibold mt-0.5"
                  style={{
                    color: device.active ? '#C5A059' : 'rgba(255,255,255,0.3)',
                    textShadow: device.active ? '0 0 8px rgba(197,160,89,0.5)' : 'none',
                  }}
                >
                  {device.status}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* AC Temperature Slider — shown only when AC is active */}
        {devices.find((d) => d.id === 'ac')?.active && (
          <div
            className="rounded-2xl p-5 border border-white/10"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
          >
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm font-bold text-white">Temperature Control</p>
              <p className="text-lg font-extrabold text-antique-gold">{acTemp}°C</p>
            </div>
            <input
              type="range"
              min="16"
              max="30"
              value={acTemp}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setAcTemp(val);
                setDevices((prev) =>
                  prev.map((d) =>
                    d.id === 'ac' ? { ...d, status: `${val}°C` } : d
                  )
                );
              }}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-antique-gold"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            />
            <div className="flex justify-between mt-2">
              <span className="text-[10px] text-white/30 font-bold">16°C</span>
              <span className="text-[10px] text-white/30 font-bold">30°C</span>
            </div>
          </div>
        )}

        {/* Energy & Environment Widget */}
        <section
          className="rounded-2xl p-5 border border-white/10 overflow-hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
        >
          <div className="flex justify-between items-start mb-5">
            <div>
              <h3 className="text-base font-extrabold text-white">Energy Efficiency</h3>
              <p className="text-[11px] text-white/40 font-medium mt-0.5">Real-time consumption status</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-antique-gold leading-none">Good</p>
              <p className="text-[10px] text-success-green font-bold mt-0.5">Optimum Level</p>
            </div>
          </div>

          {/* Bar chart */}
          <div className="flex items-end justify-between h-20 gap-1.5 mb-4">
            {[40, 60, 85, 70, 55, 90, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-lg relative"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 6 ? '#C5A059' : `rgba(197,160,89,${0.1 + i * 0.1})`,
                }}
              >
                {i === 6 && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-extrabold text-antique-gold">
                    NOW
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Environment row */}
          <div
            className="flex justify-between items-center pt-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-antique-gold text-xl">
                thermometer
              </span>
              <span className="text-sm font-bold text-white">Environment</span>
            </div>
            <span className="text-sm font-extrabold text-antique-gold">26°C · Good</span>
          </div>
        </section>

        {/* Lifestyle Banner */}
        <section className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-2">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn0Oh3i8TY5DtWldpqBWeZTxIhrA0Df8QnjBA60606CZCfzdIiSueNnpM_z_f-JruteN88hAb59kYDm7bBYbKzgbwDfDmBIaFpvlddeFrfYtWgoDrWeI1e3n5rIBDlfb6vzGIrSjD181T1nLVdf83cr6gBH7BAuy44pD0M4CZpY3hqXktLGgG3jQRcgvm0Om6A99O5EXpwo3vP7UfwyeepHYUw6P1c00pck19J4VcA0WRkoxKJ4-DPiT68LD7kFE7tKdrDg31XO-Q"
            alt="Smart Living"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <span className="text-[9px] font-extrabold text-antique-gold uppercase tracking-widest bg-black/40 px-2 py-1 rounded backdrop-blur-md">
              Smart Living
            </span>
            <h4 className="text-sm font-extrabold text-white mt-1">Elevate your comfort level</h4>
          </div>
        </section>
      </main>

      {/* Bottom Navigation — dark variant */}
      <nav
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 flex justify-around items-center px-4 h-20 border-t"
        style={{
          backgroundColor: 'rgba(10,17,31,0.92)',
          backdropFilter: 'blur(12px)',
          borderColor: 'rgba(255,255,255,0.08)',
        }}
      >
        {[
          { href: '/',          icon: 'home',          label: 'Home'     },
          { href: '/search',    icon: 'search',        label: 'Search'   },
          { href: '/bookings',  icon: 'calendar_month', label: 'Bookings' },
          { href: '/inbox',     icon: 'chat_bubble',   label: 'Inbox'    },
          { href: '/profile',   icon: 'person',        label: 'Profile'  },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center gap-0.5 px-2 transition-colors"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
            <span className="text-[10px] font-semibold">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
