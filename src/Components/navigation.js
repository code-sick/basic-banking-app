import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <h className="bankName">Aragon's Bank</h>
      <ul className="nav">
        <Link to="./">
          <li className="button">Home</li>
        </Link>
        <Link to="/costumers">
          <li className="button">Get Started</li>
        </Link>
        <Link to="/transitions">
          <li className="button">Transition History</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navigation;
