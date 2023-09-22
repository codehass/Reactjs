import { NaveLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NaveLink to="/">Home</NaveLink>
        </li>
        <li>
          <NaveLink to="/pricing">Pricing</NaveLink>
        </li>
        <li>
          <NaveLink to="/product">Product</NaveLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
