import { NavLink } from "react-router-dom"

const links = [
  {
    id: 1,
    path: "/",
    label: "Homepage"
  },
  {
    id: 2,
    path: "/about",
    label: "About"
  },
  {
    id: 3,
    path: "/products",
    label: "Products"
  }
]

const HeadNavbar = () => {
  return (
    <>
      <header className="container-fluid bg-body-secondary">
        <nav>
          <div className="row d-flex justify-content-center align-item-center p-3">
            {links.map(link => (
              <div key={link.id} className="col-1 text-center nav-item">
                <NavLink to={link.path} className="nav-link">
                  {link.label}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeadNavbar
