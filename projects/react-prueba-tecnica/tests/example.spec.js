// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = `https://cataas.com`
const LOCALHOST_URL = 'http://localhost:5173/'
// test end to end, ver que se ha renderizado algo en la pagina, que hay una imagen

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  //funciona con promesas

  const text = await page.getByRole('paragraph') // recupera de la pagina el parrafo que encuentres <p><p/>
  const image = await page.getByRole('img')

  const textContent = await text.textContent() // recupera contenido del parrafo
  const imageSrc = await image.getAttribute('src') // recupera el src de la imagen

  // console.log('text: ', { textContent })
  // console.log('imageSrc: ', { imageSrc })
  await expect(textContent?.length).toBeGreaterThan(0) // que el textContent no sea null y length mayor a 0
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
