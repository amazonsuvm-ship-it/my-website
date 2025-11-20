import { RecommendationsWidget } from '../RecommendationsWidget';
import { LanguageProvider } from '../LanguageProvider';

export default function RecommendationsWidgetExample() {
  return (
    <LanguageProvider>
      <RecommendationsWidget />
    </LanguageProvider>
  );
}
