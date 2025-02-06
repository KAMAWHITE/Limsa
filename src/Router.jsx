import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home"
import Services from "./Pages/Services"

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
            }
        ]
    }
])