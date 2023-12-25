module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest-dom/recommended",
        "plugin:react/jsx-runtime"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    ignorePatterns: ["cypress", "dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "import", "prettier"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: __dirname
    },
    rules: {
        indent: "off",
        "no-console": "warn",
        quotes: "error",
        semi: "error",
        "import/order": [
            "error",
            {
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                },
                "newlines-between": "always"
            }
        ],
        "react/react-in-jsx-scope": "off",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "react-hooks/rules-of-hooks": "warn",
        "prettier/prettier": "error"
    }
};
