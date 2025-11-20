import { Link } from 'wouter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    services: [
      'Amazon & Flipkart Management',
      'Facebook & Meta Advertising',
      'Account Health',
      'Cataloging Services',
      'Enhanced Brand Content',
      'Policy Compliance',
    ],
    company: [
      { label: t.footer.about, href: '#about' },
      { label: t.footer.team, href: '#team' },
      { label: t.footer.careers, href: '#careers' },
    ],
    resources: [
      { label: t.footer.blog, href: '#blog' },
      { label: t.footer.faqs, href: '#faqs' },
      { label: t.caseStudies.title, href: '#case-studies' },
    ],
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-primary mb-4">E-Comm Excellence</div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional e-commerce services for Amazon, Flipkart, and Meta platforms.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" data-testid="link-facebook">
                <SiFacebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-instagram">
                <SiInstagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-linkedin">
                <SiLinkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-twitter">
                <SiX className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-service-${index}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-company-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold mb-4 mt-6">{t.footer.resources}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-resource-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.newsletter}</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">{t.footer.subscribe}</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t.footer.rights}</p>
          <div className="flex gap-6">
            <Link href="#privacy">
              <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
                {t.footer.privacy}
              </a>
            </Link>
            <Link href="#terms">
              <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
                {t.footer.terms}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
