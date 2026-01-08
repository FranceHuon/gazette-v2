import { Badge } from '@gazette-v2/ui/components/primitives/badge'
import { Button } from '@gazette-v2/ui/components/primitives/button'
import { Input } from '@gazette-v2/ui/components/primitives/input'
import { Newspaper, Rss } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-block">
              <Badge className="border-brand-red/20 bg-brand-red/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-red">
                {t('home.hero.badge')}
              </Badge>
            </div>
            <h1 className="mb-8 text-6xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {t('home.hero.title')}
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-muted-foreground md:text-2xl">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="px-8 py-6 text-base font-bold uppercase tracking-wide">
                <Rss className="mr-2 size-5" />
                {t('home.hero.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative">
              <div className="mb-4">
                <Badge className="border-brand-red bg-brand-red px-3 py-1 text-sm font-bold text-white">01</Badge>
              </div>
              <div className="mb-2 text-5xl font-bold text-foreground">1,234</div>
              <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{t('home.stats.todayArticles')}</div>
            </div>
            <div className="group relative">
              <div className="mb-4">
                <Badge className="border-brand-red bg-brand-red px-3 py-1 text-sm font-bold text-white">02</Badge>
              </div>
              <div className="mb-2 text-5xl font-bold text-foreground">150+</div>
              <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{t('home.stats.mediaSources')}</div>
            </div>
            <div className="group relative">
              <div className="mb-4">
                <Badge className="border-brand-red bg-brand-red px-3 py-1 text-sm font-bold text-white">03</Badge>
              </div>
              <div className="mb-2 text-5xl font-bold text-foreground">50K+</div>
              <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{t('home.stats.activeReaders')}</div>
            </div>
            <div className="group relative">
              <div className="mb-4">
                <Badge className="border-brand-red bg-brand-red px-3 py-1 text-sm font-bold text-white">04</Badge>
              </div>
              <div className="mb-2 text-5xl font-bold text-foreground">24/7</div>
              <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{t('home.stats.updates')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8">
              <Newspaper className="mx-auto mb-6 size-16 text-brand-red" />
            </div>
            <h2 className="mb-6 text-5xl font-bold uppercase leading-tight text-foreground md:text-6xl">
              {t('home.cta.title')}
            </h2>
            <p className="mb-12 text-lg text-muted-foreground md:text-xl">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Input
                type="email"
                placeholder={t('home.cta.emailPlaceholder')}
                className="h-12 max-w-sm border-2 px-6 text-base"
              />
              <Button size="lg" className="h-12 px-8 text-base font-bold uppercase tracking-wide">
                {t('home.cta.button')}
              </Button>
            </div>
          </div>
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
