import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
const router = createBrowserRouter( 
   createRouterFromElement( 

<Route path="/" element={App}> 
   <Route index element={<div className='App'></div>} /> 
   <Route path="quiz" element={} /> 
   <Route path="result" element={} /> 
</Route>
)
);

ReactDOM.createRoot(document.getElementById('root') as 
HTMLElement).render( 
   <React.StrictMode>
      <RouterProvider router={router}/> 
      <App/> 
      </React.StrictMode>,
      )