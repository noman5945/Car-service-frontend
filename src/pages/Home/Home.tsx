import { HeroSection } from "../../components/HeroSection";
import { ReviewSection } from "./ReviewSection";
import { ServiceDemoSection } from "./ServiceDemoSection";
import { WhyUsSection } from "./WhyUsSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceDemoSection />
      <WhyUsSection />
      <ReviewSection />
    </div>
  );
};
