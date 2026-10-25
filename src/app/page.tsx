import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { Faq } from "@/components/sections/Faq";
import { FeatureMarquee } from "@/components/sections/FeatureMarquee";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureMarquee />
      <BentoFeatures />
      <HowItWorks />
      <CommunitySection />
      <Faq />
      <FinalCta />
    </>
  );
}
