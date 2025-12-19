# Gazette V2

Projet d'évaluation Master 3 (RNCP 7) - Architecture Logicielle Front-End

## 📖 À propos

Application web moderne construite avec une architecture monorepo, développée dans le cadre du projet d'évaluation en Architecture Logicielle et Front-End.

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Docker Services](#-docker-services)
- [Useful Commands](#️-useful-commands)
- [Development](#-development)
- [Continuous Integration (CI)](#-continuous-integration-ci)
- [Documentation](#-documentation)
- [Deployment](#-deployment)

## 🔍 Overview

This project uses a "monorepo" architecture. The advantages are numerous, but primarily:

- Ability to develop full-stack features without context switching, making a single PR for a complete feature;
- Easier deployment: no need to synchronize multiple separate deployments;
- Strong end-to-end typing, easier refactoring;
- Simplified and unified tooling (linter, build, etc.)

## 🛠️ Stack Technique

- **Frontend**: React 19 + React Router v7 (SSR)
- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL + MikroORM
- **UI**: Design System custom + Composants atomiques
- **Auth**: Better Auth
- **Tooling**: pnpm, ESLint, Prettier, Docker

## 📁 Structure du Projet

```
gazette-v2/
├── apps/
│   ├── api/           # API NestJS
│   └── web-ssr/       # Application React SSR
├── packages/
│   ├── ui/            # Design System & composants
│   └── openapi-generator/  # Typage API/Frontend
└── docs/              # Documentation technique
```

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (version 24.10.0)
- [PNPM](https://pnpm.io/) (version 10.5.2)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

## 🚀 Installation

1. Cloner le repository

```bash
git clone https://github.com/VOTRE-USERNAME/gazette-v2.git
cd gazette-v2
```

2. Installer les dépendances Node.js (version 24.10.0) et pnpm (version 10.5.2)

```bash
fnm use 24.10.0
npm i -g pnpm@10.5.2
```

3. Installer les dépendances du projet

```bash
pnpm install
```

4. Lancer le script de configuration

```bash
pnpm rock
```

5. Démarrer le projet en mode développement

```bash
pnpm dev
```

## 🐳 Services Docker

- **PostgreSQL** - Base de données
- **MailDev** - Serveur SMTP de développement

## ⌨️ Commandes Utiles

### Docker
- `pnpm docker:up` - Démarrer les services
- `pnpm docker:down` - Arrêter les services
- `pnpm docker:logs` - Voir les logs

### Développement
- `pnpm dev` - Mode développement
- `pnpm build` - Build de production
- `pnpm lint` - Vérifier le code
- `pnpm generate` - Générer les clients OpenAPI

### Base de données
- `pnpm db:migrate:create` - Créer une migration
- `pnpm db:migrate:up` - Appliquer les migrations
- `pnpm db:fresh:seed` - Réinitialiser avec données de test

## 💻 Développement

### Applications

- **API** ([apps/api/README.md](apps/api/README.md)) - Backend NestJS
- **Web SSR** ([apps/web-ssr/README.md](apps/web-ssr/README.md)) - Frontend React avec SSR

### Packages Partagés

- **UI** - Composants réutilisables (futur Design System avec Storybook)
- **OpenAPI Generator** - Typage automatique entre API et Frontend

## 📚 Documentation

- [Frontend Guidelines](docs/frontend-guidelines.md)
- [Backend Guidelines](docs/backend-guidelines.md)
- [API Documentation](apps/api/README.md)

---

**Projet développé par France Huon** - Master 3 RNCP 7 - Décembre 2025
