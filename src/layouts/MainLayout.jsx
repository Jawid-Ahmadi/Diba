import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import CartModal from '../components/Cart'
import { createContext, useState } from "react"
export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [active, setActive] = useState(false)
  const [items,setItems] = useState(0)
  return (
    <ModalContext.Provider value={{ active, setActive ,items,setItems }}>
      {children}
    </ModalContext.Provider>
  )
}
function MainLayout() {
  return (
    <>
      <ModalContextProvider>
        <CartModal />
        <Navbar />
      </ModalContextProvider>
      <Outlet />
    </>
  )
}

export default MainLayout