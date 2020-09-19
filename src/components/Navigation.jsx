import React from 'react';
import './../styles/navigation.css';

const NavItem = props => {
//   const styles = href="./../navigation.css"
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"
          onClick={(e) => {this.showDropdown(e)}}>
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-transparent bg-transparent transparent">
        <a className="navbar-brand" href="/"><strong>Welcome "USER"</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem path="/" name="Home" />
            <NavItem path="/login" name="Login" />
              <NavDropdown name="Competitive Stats">
                <a className="dropdown-item" href="/profile+agent">View Agent Stats</a>
                <a className="dropdown-item" href="/profile+weapon">View Weapon Stats</a>
                <a className="dropdown-item" href="/profile+map">View Map Stats</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/profile+overall">View Overall Stats</a>
              </NavDropdown>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navigation;