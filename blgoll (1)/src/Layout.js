import { Outlet, Link } from "react-router-dom";
IM
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">TAB1</Link>
          </li>
          <li>
            <Link to="/PLANS">TAB2</Link>
          </li>
          <li>
            <Link to="/DATA">TAB3</Link>
          </li>
          <li>
            <Link to="/DATA1">TAB4</Link>
          </li>
          <li>
            <Link to="/DATA2">TAB5</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
