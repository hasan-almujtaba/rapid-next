const path = require('path')

const buildTscCommand = (filenames) =>
  `tsc-files --noEmit ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`

module.exports = {
  '*.{ts,tsx}': [buildTscCommand],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
}
