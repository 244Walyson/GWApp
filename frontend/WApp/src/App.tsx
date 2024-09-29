import "./App.css"
import Fotter from "./components/Fotter"
import LoginClient from "./pages/LoginClient"


function App() {

  return (
    <>
     <div className="app-center bg-background dark">
     <LoginClient></LoginClient>
     </div>
     <Fotter></Fotter>
    </>
  )
}

export default App
