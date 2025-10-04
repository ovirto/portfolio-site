import HeroSection, {
    AboutMe, FeaturedProjects, Skills,
    Technologies, Connect} from "@/frontend/pages";

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutMe/>
        <FeaturedProjects/>
        <Skills/>
        <Technologies/>
        <Connect/>
    </div>
  );
}
