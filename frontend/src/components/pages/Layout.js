import { CssBaseline } from "@mui/material"
import { Outlet } from "react-router-dom"
import Navbar from '../header/Navbar'
import Footer from '../header/Footer'

const Layout = () => {
  return <>
        <CssBaseline />
        <Navbar/>
        <Outlet />
        <Footer />
    </>
  
}

export default Layout