import React from "react";
import { Banner } from "./_components_/Banner";
import { Navbar } from "./_components_/Navbar";
import { Hero } from "./_components_/Hero";
import { Features } from "./_components_/Features";
import { FAQs } from "./_components_/FAQs";
import { Pricing } from "./_components_/Pricingdemo";
import { CallToAction } from "./_components_/CallToAction";
import { Footer } from "./_components_/Footer";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div className="overflow-x-hidden">
        <Banner />
        <Navbar {...session} />
        <Hero />

        <Pricing />
        <Features />

        {/* <ProductShowcase /> */}
        <FAQs />

        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
