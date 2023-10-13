import { useEffect } from "react";

// HA
import {
  subscribeEntities,
} from "home-assistant-js-websocket";
import { websocketLongLife } from "./services/websocket-longlife";

// Components
import { AsideNav, Container, Controls } from "./components";
import {useStore} from './hooks'

function App() {
  const store = useStore()

  const connect = async () => {
    const connection = await websocketLongLife()
    if (connection) {
      subscribeEntities(connection, (entities) => store.entities.setEntities(entities));
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
          <Controls />
        </Container>
      </div>
    <div className="background">
    </div>
    </div>
  );
}

export default App;
