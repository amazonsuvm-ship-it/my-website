import { SiAmazon, SiFacebook, SiInstagram } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n';

export function PlatformExpertise() {
  const { t } = useLanguage();

  const platforms = [
    { name: 'Amazon', icon: SiAmazon, expertise: 'Full Service Management' },
    { name: 'Flipkart', icon: null, expertise: 'Seller Support & Optimization' },
    { name: 'Facebook', icon: SiFacebook, expertise: 'Ad Campaign Management' },
    { name: 'Instagram', icon: SiInstagram, expertise: 'Social Commerce' },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t.platforms.title}</h2>
          <p className="text-lg text-muted-foreground">{t.platforms.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-platform-${index}`}>
              <CardContent className="p-8 text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  {platform.icon ? (
                    <platform.icon className="h-12 w-12 text-primary" />
                  ) : (
                    <div className="text-2xl font-bold text-primary">{platform.name}</div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground">{platform.expertise}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
