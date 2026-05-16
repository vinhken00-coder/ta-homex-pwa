import React from 'react';
import Link from 'next/link';
import { mockBookings, mockApartments } from '@/data/mock-data';
import TopAppBar from '@/components/layout/TopAppBar';
import GuestBottomNav from '@/components/layout/GuestBottomNav';

export default function MyBookingsPage() {
  const upcomingBookings = mockBookings.filter(b => b.status === 'upcoming');
  const pastBookings = mockBookings.filter(b => b.status === 'completed');

  const BookingCard = ({ booking }: { booking: any }) => {
    const apartment = mockApartments.find(a => a.id === booking.apartmentId);
    if (!apartment) return null;

    return (
      <Link href={`/booking/${booking.id}`} className="block mb-4">
        <div className="bg-white rounded-3xl p-4 border border-outline-variant/30 shadow-sm flex gap-4 transition-transform hover:shadow-md active:scale-[0.98]">
          <img src={apartment.imageUrl} alt={apartment.name} className="w-24 h-24 rounded-2xl object-cover flex-shrink-0" />
          <div className="flex flex-col flex-1 justify-between py-1">
            <div>
              <h4 className="font-headline-sm text-deep-navy line-clamp-1">{apartment.name}</h4>
              <p className="font-body-sm text-on-surface-variant mt-1">
                {booking.checkIn} - {booking.checkOut}
              </p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className={`font-label-sm px-3 py-1 rounded-lg ${booking.status === 'upcoming' ? 'bg-antique-gold/10 text-antique-gold' : 'bg-surface-container text-on-surface-variant'}`}>
                {booking.status.toUpperCase()}
              </span>
              <span className="font-label-lg text-deep-navy">{(booking.totalPrice).toLocaleString('vi-VN')}đ</span>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar title="My Bookings" showNotifications />

      <main className="px-margin-mobile pt-6 pb-28">
        {/* Tabs */}
        <div className="flex bg-surface-container rounded-xl p-1 mb-6">
          <button className="flex-1 py-2.5 rounded-lg bg-white shadow-sm font-label-lg text-deep-navy">Upcoming</button>
          <button className="flex-1 py-2.5 rounded-lg font-label-lg text-on-surface-variant hover:text-deep-navy transition-colors">Past</button>
          <button className="flex-1 py-2.5 rounded-lg font-label-lg text-on-surface-variant hover:text-deep-navy transition-colors">Cancelled</button>
        </div>

        <div>
          {upcomingBookings.map(booking => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
          
          {upcomingBookings.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-outline-variant/30 border-dashed">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4">
                 <span className="material-symbols-outlined text-outline-variant text-3xl">calendar_month</span>
              </div>
              <h3 className="font-headline-sm text-deep-navy mb-1">No upcoming trips</h3>
              <p className="font-body-sm text-on-surface-variant mb-6 px-8">You don't have any upcoming bookings yet.</p>
              <Link href="/" className="bg-deep-navy text-white px-6 py-3 rounded-xl font-label-lg hover:bg-primary-container transition-colors">
                 Start Exploring
              </Link>
            </div>
          )}
        </div>
      </main>

      <GuestBottomNav />
    </div>
  );
}
