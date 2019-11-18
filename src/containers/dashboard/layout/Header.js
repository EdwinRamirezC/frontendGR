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
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <a className="navbar-brand col-4" href="/"><h1>Tweet Rating</h1></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link to='/' className="nav-link"> Buscar Tweets</Link></li>
              <li className="nav-item"><Link to='/tweets' className="nav-link">Tweets valorados</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header