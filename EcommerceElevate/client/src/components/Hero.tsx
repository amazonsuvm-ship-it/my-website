import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';
import { SiAmazon, SiFacebook, SiInstagram } from 'react-icons/si';
import heroImage from '@assets/generated_images/E-commerce_team_collaboration_hero_9e77f7d1.png';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                data-testid="button-hero-primary"
              >
                {t.hero.primaryCta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                data-testid="button-hero-secondary"
              >
                {t.hero.secondaryCta}
              </Button>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-3">{t.hero.trustBadge}</p>
              <div className="flex items-center gap-4 flex-wrap">
                <SiAmazon className="h-6 w-6 text-foreground/60" />
                <SiFacebook className="h-6 w-6 text-foreground/60" />
                <SiInstagram className="h-6 w-6 text-foreground/60" />
                <span className="text-sm text-muted-foreground">Flipkart</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-md overflow-hidden">
              <img
                src={heroImage}
                alt="E-commerce team collaboration"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
