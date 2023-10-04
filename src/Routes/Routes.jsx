import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";




const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/career",
                element: <Career/>
            }
        ]
    }
])

export default router