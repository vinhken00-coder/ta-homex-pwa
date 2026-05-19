import React from 'react';
import Link from 'next/link';
import { mockBookings, mockApartments } from '@/data/mock-data';
import TopAppBar from '@/components/layout/TopAppBar';
import GuestBottomNav from '@/components/layout/GuestBottomNav';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

function BookingCard({ booking }: { booking: (typeof mockBookings)[0] }) {
  const apartment = mockApartments.find(a => a.id === booking.apartmentId);
  if (!apartment) return null;

  const isUpcoming = booking.status === 'upcoming';
  const isCompleted = booking.status === 'completed';

  return (
    <Link href={`/apartments/${apartment.id}`} className="block mb-4">
      <div className="bg-white rounded-3xl p-4 border border-outline-variant/30 shadow-sm flex gap-4 transition-all hover:shadow-md active:scale-[0.98]">
        <img
          src={apartment.imageUrl}
          alt={apartment.name}
          className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
        />
        <div className="flex flex-col flex-1 justify-between py-1 min-w-0">
          <div>
            <h4 className="font-headline-sm text-deep-navy line-clamp-1">{apartment.name}</h4>
            <p className="font-body-sm text-on-surface-variant mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-antique-gold">calendar_today</span>
              {formatDate(booking.checkIn)} – {formatDate(booking.checkOut)}
            </p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className={`font-label-sm px-3 py-1 rounded-full text-[11px] font-semibold ${
              isUpcoming
                ? 'bg-antique-gold/15 text-antique-gold'
                : isCompleted
                  ? 'bg-success-green/10 text-success-green'
                  : 'bg-surface-container text-on-surface-variant'
            }`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
            <span className="font-label-lg text-deep-navy font-bold">
              {booking.totalPrice.toLocaleString('vi-VN')}đ
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function MyBookingsPage() {
  const upcomingBookings = mockBookings.filter(b => b.status === 'upcoming');

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopAppBar title="My Bookings" showNotifications />

      <main className="px-margin-mobile pt-6 pb-28">
        {/* Tabs */}
        <div className="flex bg-surface-container rounded-2xl p-1 mb-6">
          <button className="flex-1 py-2.5 rounded-xl bg-white shadow-sm font-label-lg text-deep-navy">
            Upcoming
          </button>
          <button className="flex-1 py-2.5 rounded-xl font-label-lg text-on-surface-variant">
            Past
          </button>
          <button className="flex-1 py-2.5 rounded-xl font-label-lg text-on-surface-variant">
            Cancelled
          </button>
        </div>

        <div>
          {upcomingBookings.map(booking => (
            <BookingCard key={booking.id} booking={booking} />
          ))}

          {upcomingBookings.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-outline-variant/50">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-outline-variant text-3xl">calendar_month</span>
              </div>
              <h3 className="font-headline-sm text-deep-navy mb-2">No upcoming trips</h3>
              <p className="font-body-sm text-on-surface-variant mb-6 px-8">
                You don't have any upcoming bookings yet.
              </p>
              <Link
                href="/"
                className="inline-block bg-deep-navy text-white px-6 py-3 rounded-xl font-label-lg hover:bg-primary-container transition-colors"
              >
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
