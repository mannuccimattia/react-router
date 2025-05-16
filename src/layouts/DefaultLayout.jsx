import HeadNavbar from "../components/HeadNavbar"

import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <>
      <HeadNavbar />

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
