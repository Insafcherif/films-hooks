
import './App.css';
import Header from './Components/Header.js';
import List from './Components/List.js';
import {movies} from './Data.js';
import {useState} from 'react';

function App() {
  const [films, setFilms] = useState(movies)
  const [caracterupdate, setCaracter]=useState('')
  const [rate, setRate] = useState(0);
  const addNewMovie = (movie) => {
    setFilms([...films, movie]);
  };
  


  return (
    <div className="App" >
      <Header setFilms={setFilms} setCaracter={setCaracter} setRate={setRate} addNewMovie={addNewMovie} />
      <List className="container-fluid" films={films} caracterupdate={caracterupdate} rate={rate} setFilms={setFilms}   />
    </div>
  );
}

export default App;
