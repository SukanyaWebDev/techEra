import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <Link to="/">
    <nav style={{backgroundColor: '#e8e8e8'}}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
        alt="website logo"
      />
    </nav>
  </Link>
)

export default Header
