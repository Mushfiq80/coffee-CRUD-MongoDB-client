import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App'
import CoffeeAdd from './components/CoffeeAdd';
import CoffeeUpdate from './components/CoffeeUpdate';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      loader: () => fetch('http://localhost:5000/coffee')
    },
    {
        path: "coffeeAdd",
        element: <CoffeeAdd />,
    },
    {
        path: "coffeeUpdate/:id",
        element: <CoffeeUpdate />,
        loader: ({params}) => fetch(`http://localhost:5000/Coffee/${params.id}`)
    }
    
  ]);

export default router;