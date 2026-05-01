import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'

export const app = new Frog({
  basePath: '/api',
  title: 'Talons Protocol',
})

app.frame('/', (c) => {
  return c.res({
    image: (
      <div style={{ 
        color: 'white', display: 'flex', fontSize: 60, background: 'black',
        width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' 
      }}>
        🦅 Talons Protocol: The Hunt Begins
      </div>
    ),
    intents: [
      <Button value="join">Join the Nest</Button>,
      <Button.Link href="https://highlight.xyz/">Support</Button.Link>,
    ],
  })
})

export const GET = handle(app)
export const POST = handle(app)
