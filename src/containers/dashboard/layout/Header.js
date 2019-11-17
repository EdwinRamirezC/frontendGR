import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      active: false,
    };
  }

  toggleAvatar() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Tweeter</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link to='/' className="nav-link">Tweets</Link></li>
              <li className="nav-item"><Link to='/about' className="nav-link">About</Link></li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            </form>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item dropdown nav-button">
                <span className="nav-link dropdown-toggle" onClick={() => {this.toggleAvatar()}} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  User
                </span>
                <div className={this.state.active ? 'dropdown-menu show': 'dropdown-menu'} aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">Perfil</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">Salir</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header