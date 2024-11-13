import pluginJs from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import pluginReactNative from 'eslint-plugin-react-native';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    ignores: ['**/*.config.js', '**/node_modules/**'],
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  pluginJs.configs.recommended,
  perfectionist.configs['recommended-natural'],
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'react-native': pluginReactNative,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-check': 'allow-with-description',
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
        },
      ],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      'default-param-last': 'off',
      'init-declarations': 'off',
      'no-implied-eval': 'off',

      'no-unused-vars': 'off',
      'perfectionist/sort-enums': [
        'error',
        {
          forceNumericSort: false,
          ignoreCase: true,
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          sortByValue: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            type: {
              react: ['react', 'react-*'],
            },
            value: {
              lodash: 'lodash',
              react: ['react', 'react-*'],
            },
          },
          environment: 'node',
          groups: [
            'react',
            'type',
            ['builtin', 'external'],
            'lodash',
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          ignoreCase: true,
          internalPattern: ['~/**'],
          matcher: 'minimatch',
          maxLineLength: undefined,
          newlinesBetween: 'always',
          order: 'asc',
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],

      'perfectionist/sort-jsx-props': [
        'error',
        {
          customGroups: {
            callback: 'on*',
          },
          groups: ['unknown', 'shorthand', 'callback', 'multiline'],
        },
      ],
      'perfectionist/sort-maps': [
        'error',
        {
          ignoreCase: true,
          matcher: 'minimatch',
          order: 'asc',
          partitionByNewLine: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          groupKind: 'mixed',
          ignoreCase: true,
          matcher: 'minimatch',
          order: 'asc',
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-named-imports': [
        'error',
        {
          groupKind: 'mixed',
          ignoreAlias: false,
          ignoreCase: true,
          matcher: 'minimatch',
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-object-types': [
        'error',
        {
          customGroups: {},
          groups: [],
          ignoreCase: true,
          matcher: 'minimatch',
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          groups: [],
          ignoreCase: true,
          matcher: 'minimatch',
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],
      'react/prop-types': 'off',
      'react-native/no-color-literals': 'warn',
      'react-native/no-inline-styles': 'warn',

      'react-native/no-single-element-style-arrays': 'warn',
      'react-native/no-unused-styles': 'error',
      'react-native/sort-styles': [
        'error',
        'asc',
        { ignoreClassNames: false, ignoreStyleProperties: false },
      ],
      'react-native/split-platform-components': 'warn',
    },
  },
];
