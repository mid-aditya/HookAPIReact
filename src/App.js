import './App.css';
import {getMovieList, searchMovie} from "./api"
import {useEffect, useState} from "react"

const App = () => {
const [popularMovies, setPopularMovies] = useState([])

useEffect(() => {
  getMovieList().then((result) => {
    setPopularMovies(result)
  })
}, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
          <div className="mov-wrapper" key={1}>
            <div className="mov-title">{movie.title}</div>
              <img className="mov-img" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title}/>
                <div className="mov-date">release :{movie.release_date}</div>
                  <div className="mov-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async(q) =>{
    if (q.length > 3) {
      const query = await searchMovie(q)
    setPopularMovies(query.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>BOXIES 123</h1>
          <input 
          placeholder="cari film" 
          className="mov-search"
          onChange={({ target }) => search(target.value)}
          />
        <div className="mov-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
