import { createBrowserRouter } from "react-router-dom"
import HomeLayout from "../components/Layout/HomeLayout"
import Landingpage from "../Pages/Landingpage"

export const Elements = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Landingpage />
            }
        ]
    }
])