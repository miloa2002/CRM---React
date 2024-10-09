import Router from "./router/Router"
import ClientProvider from "./context/ClientProvider"

function App() {

  return (
    <>
      <ClientProvider>
        <Router />
      </ClientProvider>
    </>
  )
}

export default App
