import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import ShopPage from './pages/ShopPage'
import BlogPage from './pages/BlogPage'
import ContactUsPage from './pages/ContactUsPage'
import LoginPage from './pages/LoginPage'
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/about' element={<AboutPage />}/>
    <Route path='*' element={<NotFoundPage />} />
    <Route path='/shop' element={<ShopPage />}/>
    <Route path='/blog' element={<BlogPage />}/>
    <Route path='/contact' element={<ContactUsPage />}/>
    <Route path='/login' element={<LoginPage />}/>
  </Route>
)
)

function App() {
  
  return <RouterProvider router={router}/>
}

export default App