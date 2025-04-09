import { Button, Col, Row } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

const Footer = function () {
  return (
    <>
      <Row
        className="justify-content-center py-5"
        style={{
          color: "#f5f5f1",
          backgroundColor: "#221F1F",
        }}
      >
        <Col xs={6}>
          <Row>
            <Col className="mb-2">
              <i
                className="bi bi-facebook footer-icon me-2"
                style={{
                  fontSize: "1.2em",
                  color: "#838383",
                }}
              ></i>
              <i
                className={"bi bi-instagram footer-icon me-2"}
                style={{
                  fontSize: "1.2em",
                  color: "#838383",
                }}
              ></i>
              <i
                className={"bi bi-twitter-x footer-icon me-2"}
                ùstyle={{
                  fontSize: "1.2em",
                  color: "#838383",
                }}
              ></i>
              <i
                className={"bi bi-youtube footer-icon"}
                style={{
                  fontSize: "1.2em",
                  color: "#838383",
                }}
              ></i>
            </Col>
          </Row>
          <Row className=" row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <Col>
              <Row>
                <Col style={{ fontSize: "0.8em" }}>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Audio and Subtitles
                    </a>
                  </p>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Media Center
                    </a>
                  </p>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Privacy
                    </a>
                  </p>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col style={{ fontSize: "0.8em" }}>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Audio Description
                    </a>
                  </p>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Investor Relations
                    </a>
                  </p>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col style={{ fontSize: "0.8em" }}>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Help Center
                    </a>
                  </p>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Jobs
                    </a>
                  </p>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col style={{ fontSize: "0.8em" }}>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Gift Cards
                    </a>
                  </p>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Terms of Use
                    </a>
                  </p>
                  <p style={{ marginBottom: "0.3em", color: " #838383" }}>
                    <a
                      href="#"
                      alt="footer link"
                      style={{ textDecoration: "none", color: "#838383" }}
                    >
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button
                className="btn-sm rounded-0 mt-3"
                style={{
                  color: "#838383",
                  borderColor: "#838383",
                  backgroundColor: "#221F1F",
                }}
              >
                Servide Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              className="mb-2 mt-2"
              style={{ color: "#838383", fontSize: "0.6em" }}
            >
              © 1997-2023 Netflix, Inc.
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default Footer
