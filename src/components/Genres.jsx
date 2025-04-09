import {
  ButtonGroup,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap"

const Genres = function () {
  return (
    <>
      <Container className=" px-4">
        <div className="d-flex justify-content-sm-between justify-content-center">
          <div className="d-flex">
            <h2 className="text-white">TV Shows</h2>
            <ButtonGroup role={"group"}>
              <div className="dropdown ms-4 mt-1">
                <Dropdown>
                  <Dropdown.Toggle
                    as="button"
                    className="btn btn-secondary rounded-0"
                    style={{
                      color: "#838383",
                      borderColor: "#838383",
                      backgroundColor: "#221F1F",
                    }}
                  >
                    Genres
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Comedy</Dropdown.Item>
                    <Dropdown.Item href="#">Drama</Dropdown.Item>
                    <Dropdown.Item href="#">Thriller</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </ButtonGroup>
          </div>
        </div>
      </Container>
    </>
  )
}
export default Genres
