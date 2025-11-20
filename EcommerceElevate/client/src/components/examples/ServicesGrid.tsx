import { ServicesGrid } from '../ServicesGrid';
import { LanguageProvider } from '../LanguageProvider';

export default function ServicesGridExample() {
  return (
    <LanguageProvider>
      <ServicesGrid />
    </LanguageProvider>
  );
}
