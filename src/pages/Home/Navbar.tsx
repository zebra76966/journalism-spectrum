import classes from './Home.module.css'
import logo from './nlLogo.png'
import { useState } from 'react'

function Navbar() {
  const [toggler, setToggler] = useState(false)
  let chkToggle = toggler ? classes.navLinksToggle : ''

  return (
    <nav>
      <img src={logo} className={classes.navBrand} />
      <div>
        <div>
          <button
            className={classes.navToggler}
            onClick={() => setToggler((ini) => !ini)}
          >
            <i className='fa fa-bars' />
          </button>

          <div className={`${classes.navLinks} ${chkToggle}`}>
            <a href='#'>Home</a>
            <a href='#'>About us</a>
            <a href='#'>Contact us</a>
            <a href='#'>Login</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
