import { useLanguage } from '@/lib/i18n';

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Description,
    },
    {
      number: '02',
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Description,
    },
    {
      number: '03',
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Description,
    },
    {
      number: '04',
      title: t.howItWorks.step4Title,
      description: t.howItWorks.step4Description,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">{t.howItWorks.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${index}`}>
              <div className="space-y-4">
                <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -ml-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
