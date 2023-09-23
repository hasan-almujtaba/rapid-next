/* eslint-disable no-console */
import * as fs from 'node:fs'
import * as path from 'node:path'
import * as url from 'node:url'

const currentModuleURL = new URL(import.meta.url)
const currentModulePath = url
  .fileURLToPath(currentModuleURL)
  .replace('cleanup.ts', '')

const itemsToRemove: string[] = [
  'components/base/button',
  'components/base/button',
  'features/information',
  'features/user',
  'styles/button.css',
]

for (const itemPath of itemsToRemove) {
  const fullPath = path.resolve(currentModulePath, itemPath)
  if (fs.existsSync(fullPath)) {
    if (fs.statSync(fullPath).isDirectory()) {
      fs.rmdirSync(fullPath, { recursive: true })
      console.log(`Removed directory ${itemPath}`)
    } else {
      fs.unlinkSync(fullPath)
      console.log(`Removed file ${itemPath}`)
    }
  } else {
    console.log(`${itemPath} does not exist`)
  }
}

console.log("Don't forget to update imports on affected files.")
