export default function ArticlesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">Articles</h1>
      <p className="text-muted-foreground">
        Gérez vos articles ici
      </p>
    </div>
  )
}

export function meta() {
  return [
    {
      title: 'Articles',
    },
    {
      property: 'og:title',
      content: 'Articles',
    },
    {
      name: 'description',
      content: 'Page de gestion des articles',
    },
  ]
}
