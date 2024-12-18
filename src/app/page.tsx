import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IngredientComponent from "@/components/IngredientComponent";
import LatestNews from "@/components/LatestNews";
import VitaminComponent from "@/components/VitaminComponent";

export default function Home() {
  return (
    <div>
      <section className="ml-12">
        <Header />
      </section>
      <VitaminComponent />
      <section className="flex justify-center relative -mb-16">
        <BenefitsSection />
      </section>
      <IngredientComponent />
      <LatestNews />
      <Footer />
    </div>
  );
}
