import fs from 'fs'
import path from 'path'

import { generateTestClient } from '../../../../utils/getTestClient'

test('exhaustive-schema', async () => {
  await generateTestClient()

  const generatedTypeScript = fs.readFileSync(path.join(__dirname, './node_modules/.prisma/client/index.d.ts'), 'utf-8')
  const generatedBrowserJS = fs.readFileSync(
    path.join(__dirname, './node_modules/.prisma/client/index-browser.js'),
    'utf-8',
  )

  expect(generatedTypeScript).toMatchSnapshot('generatedTypeScript')
  expect(generatedBrowserJS).toMatchSnapshot('generatedBrowserJS')
})
