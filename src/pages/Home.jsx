import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyChoose from '@/components/home/WhyChoose';
import ServiceArea from '@/components/home/ServiceArea';
import OurWork from '@/components/home/OurWork';
import TrustReviews from '@/components/home/TrustReviews';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChoose />
      <ServiceArea />
      <OurWork />
      <TrustReviews />
      <FinalCTA />
    </>
  );
}