import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';
import { TrendingUp } from 'lucide-react';

export function CaseStudies() {
  const { t } = useLanguage();

  //todo: remove mock functionality
  const caseStudies = [
    {
      company: 'Fashion Brand Co.',
      industry: 'Fashion & Apparel',
      metric: '+250% Sales Growth',
      description: 'Increased Amazon sales through optimized listings and strategic EBC implementation.',
    },
    {
      company: 'Tech Gadgets Inc.',
      industry: 'Electronics',
      metric: '+180% ROI',
      description: 'Facebook & Meta advertising campaign delivering exceptional return on investment.',
    },
    {
      company: 'Home Essentials',
      industry: 'Home & Kitchen',
      metric: '99.8% Account Health',
      description: 'Maintained perfect seller rating through proactive account health management.',
    },
    {
      company: 'Beauty Solutions',
      industry: 'Beauty & Personal Care',
      metric: '+320% Conversions',
      description: 'Enhanced brand content resulted in significant conversion rate improvements.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t.caseStudies.title}</h2>
          <p className="text-lg text-muted-foreground">{t.caseStudies.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-case-study-${index}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{study.company}</h3>
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-3">{study.metric}</div>
                <p className="text-muted-foreground">{study.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary"
                  data-testid={`button-case-study-${index}`}
                  onClick={() => console.log(`Read case study: ${study.company}`)}
                >
                  {t.caseStudies.readCaseStudy} →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
