module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write', () => 'tsc'],
  '*.{css}': 'prettier --write',
}
