import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Friends from './Pages/Friends/Friends';
import FriendsDetails from './Pages/Friends/FriendsDetails';
import Home from './Pages/Home/Home';
import Products from './Pages/Product/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/contact', element: <Contact></Contact> },
        { path: '/product', element: <Products></Products> },
        {
          path: '/friends', element: <Friends></Friends>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        },
        {
          path: '/friend/:friendId',
          element: <FriendsDetails></FriendsDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          }
        }
      ]

    },
    {
      path: '*',
      element: <div><h3>This Route Dose Not Match</h3></div>
    }

  ])
  return (
    <div>
      <RouterProvider
        router={router}></RouterProvider>

    </div>
  );
}

export default App;
