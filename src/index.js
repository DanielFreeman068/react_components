import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import Profile from './pages/profile-card.jsx'
import Footer from './pages/footer.jsx'
import Gallery from './pages/gallery.jsx'
// Import necessary components for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//routing system configuration
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/profile-card', element: <Profile /> },
  { path: '/footer', element: <Footer /> },
  { path: '/gallery', element: <Gallery /> },
  // Add more routes as needed
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routing implemented */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);