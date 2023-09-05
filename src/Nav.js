import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/cart">
        <button>Cart </button>
      </Link>
    </div>
  );
};

export default Nav;
