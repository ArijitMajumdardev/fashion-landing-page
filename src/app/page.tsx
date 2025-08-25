import { FeaturedProducts } from "@/components/Featured-Products";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Story from "@/components/Story";

export default function Home() {
  return (
    <main>
        <Hero />
        <Story />
        <FeaturedProducts/>
        <Section />
    </main>
  );
}
