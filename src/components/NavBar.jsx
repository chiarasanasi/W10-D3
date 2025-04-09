import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap-icons/font/bootstrap-icons.css"

const NavBar = function () {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="../public/img/netflix_logo.png"
            width="100px"
            height="55px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  mb-2 mb-lg-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center text-white">
            <i
              className="bi bi-search icons mx-3"
              style={{
                marginLeft: " 0.8em",
                marginRight: "0.8em",
                fontSize: "1.2em",
                color: "#f5f5f1",
              }}
            ></i>
            <div id="kids" className="fw-bold">
              <img
                src={"../public/img/chiara.png"}
                style={{ height: "35px" }}
              />
            </div>
            <i
              className="bi bi-bell icons  mx-3"
              style={{
                marginLeft: " 0.8em",
                marginRight: "0.8em",
                fontSize: "1.2em",
                color: "#f5f5f1",
              }}
            ></i>
            <i
              className="bi bi-person-circle icons  mx-3"
              style={{
                marginLeft: " 0.8em",
                marginRight: "0.8em",
                fontSize: "1.2em",
                color: "#f5f5f1",
              }}
            ></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
