'use client'
import { HeroSection } from "@/components/Hero";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <HeroSection />

      <Main.Root>
        <Main.Journey />
        <Main.Body />
        <Main.Recomendation />
      </Main.Root>

    </section>
  );
}
