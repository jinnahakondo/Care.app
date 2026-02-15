
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Simple page container so sections match figma stacking */}
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
