import { Outlet } from "react-router-dom"
import { Header } from "../Static"
import {Footer} from "../Static"

const HomeLayout = () => {
  return (
      <div>
          <Header />
          <Outlet />
          <Footer />
    </div>
  )
}

export default HomeLayout