import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n';

export function RecommendationsWidget() {
  const { t } = useLanguage();
  const [businessType, setBusinessType] = useState('');
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [revenue, setRevenue] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const platformOptions = [
    { id: 'amazon', label: 'Amazon' },
    { id: 'flipkart', label: 'Flipkart' },
    { id: 'facebook', label: 'Facebook' },
    { id: 'instagram', label: 'Instagram' },
  ];

  const handlePlatformToggle = (platform: string) => {
    setPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const getRecommendations = () => {
    const recommended: string[] = [];
    
    if (platforms.includes('amazon') || platforms.includes('flipkart')) {
      recommended.push(t.services.amazonManagement.title);
      recommended.push(t.services.cataloging.title);
      recommended.push(t.services.ebc.title);
    }
    
    if (platforms.includes('facebook') || platforms.includes('instagram')) {
      recommended.push(t.services.metaAdvertising.title);
    }
    
    if (revenue === 'high' || platforms.length > 2) {
      recommended.push(t.services.accountHealth.title);
      recommended.push(t.services.policyCompliance.title);
    }
    
    setRecommendations(Array.from(new Set(recommended)).slice(0, 3));
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t.recommendations.title}</h2>
          <p className="text-lg text-muted-foreground">{t.recommendations.subtitle}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t.recommendations.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="business-type">{t.recommendations.businessType}</Label>
              <Select value={businessType} onValueChange={setBusinessType}>
                <SelectTrigger id="business-type" data-testid="select-business-type">
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startup">Startup</SelectItem>
                  <SelectItem value="small">Small Business</SelectItem>
                  <SelectItem value="medium">Medium Enterprise</SelectItem>
                  <SelectItem value="large">Large Corporation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>{t.recommendations.platforms}</Label>
              <div className="grid grid-cols-2 gap-3">
                {platformOptions.map((platform) => (
                  <div key={platform.id} className="flex items-center gap-2">
                    <Checkbox
                      id={platform.id}
                      checked={platforms.includes(platform.id)}
                      onCheckedChange={() => handlePlatformToggle(platform.id)}
                      data-testid={`checkbox-platform-${platform.id}`}
                    />
                    <Label htmlFor={platform.id} className="cursor-pointer">
                      {platform.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label>{t.recommendations.revenue}</Label>
              <RadioGroup value={revenue} onValueChange={setRevenue}>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="low" id="low" data-testid="radio-revenue-low" />
                  <Label htmlFor="low" className="cursor-pointer">Under $10k/month</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="medium" id="medium" data-testid="radio-revenue-medium" />
                  <Label htmlFor="medium" className="cursor-pointer">$10k - $50k/month</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="high" id="high" data-testid="radio-revenue-high" />
                  <Label htmlFor="high" className="cursor-pointer">$50k+/month</Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              className="w-full"
              onClick={getRecommendations}
              disabled={!businessType || platforms.length === 0 || !revenue}
              data-testid="button-get-recommendations"
            >
              {t.recommendations.getRecommendations}
            </Button>

            {recommendations.length > 0 && (
              <div className="pt-6 border-t space-y-4" data-testid="recommendations-result">
                <h3 className="font-semibold text-lg">{t.recommendations.recommendedServices}</h3>
                <div className="flex flex-wrap gap-2">
                  {recommendations.map((rec, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-sm px-3 py-1"
                      data-testid={`recommendation-badge-${index}`}
                    >
                      {rec}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
