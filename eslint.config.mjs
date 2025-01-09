import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  "plugin:prettier/recommended", // Prettier 통합
];

export default {
  extends: eslintConfig,
  rules: {
    // 추가 규칙 설정 (예: Prettier와의 충돌 방지)
    "prettier/prettier": ["error"], // Prettier 규칙을 ESLint 에러로 설정
    // 다른 ESLint 규칙 추가 가능
  },
  // 필요에 따라 parserOptions 및 env 설정 추가
};
