import { HeroSection } from "../../components/HeroSection";
import { ReviewSection } from "./ReviewSection";
import { ServiceDemoSection } from "./ServiceDemoSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceDemoSection />
      <ReviewSection />
    </div>
  );
};
