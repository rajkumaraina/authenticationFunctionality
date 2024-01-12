import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-Container">
    <ul className="unordered">
      <Link to="/" className="linkItems">
        <li>Home</li>
      </Link>
      <Link to="/about" className="linkItems">
        <li>About</li>
      </Link>
    </ul>
  </div>
)
export default Header
