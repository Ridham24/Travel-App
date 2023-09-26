import './Navbar.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { SiYourtraveldottv } from 'react-icons/si'
const Navbar = () => {
  return (
    <section className="NavbarFull">
      <header className="flex-container">
        <ul className="items">
          <li>
            <Link to="" className="title">
              <h1>
                <SiYourtraveldottv className="icon" />
                Travel-App
              </h1>
            </Link>
          </li>
          <section className="list">
            <li>
              <Link to="/packages">
                <h3>Packages</h3>
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <h3>Shop</h3>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <h3>About</h3>
              </Link>
            </li>
            <li>
              <Link to="/pages">
                <h3>Pages</h3>
              </Link>
            </li>
            <li>
              <Link to="/news">
                <h3>News</h3>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <h3>Contact</h3>
              </Link>
            </li>
            <li>
              <button className="btn">
                <h3>Book It</h3>
              </button>
            </li>
          </section>
        </ul>
      </header>
    </section>
  )
}
export default Navbar
