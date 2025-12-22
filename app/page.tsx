import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import WorkSection from "@/components/trendy-work/WorkSection";
import Testimonials from "@/components/Testimonials";
import ArticlesSection from "@/components/articles/ArticlesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkSection />
      <Testimonials />
      <ArticlesSection />
      <CTASection />
      <Footer />
    </>
  )
}
