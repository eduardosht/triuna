import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#112129] text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}