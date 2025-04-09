import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Genres from "./components/Genres"
import Saga from "./components/Saga"
import NotFound from "./components/NotFound"
import { useState } from "react"

import { BrowserRouter, Routes, Route, Router } from "react-router-dom"

function App() {
  const [film, setFilm] = useState({})

  const changeAppState = (sagaName, value) => {
    setFilm((prev) => ({
      ...prev,
      [sagaName]: value,
    }))
  }

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <section style={{ backgroundColor: "#221f1f" }}>
        <Genres />
      </section>
      <main style={{ backgroundColor: "#221f1f" }}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Saga
                  saga="spider-man"
                  metodoPerCambiareAppState={changeAppState}
                  valoreDiFilm={film["spider-man"]}
                />

                <Saga
                  saga="harry-potter"
                  metodoPerCambiareAppState={changeAppState}
                  valoreDiFilm={film["harry-potter"]}
                />
                <Saga
                  saga="avengers"
                  metodoPerCambiareAppState={changeAppState}
                  valoreDiFilm={film["avengers"]}
                />
                <Saga
                  saga="lord-of-the-rings"
                  metodoPerCambiareAppState={changeAppState}
                  valoreDiFilm={film["lord-of-the-rings"]}
                />
              </div>
            }
          />
          <Route path="*" element={<NotFound valoreDiFilm={film} />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
