import { Outlet } from "react-router-dom"
import { Navbar } from "../../ui"

export const HeroesRoot = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
