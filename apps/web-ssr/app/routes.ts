import type { RouteConfig } from '@react-router/dev/routes'
import {
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  layout('components/main-layout.tsx', [
    index('features/home/home-page.tsx'),
    route('articles', 'features/articles/articles-page.tsx'),
    route('medias', 'features/medias/medias-page.tsx'),
    route('settings', 'features/settings/settings-page.tsx'),
  ]),
] satisfies RouteConfig
