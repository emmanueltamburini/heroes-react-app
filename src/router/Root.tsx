import { Outlet } from "react-router-dom"
import { Navbar } from "../ui"

export const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  )
}
