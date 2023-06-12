import { RouterProvider } from "react-router-dom"
import { Elements } from "./Router/router"

const App = () => {
  return (
    <div>
      <RouterProvider router={Elements}/>
    </div>
  )
}

export default App