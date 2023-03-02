import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider
} from "react-router-dom";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);

const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path ='/' element ={<App/>} />
      <Route path = 'Quiz' element={<div> </div>} />
      <Route path = 'Score' element={<div> </div>} />
    </Route>
  )
);



createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode> 

    <RouterProvider router={routerJSX} />
  </React.StrictMode>
);