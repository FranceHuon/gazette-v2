export default function SettingsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">Paramètres</h1>
      <p className="text-muted-foreground">
        Configurez votre application
      </p>
    </div>
  )
}

export function meta() {
  return [
    {
      title: 'Paramètres',
    },
    {
      property: 'og:title',
      content: 'Paramètres',
    },
    {
      name: 'description',
      content: 'Page de paramètres',
    },
  ]
}
