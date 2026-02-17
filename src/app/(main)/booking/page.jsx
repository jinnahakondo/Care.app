import BookingForm from "@/components/booking/BookingForm";
import { getSingleService } from "@/lib/api/services";


export default async function BookingPage({ searchParams }) {
  const { serviceId } = await searchParams; // Next.js 16+ async
  const service = await getSingleService(serviceId);

  return <BookingForm service={service} />;
}

