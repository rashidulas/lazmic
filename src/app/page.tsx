import Navbar from "@/components/Navbar";
import HeroQuickLinks from "@/components/HeroQuickLinks";
import SelectedWorks from "@/components/SelectedWorks";
import Capabilities from "@/components/Capabilities";
import CTAFooter from "@/components/CTAFooter";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroQuickLinks />
        <SelectedWorks />
        <Capabilities />
        <CTAFooter />
      </main>
    </>
  );
}
