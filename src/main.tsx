import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./about";
import App from "./App";
import Home from "./Home";
import Quiz from "./Quiz";

const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routerJSX} />
  </React.StrictMode>
);
