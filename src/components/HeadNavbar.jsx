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
      <header>
        <nav>
          <ul>
            {links.map(link => (
              <li key={link.id}>
                <NavLink to={link.path}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default HeadNavbar
