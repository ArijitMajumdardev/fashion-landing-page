import { FeaturedProducts } from "@/components/Featured-Products";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Story from "@/components/Story";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
