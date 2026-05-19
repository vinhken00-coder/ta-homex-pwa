import { redirect } from 'next/navigation';

// Redirect legacy /staff/guests/[id] → /staff/guest/[id]
export default async function StaffGuestsRedirectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  redirect(`/staff/guest/${id}`);
}
