import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { default as About } from "./components/about";
import App from "./components/App";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Socials from "./components/Socials";

const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="quiz" element={<About />} />
      <Route path="about" element={<Quiz />} />
      <Route path="socials" element={<Socials />} />
    </Route>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routerJSX} />
  </React.StrictMode>
);
