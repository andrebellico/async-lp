import HeroSection from "@/components/about/HeroSection";
import AboutUsSection from "@/components/about/AboutUsSection";
import ImageSection from "@/components/about/ImageSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import AdCard from "@/components/advertisement-card";
import Teste from "@/components/about/teste";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black mx-auto max-w-[1200px] text-white ">
      <main className="flex flex-col w-full gap-20">
        <HeroSection />
        <AboutUsSection />
        <ImageSection />
        <AchievementsSection />
        <Teste />
        <AdCard />
      </main>
    </div>
  );
}
