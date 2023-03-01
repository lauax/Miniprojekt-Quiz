import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const router = createBrowserRouter(
  createRouterFromElement(
    <Route>
        <Route index element={} />
        <Route path="quiz" element={} />
        <Route path="result" element={} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
