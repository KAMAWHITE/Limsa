import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Works from "./Pages/Works";
import Prices from "./Pages/Prices";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/portfolio',
                element: <Works />
            },
            {
                path: '/pricing',
                element: <Prices />
            }
        ]
    }
])