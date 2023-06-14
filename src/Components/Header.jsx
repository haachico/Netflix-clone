import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <img src={logo} alt="Netflix logo" />

        <div>
          <Link>Home</Link>
          <Link>TV Shows</Link>
          <Link>Movies</Link>
          <Link>My List</Link>
        </div>

        <ImSearch />
      </nav>
    </div>
  );
};

export default Header;
