import logo from "../images/logo.svg"
import {Link, Route} from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <Route path="/">
        <Link to="/">
          <img className="header__logo" src={logo} alt="dog"/>
        </Link>
      </Route>
      <div className="header__links">
        <Route path="/">
          <Link to="/ball" className="header__link">
            8ball
          </Link>
        </Route>
        <Route path="/">
          <Link to="/fact" className="header__link">
            Facts
          </Link>
        </Route>
      </div>
    </header>
  );
};

export default Header;