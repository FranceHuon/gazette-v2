import { Button } from '@gazette-v2/ui/components/primitives/button'
import { Input } from '@gazette-v2/ui/components/primitives/input'

export function ExampleInput() {
  return (
    <div className="p-8 space-y-6 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Exemples de composants</h2>

      {/* Inputs */}
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Entrez votre email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Mot de passe
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Votre mot de passe"
            showPasswordToggle
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nom
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="disabled" className="block text-sm font-medium mb-2">
            Désactivé
          </label>
          <Input
            id="disabled"
            type="text"
            placeholder="Input désactivé"
            disabled
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4 pt-4">
        <h3 className="font-semibold">Variantes de boutons</h3>

        <div className="flex flex-col gap-3">
          <Button>Bouton par défaut</Button>
          <Button variant="outline">Bouton outline</Button>
          <Button variant="ghost">Bouton ghost</Button>
        </div>

        <h3 className="font-semibold mt-4">Tailles de boutons</h3>
        <div className="flex flex-col gap-3">
          <Button size="sm">Petit bouton</Button>
          <Button size="default">Bouton normal</Button>
          <Button size="lg">Grand bouton</Button>
        </div>
      </div>
    </div>
  )
}
