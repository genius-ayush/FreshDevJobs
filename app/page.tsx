import Faqs from "@/components/faqs";
import Header from "@/components/Header";
import HeroSection from "@/components/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Faqs/>
    </div>
  );
}
