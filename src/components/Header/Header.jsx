import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faGaugeSimple,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="sticky-top" sticky="top">
      <Container>
        <Link className="navbar-brand lg text-dark" to="/">
          <h2>
            <FontAwesomeIcon
              icon={faGaugeSimple}
              style={{ color: "#5398c2", marginRight: "5px" }}
            ></FontAwesomeIcon>{" "}
            Whistle
          </h2>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="navbar-nav m-2">
              <li className="nav-item h6 p-2">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item h6 p-2">
                <Link className="nav-link  " to="/cars">
                  Cars <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </Link>
              </li>
              <li className="nav-item h6 p-2">
                <Link className="nav-link  " to="/">
                  Gallery <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/post">
                  <button className="btn btn-outline-primary">
                    Create Post{" "}
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  </button>
                </Link>
              </li>
            </ul>
          </Nav>
          <Nav>
            <Link to="/login">
              <button
                className="btn btn-outline-dark m-3 rounded-pill"
                type="submit"
              >
                LogIn
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-dark rounded-pill  m-3" type="submit">
                Sign-Up
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
