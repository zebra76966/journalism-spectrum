import classes from './Home.module.css'
import logo from './nlLogo.png'
import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

function Navbar() {
  const [toggler, setToggler] = useState(false)
  let chkToggle = toggler ? classes.navLinksToggle : ''

  return (
    <nav>
      <Link to='/journalism-spectrum/'>
        <img src={logo} className={classes.navBrand} />
      </Link>
      <div>
        <div>
          <button
            className={classes.navToggler}
            onClick={() => setToggler((ini) => !ini)}
          >
            <i className='fa fa-bars' />
          </button>
          <div className={`${classes.navLinks} ${chkToggle}`}>
            <Link to='/journalism-spectrum/' className={classes.links}>
              Home
            </Link>
            <Link to='/journalism-spectrum/vote' className={classes.links}>
              Vote
            </Link>
            <Link to='/journalism-spectrum/' className={classes.links}>
              Contact us
            </Link>
            <Link to='/journalism-spectrum/' className={classes.links}>
              Login
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  )
}

export default Navbar
