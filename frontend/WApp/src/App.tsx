import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "next-themes"
import { GlobalProvider } from "./context/globalContext"
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import { history } from "../src/utils/history"

import Navbar from "./components/navbar"
import Kanban from "./pages/kanban/page"
import LoginClient from "./pages/LoginClient"
import Employees from "./pages/employees/page"
import Dashboard from "./pages/dashboard/page"
import Chat from "./pages/chat/page"


function App() {
  return (
    <ThemeProvider attribute="class">
      <GlobalProvider>
      <HistoryRouter history={history}>
      <div className="bg-gray-200 text-gray-900 dark:bg-gray-950 dark:text-gray-50 w-screen h-screen">
        <Navbar />
        <main className="pl-24 pr-10 py-10 h-full max-w-full overflow-x-hidden overflow-hidden">
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/login" element={<LoginClient />} />
            <Route path="/chats" element={<Chat />} />
          </Routes>
        </main>
      </div>
      </HistoryRouter>
    </GlobalProvider>
    </ThemeProvider>
  )
}

export default App
