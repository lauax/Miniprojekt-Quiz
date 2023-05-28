import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { default as About } from "./components/about";
import App from "./components/App";
import Home from "./components/Home";
import Socials from "./components/Socials";

const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />

      <Route path="about" element={<About />} />
      <Route path="socials" element={<Socials />} />
    </Route>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routerJSX} />
  </React.StrictMode>,
  document.getElementById("root")
);
