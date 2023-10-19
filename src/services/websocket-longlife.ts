import {
  createConnection,
  createLongLivedTokenAuth,
} from 'home-assistant-js-websocket'

export const websocketLongLife = async () => {
  if (!process.env.REACT_APP_LONG_KEY) return null

  try {
    const auth = createLongLivedTokenAuth(
      'http://homeassistant.local:8123',
      process.env.REACT_APP_LONG_KEY
    )

    const connection = await createConnection({ auth })
    return connection
  } catch (error) {
    console.log(error)
    return null
  }
}
