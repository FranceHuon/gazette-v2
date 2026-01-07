import { ExampleInput } from './example-input'

export default function HomePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-2">Design System - Composants</h1>
      <p className="text-muted-foreground mb-8">
        Aperçu de vos composants atomiques personnalisés
      </p>

      <ExampleInput />
    </div>
  )
}

export function meta() {
  return [
    {
      title: 'Home',
    },
    {
      property: 'og:title',
      content: 'Home',
    },
    {
      name: 'description',
      content: 'Home page',
    },
  ]
}
