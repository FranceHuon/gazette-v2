// eslint.config.js
import antfu from '@antfu/eslint-config'

// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

export default antfu(
  // Configures for antfu's config and global rules
  {
    react: true,
    ignores: [
      '**/.react-router/**',
      '**/*.gen.ts',
      '**/dist/',
      '**/temp/',
      '**/build/',
      'packages/schematics/src/files/',
      'packages/openapi-generator/client/',
      '**/.astro/**',
      'node_modules/',
    ],
    rules: {
      'ts/no-explicit-any': 'error',
      'react-refresh/only-export-components': 'off',
    },
  },

  // Starting from the second arguments they are ESLint Flat Configs
  // Careful, antfu renames some plugins for consistency https://github.com/antfu/eslint-config?tab=readme-ov-file#plugins-renaming
  {
    files: ['apps/api/**/*.ts', 'apps/api/**/*.json'],
    rules: {
      'ts/consistent-type-imports': 'off',
      'node/prefer-global/process': ['error', 'always'],
    },
  },
)
