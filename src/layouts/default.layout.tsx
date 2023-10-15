import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

// HA
import { subscribeEntities } from 'home-assistant-js-websocket'
import { websocketLongLife } from '../services/websocket-longlife'

// Components
import { AsideNav, Container } from '../components'
import { useStore } from '../hooks'

export const DefaultLayout = () => {
  const store = useStore()

  const connect = async () => {
    const connection = await websocketLongLife()
    if (connection) {
      subscribeEntities(connection, entities =>
        store.entities.setEntities(entities)
      )
    }
  }

  useEffect(() => {
    connect()
  }, [])

  return (
    <div>
      <div className="layout">
        <AsideNav />
        <Container>
          <Outlet />
        </Container>
      </div>
      <div className="background"></div>
    </div>
  )
}
