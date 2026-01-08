import { Badge } from '@gazette-v2/ui/components/primitives/badge'
import { Button } from '@gazette-v2/ui/components/primitives/button'
import { Card } from '@gazette-v2/ui/components/primitives/card'
import { Input } from '@gazette-v2/ui/components/primitives/input'
import { Newspaper, Radio, Rss } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              <Radio className="mr-1 size-3" />
              {t('home.hero.badge')}
            </Badge>
            <h1 className="mb-6 text-5xl font-semibold uppercase text-brand-red md:text-6xl lg:text-7xl">
              {t('home.hero.title')}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button size="lg">
                <Rss className="mr-2 size-4" />
                {t('home.hero.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Card className="p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-brand-red">1,234</div>
              <div className="text-sm text-muted-foreground">{t('home.stats.todayArticles')}</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-brand-red">150+</div>
              <div className="text-sm text-muted-foreground">{t('home.stats.mediaSources')}</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-brand-red">50K+</div>
              <div className="text-sm text-muted-foreground">{t('home.stats.activeReaders')}</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-brand-red">24/7</div>
              <div className="text-sm text-muted-foreground">{t('home.stats.updates')}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-gradient-to-r from-brand-red/10 to-brand-red/5">
            <div className="p-8 md:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <Newspaper className="mx-auto mb-4 size-12 text-brand-red" />
                <h2 className="mb-4 text-3xl font-semibold uppercase text-brand-red">
                  {t('home.cta.title')}
                </h2>
                <p className="mb-6 text-muted-foreground">
                  {t('home.cta.description')}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Input
                    type="email"
                    placeholder={t('home.cta.emailPlaceholder')}
                    className="max-w-xs"
                  />
                  <Button>{t('home.cta.button')}</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

export function meta() {
  return [
    {
      title: 'Gazette V2 - Votre agrégateur de médias',
    },
    {
      property: 'og:title',
      content: 'Gazette V2 - Votre agrégateur de médias',
    },
    {
      name: 'description',
      content: 'Suivez toute l\'actualité en un seul endroit. Gazette V2 regroupe vos sources d\'information préférées en temps réel.',
    },
  ]
}
