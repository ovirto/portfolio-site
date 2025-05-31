import Image from "next/image";
import HeroSection from "@/frontend/pages";
import {AboutMe} from "@/frontend/pages";
import {FeaturedProjects} from "@/frontend/pages";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutMe/>
      <FeaturedProjects/>
    </div>
  );
}
