import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import unusedImports from 'eslint-plugin-unused-imports'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js, react: pluginReact, 'unused-imports': unusedImports },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      // --- Default recommended JS rules
      ...js.configs.recommended.rules,

      // --- React JSX rule tweak for Next.js
      'react/react-in-jsx-scope': 'off',

      // --- 🔥 Auto-fix unused imports
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  pluginReact.configs.flat.recommended,
])
