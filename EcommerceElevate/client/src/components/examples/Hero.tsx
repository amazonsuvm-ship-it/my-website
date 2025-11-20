import { Hero } from '../Hero';
import { LanguageProvider } from '../LanguageProvider';

export default function HeroExample() {
  return (
    <LanguageProvider>
      <Hero />
    </LanguageProvider>
  );
}
