import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { default as About } from "./about";
import App from "./App";
import Home from "./Home";
import Quiz from "./Quiz";

const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="quiz" element={<About/>} />
      <Route path="about" element={<Quiz />} />
    </Route>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routerJSX} />
  </React.StrictMode>
);
