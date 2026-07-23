import { CommunitySection } from './components/home/CommunitySection';
import { HeroSection } from './components/home/HeroSection';
import { MissionSection } from './components/home/MissionSection';
import { SocialSection } from './components/home/SocialSection';
import { SolutionsSection } from './components/home/SolutionsSection';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        انتقل إلى المحتوى
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <MissionSection />
        <SolutionsSection />
        <CommunitySection />
        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
