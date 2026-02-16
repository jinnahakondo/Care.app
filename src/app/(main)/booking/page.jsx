import OrderSummary from "@/components/booking/OrderSummary";

import { getSingleService } from "@/lib/api/services";
import BookingForm from "@/components/booking/BookingForm";
import BookingPageMain from "@/components/booking/BookingPageMain";

export default async function BookingPage({ searchParams }) {
  const { serviceId } = await searchParams;
  const service = await getSingleService(serviceId);

  return <BookingPageMain service={service} />;
}
