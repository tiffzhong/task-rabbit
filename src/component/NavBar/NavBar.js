import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }


  toggler = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    return (
      <nav>

        <div className="logo">
          <Link to="/"> <div>Logo</div></Link>
        </div>
        <div className="sidelinks">
          <Link to="/how-it-works"><div>How it works</div></Link>
          <Link to="login"><div>Login</div></Link>
          <Link to="/create-tasker-profile"><div>Become a Tasker</div></Link>
        </div>
        <div className='menuButton-container'>
          <div className="menuButton"><button onClick={this.toggler}><i class="fas fa-bars"></i></button></div>
          <div className={this.state.toggle ? "shopDropdown" : "hideDropdown"}>
            <ul>
<<<<<<< HEAD
              <li><Link to="/">Home</Link></li>
              <li><Link to="/how-it-works">How it Works</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/create-tasker-profile">Become a Tasker</Link></li>
=======
              <Link to="/"><li>Home</li></Link>
              <Link to="/how-it-works"><li>How it works</li></Link>
              <Link to="/login"><li>Login</li></Link>
              <Link to="/create-tasker-profile"> <li>Become a Tasker</li></Link>
>>>>>>> navbar
            </ul>
          </div>
        </div>
      </nav>);
  }
}

export default NavBar;

