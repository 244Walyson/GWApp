import "./App.css"
import Fotter from "./components/Fotter"
import LoginClient from "./components/LoginClient"


function App() {

  return (
    <>
     <div className="app-center">
     <LoginClient></LoginClient>
     </div>
     <Fotter></Fotter>
    </>
  )
}

export default App
