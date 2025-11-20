import { LanguageSwitcher } from '../LanguageSwitcher';
import { LanguageProvider } from '../LanguageProvider';

export default function LanguageSwitcherExample() {
  return (
    <LanguageProvider>
      <div className="p-4">
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}
