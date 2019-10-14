module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  globals: {
    __DEV__: true,
    ErrorUtils: true,
  },
  extends: [
    'standard',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['react', 'react-native', 'flowtype', 'prettier', 'standard'],
  settings: {
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      version: '15.0', // React version, default to the latest React stable release
    },
  },
  rules: {
    __DEV__: 0,
    'react/display-name': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-no-comment-textnodes': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/wrap-multilines': 0,
  },
};
