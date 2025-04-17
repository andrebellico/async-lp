import HeroSection from "@/components/about/HeroSection";
import AboutUsSection from "@/components/about/AboutUsSection";
import ImageSection from "@/components/about/ImageSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import AdCard from "@/components/advertisement-card";
import TeamSection from "@/components/about/TeamSection";
import MyValue from "@/components/about/MyValue";
import FaqsSection from "@/components/faqs";
import AnimatedSection from "@/components/animated-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black mx-auto max-w-[1200px] text-white ">
      <main className="flex flex-col w-full gap-20">
        <HeroSection />
        <AnimatedSection>
          <AboutUsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ImageSection />
        </AnimatedSection>
        <AnimatedSection>
          <AchievementsSection />
        </AnimatedSection>
        <AnimatedSection>
          <MyValue />
        </AnimatedSection>
        <AnimatedSection>
          <TeamSection />
        </AnimatedSection>
        <AnimatedSection>
          <FaqsSection />
        </AnimatedSection>
        <AdCard />
      </main>
    </div>
  );
}
