import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from './App'

import Catalogo from "./routes/Catalogo";
import Filme from "./routes/Filme";
import NovoFilme from "./routes/NovoFilme";
import EditarFilme from "./routes/EditarFilme";
import Resultadobusca from "./routes/Resultadobusca"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      
      {
        path: "/todos_os_filmes",
        element: <Catalogo />,
      },
      {
        path: "/todos_os_filmes/:id",
        element: <Filme />,
      },
      {
        path: "/adicionar_filme",
        element: <NovoFilme />,
      },
      {
        path: "/editar_filme/:id",
        element: <EditarFilme />,
      },
      {
        path: "/busca/:busca",
        element: <Resultadobusca />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
