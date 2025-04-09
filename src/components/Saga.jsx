import { useEffect } from "react"
import { Container, Row, Spinner, Carousel } from "react-bootstrap"

const URL = `https://omdbapi.com/?apikey=9b744e8b&s=`

const Saga = function (props) {
  // const [film, setFilm] = useState([])

  useEffect(() => {
    getFilmData()
  }, [])

  const getFilmData = () => {
    fetch(URL + props.saga)
      .then((response) => {
        if (response.ok) {
          console.log(URL, `{FETCH GETFILMDATA di ${props.saga}`)
          return response.json()
        } else {
          throw new Error("Errore nella fetch getFilmData")
        }
      })
      .then((data) => {
        props.metodoPerCambiareAppState(props.saga, data.Search)
        // console.log(`State --> ${props.saga}`, data.Search)
        console.log("valoreDiFilm di", props.saga, props.valoreDiFilm)
      })
      .catch((err) => {
        console.log("errore", err)
      })
  }

  // DA METTERE IF DELL' alter not found

  if (props.valoreDiFilm && props.valoreDiFilm.length > 0) {
    return (
      <>
        <Container className="px-4 d-flex flex-column">
          <h4 className="my-3 text-white text-uppercase d-flex justify-content-sm-between justify-content-center mt-4">{`${props.saga}`}</h4>
          <div className="d-flex justify-content-between">
            <Row
            // className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"
            >
              <>
                <Carousel interval={null} className="custom-carousel">
                  <Carousel.Item>
                    <Row
                      className="g-1 row-cols-lg-6 row-cols-md-3
                      row-cols-sm-2 row-cols-1"
                    >
                      {props.valoreDiFilm.slice(0, 6).map((oneFilm) => {
                        if (oneFilm.Poster === "N/A") {
                          return null
                        }
                        // console.log("check")
                        return (
                          <img
                            key={oneFilm.imdbID}
                            className="img-fluid"
                            alt={`${oneFilm.Title}`}
                            src={`${oneFilm.Poster}`}
                          ></img>
                        )
                      })}
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row
                      className="g-1 row-cols-lg-6 row-cols-md-3
                      row-cols-sm-2 row-cols-1"
                    >
                      {props.valoreDiFilm.slice(4, 10).map((oneFilm) => {
                        if (oneFilm.Poster === "N/A") {
                          return null
                        }
                        // console.log("check")
                        return (
                          <img
                            key={oneFilm.imdbID}
                            className="img-fluid"
                            alt={`${oneFilm.Title}`}
                            src={`${oneFilm.Poster}`}
                          ></img>
                        )
                      })}
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </>
            </Row>
          </div>
        </Container>
      </>
    )
  } else {
    return (
      <Container className="px-4">
        <Spinner animation="border" variant="danger" />
      </Container>
    )
  }
}

export default Saga
