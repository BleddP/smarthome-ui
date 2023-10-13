import { AsideNav, Container, Controls } from "./components";

function App() {
  return (
    <div className="background">
      <div className="layout">
        <AsideNav />
        <Container>
          <Controls />
        </Container>
      </div>
    </div>
  );
}

export default App;
