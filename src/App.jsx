import { CssBaseline } from "@mui/material"
import TodoList from "./components/TodoList"
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
     <CssBaseline />
     <Navbar />
     <TodoList />
    </>
  )
}

export default App
