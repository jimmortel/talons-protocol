import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'

export const app = new Frog({
  basePath: '/api',
  title: 'Talons Protocol',
})

app.frame('/', (c) => {
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60, background: 'black', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        🦅 TALONS PROTOCOL IS LIVE
      </div>
    ),
    intents: [
      <Button.Link href="https://farcoins.xyz/token/0x0c6418d1839e4a3627d353683f1246d6be13b306">Buy $TALON</Button.Link>,
    ],
  })
})

export const GET = handle(app)
export const POST = handle(app)
