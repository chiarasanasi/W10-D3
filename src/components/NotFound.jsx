import { Container, Alert } from "react-bootstrap"

const NotFound = function (props) {
  console.log(props.valoreDiFilm)
  if (props.valoreDiFilm.length === 0) {
    return (
      <>
        <Container className="pt-4">
          <Alert className="m-0  mx-2" variant="danger">
            <Alert.Heading>
              Oh No! Stai cercando una pagina che non esiste!
            </Alert.Heading>
            <p className="display-3 fw-fw-semibold"> ERROR 404.</p>
          </Alert>
        </Container>
      </>
    )
  }
}

export default NotFound
