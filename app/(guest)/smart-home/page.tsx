'use client';
import React, { useState } from 'react';
import TopAppBar from '@/components/layout/TopAppBar';
import GuestBottomNav from '@/components/layout/GuestBottomNav';

export default function SmartHomePage() {
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(true);
  const [doorLocked, setDoorLocked] = useState(true);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [temperature, setTemperature] = useState(24);

  return (
    <div className="bg-primary text-white min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-antique-gold/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        {/* We use a custom header here to ensure it stays dark mode for this page */}
        <header className="flex justify-between items-center px-margin-mobile h-20 w-full sticky top-0 z-50">
          <button onClick={() => window.history.back()} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="font-headline-sm text-white">Smart Home</h2>
          <div className="w-10"></div>
        </header>

        <main className="px-margin-mobile pt-4 pb-32">
          <div className="mb-8">
            <p className="font-label-sm text-antique-gold uppercase tracking-widest mb-1">Current Stay</p>
            <h2 className="font-headline-md text-white">TA HomeX Rivergate</h2>
          </div>

          {/* Master Control */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 flex justify-between items-center mb-8 border border-white/10 shadow-lg">
            <div>
              <p className="font-label-sm text-outline-variant uppercase tracking-wider mb-1">Master Switch</p>
              <p className="font-headline-md text-white">All Devices</p>
            </div>
            <button 
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${lightsOn ? 'bg-antique-gold text-deep-navy shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-surface-container/20 text-white'}`}
              onClick={() => {
                const newState = !lightsOn;
                setLightsOn(newState);
                setAcOn(newState);
              }}
            >
              <span className="material-symbols-outlined text-[32px]">power_settings_new</span>
            </button>
          </div>

          {/* Device Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Smart Door Lock */}
            <div className={`rounded-3xl p-5 flex flex-col justify-between h-36 border transition-all cursor-pointer backdrop-blur-md ${doorLocked ? 'bg-white/5 border-white/10' : 'bg-antique-gold/20 border-antique-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]'}`} onClick={() => setDoorLocked(!doorLocked)}>
               <div className="flex justify-between items-start">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center ${doorLocked ? 'bg-white/10 text-white' : 'bg-antique-gold text-deep-navy'}`}>
                   <span className="material-symbols-outlined">{doorLocked ? 'lock' : 'lock_open_right'}</span>
                 </div>
                 <div className={`w-10 h-5 rounded-full p-0.5 flex transition-colors ${doorLocked ? 'bg-white/20' : 'bg-success-green'}`}>
                   <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${doorLocked ? '' : 'translate-x-5'}`}></div>
                 </div>
               </div>
               <div>
                 <p className="font-label-lg text-white">Door Lock</p>
                 <p className={`font-label-sm ${doorLocked ? 'text-outline-variant' : 'text-antique-gold'}`}>{doorLocked ? 'Locked' : 'Unlocked'}</p>
               </div>
            </div>

            {/* AC Control */}
            <div className={`rounded-3xl p-5 flex flex-col justify-between h-36 border transition-all cursor-pointer backdrop-blur-md ${!acOn ? 'bg-white/5 border-white/10' : 'bg-antique-gold/20 border-antique-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]'}`} onClick={() => setAcOn(!acOn)}>
               <div className="flex justify-between items-start">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center ${!acOn ? 'bg-white/10 text-white' : 'bg-antique-gold text-deep-navy'}`}>
                   <span className="material-symbols-outlined">ac_unit</span>
                 </div>
                 <div className={`w-10 h-5 rounded-full p-0.5 flex transition-colors ${!acOn ? 'bg-white/20' : 'bg-antique-gold'}`}>
                   <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${!acOn ? '' : 'translate-x-5'}`}></div>
                 </div>
               </div>
               <div className="flex justify-between items-end">
                 <div>
                   <p className="font-label-lg text-white">Air Con</p>
                   <p className={`font-label-sm ${acOn ? 'text-antique-gold' : 'text-outline-variant'}`}>{acOn ? 'Cooling' : 'Off'}</p>
                 </div>
                 {acOn && <span className="font-headline-sm text-antique-gold">{temperature}°C</span>}
               </div>
            </div>

            {/* Lights */}
            <div className={`rounded-3xl p-5 flex flex-col justify-between h-36 border transition-all cursor-pointer backdrop-blur-md ${!lightsOn ? 'bg-white/5 border-white/10' : 'bg-antique-gold/20 border-antique-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]'}`} onClick={() => setLightsOn(!lightsOn)}>
               <div className="flex justify-between items-start">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center ${!lightsOn ? 'bg-white/10 text-white' : 'bg-antique-gold text-deep-navy'}`}>
                   <span className="material-symbols-outlined">lightbulb</span>
                 </div>
                 <div className={`w-10 h-5 rounded-full p-0.5 flex transition-colors ${!lightsOn ? 'bg-white/20' : 'bg-antique-gold'}`}>
                   <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${!lightsOn ? '' : 'translate-x-5'}`}></div>
                 </div>
               </div>
               <div>
                 <p className="font-label-lg text-white">Main Lights</p>
                 <p className={`font-label-sm ${lightsOn ? 'text-antique-gold' : 'text-outline-variant'}`}>{lightsOn ? '100% Bright' : 'Off'}</p>
               </div>
            </div>

            {/* Curtains */}
            <div className={`rounded-3xl p-5 flex flex-col justify-between h-36 border transition-all cursor-pointer backdrop-blur-md ${!curtainsOpen ? 'bg-white/5 border-white/10' : 'bg-antique-gold/20 border-antique-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]'}`} onClick={() => setCurtainsOpen(!curtainsOpen)}>
               <div className="flex justify-between items-start">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center ${!curtainsOpen ? 'bg-white/10 text-white' : 'bg-antique-gold text-deep-navy'}`}>
                   <span className="material-symbols-outlined">blinds</span>
                 </div>
                 <div className={`w-10 h-5 rounded-full p-0.5 flex transition-colors ${!curtainsOpen ? 'bg-white/20' : 'bg-antique-gold'}`}>
                   <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${!curtainsOpen ? '' : 'translate-x-5'}`}></div>
                 </div>
               </div>
               <div>
                 <p className="font-label-lg text-white">Curtains</p>
                 <p className={`font-label-sm ${curtainsOpen ? 'text-antique-gold' : 'text-outline-variant'}`}>{curtainsOpen ? 'Open' : 'Closed'}</p>
               </div>
            </div>
          </div>

          {/* AC Temperature Control slider */}
          {acOn && (
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-lg mt-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex justify-between mb-4">
                 <p className="font-label-lg text-white">Temperature Control</p>
                 <p className="font-headline-sm text-antique-gold">{temperature}°C</p>
              </div>
              <input 
                type="range" 
                min="16" max="30" 
                value={temperature} 
                onChange={(e) => setTemperature(parseInt(e.target.value))}
                className="w-full accent-antique-gold h-2 bg-white/20 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between mt-2 font-label-sm text-outline-variant">
                <span>16°C</span>
                <span>30°C</span>
              </div>
            </div>
          )}
        </main>
      </div>

      <GuestBottomNav />
    </div>
  );
}
