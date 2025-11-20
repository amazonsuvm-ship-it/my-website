import { ShoppingCart, TrendingUp, Shield, FileText, Image as ImageIcon, ClipboardCheck } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const iconMap = {
  ShoppingCart,
  TrendingUp,
  Shield,
  FileText,
  ImageIcon,
  ClipboardCheck,
};

export function ServicesGrid() {
  const { t } = useLanguage();

  const services = [
    {
      icon: 'ShoppingCart',
      title: t.services.amazonManagement.title,
      description: t.services.amazonManagement.description,
    },
    {
      icon: 'TrendingUp',
      title: t.services.metaAdvertising.title,
      description: t.services.metaAdvertising.description,
    },
    {
      icon: 'Shield',
      title: t.services.accountHealth.title,
      description: t.services.accountHealth.description,
    },
    {
      icon: 'FileText',
      title: t.services.cataloging.title,
      description: t.services.cataloging.description,
    },
    {
      icon: 'ImageIcon',
      title: t.services.ebc.title,
      description: t.services.ebc.description,
    },
    {
      icon: 'ClipboardCheck',
      title: t.services.policyCompliance.title,
      description: t.services.policyCompliance.description,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary"
                    data-testid={`button-learn-more-${index}`}
                    onClick={() => console.log(`Learn more about ${service.title}`)}
                  >
                    {t.services.learnMore} →
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
