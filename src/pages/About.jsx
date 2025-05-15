import { NavLink } from "react-router-dom"
import HeadNavbar from '../components/HeadNavbar'

const About = () => {
  return (
    <>
      <HeadNavbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>About Us</h1>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default About
