import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    isMenuSelected: false,
  }

  isMenuClicked = () => {
    this.setState(prevState => ({isMenuSelected: !prevState.isMenuSelected}))
  }

  closeMenu = () => {
    this.setState(prevState => ({isMenuSelected: !prevState.isMenuSelected}))
  }

  render() {
    const {isMenuSelected} = this.state
    const dropDownMenu = isMenuSelected
      ? 'mobile-container-display'
      : 'mobile-container-display-none'
    return (
      <div>
        <nav className="nav-bar">
          <Link to="/" className="nav-link">
            <h1 className="heading">
              COVID19<span style={{color: 'blue'}}>INDIA</span>
            </h1>
          </Link>
          <div className="nav-item-container-large">
            <Link to="/" className="nav-link">
              <p className="nav-item">Home</p>
            </Link>
            <Link to="/about" className="nav-link">
              <p className="nav-item">About</p>
            </Link>
          </div>

          <div className="nav-item-container-small">
            <button
              type="button"
              className="menu-icon"
              onClick={this.isMenuClicked}
            >
              <img
                src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1625901545/raaj/add-to-queue_1_s0eelr.svg"
                alt="react"
              />
            </button>
          </div>
        </nav>

        <div className={dropDownMenu}>
          <div className="small-nav-item-container">
            <Link to="/" className="nav-link">
              <p className="nav-item">Home</p>
            </Link>
            <Link to="/about" className="nav-link">
              <p className="nav-item">About</p>
            </Link>
            <button
              type="button"
              className="menu-icon"
              onClick={this.closeMenu}
            >
              <img
                src="https://res.cloudinary.com/dfh6ltyku/image/upload/v1625932123/raaj/Solid_qxsrzc.svg"
                alt="close"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
