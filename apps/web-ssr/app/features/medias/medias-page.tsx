export default function MediasPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">Médias</h1>
      <p className="text-muted-foreground">
        Gérez vos médias ici
      </p>
    </div>
  )
}

export function meta() {
  return [
    {
      title: 'Médias',
    },
    {
      property: 'og:title',
      content: 'Médias',
    },
    {
      name: 'description',
      content: 'Page de gestion des médias',
    },
  ]
}
