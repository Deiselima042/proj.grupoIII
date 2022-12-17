import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from './App'

import Catalogo from "./routes/Catalogo";
import Filme from "./routes/Filme";
import NovoFilme from "./routes/NovoFilme";
import EditarFilme from "./routes/EditarFilme";
import Resultado from "./routes/Resultado"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      
      {
        path: "/catalogo",
        element: <Catalogo />,
      },
      {
        path: "/filme/:id",
        element: <Filme />,
      },
      {
        path: "/novo",
        element: <NovoFilme />,
      },
      {
        path: "/filme/editar/:id",
        element: <EditarFilme />,
      },
      {
        path: "/busca/:busca",
        element: <Resultado />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
