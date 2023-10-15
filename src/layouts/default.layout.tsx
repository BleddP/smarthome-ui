import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatedOutlet } from 'router/AnimatedOutlet'

// HA
import { subscribeEntities } from 'home-assistant-js-websocket'
import { websocketLongLife } from '../services/websocket-longlife'

// Components
import { motion, AnimatePresence } from 'framer-motion'
import { AsideNav, Container } from '../components'
import { useStore } from '../hooks'

export const DefaultLayout = () => {
  const store = useStore()
  const location = useLocation()

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
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}>
              <AnimatedOutlet />
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>
      <div className="background"></div>
    </div>
  )
}
