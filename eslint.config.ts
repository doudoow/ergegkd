import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    // src 下的订阅数据（src/apps/*.ts、categories.ts、globalGroups.ts、subscription.ts）
    // 由参考订阅数据原样生成，字段名/引号风格刻意与来源 JSON 保持一致，
    // 且带有 @ts-nocheck 以容纳 @gkd-kit/api 类型未覆盖的字段（如 quickFind），
    // 因此不参与本模板的格式化与 lint 检查。
    ignores: ['dist/**', 'node_modules/**', 'src/**'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,mts,cts}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'error',
    },
  },
  pluginPrettier,
);
