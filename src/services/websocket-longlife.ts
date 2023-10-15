import {
  createConnection,
  createLongLivedTokenAuth,
} from 'home-assistant-js-websocket'

export const websocketLongLife = async () => {
  const auth = createLongLivedTokenAuth(
    'http://homeassistant.local:8123',
    process.env.LONG_KEY || ''
  )

  const connection = await createConnection({ auth })
  return connection
}
