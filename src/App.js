import Movieitem from './components/Movieitem';
import {useState , useEffect} from 'react';
import Filter from './components/Filter';
import Pagebtn from './components/Pagebtn';
import {motion ,AnimatePresence} from 'framer-motion'


function App() {
  
  const[movie ,setMovie] = useState([]);
  const[page , setPage] = useState(1);
  const[genre,setGenre] = useState(0);
  const[filtered,setFiltered] = useState([]);
  
    useEffect(
      function () {
        let getpopularmovie = async function () {
          const popularmovie = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=${page}`
          );
          const popularmovielist = await popularmovie.json();

          setMovie(popularmovielist.results);

          if (genre === 0) {
            setFiltered(popularmovielist.results);
          } else {
            let filteredmovie = popularmovielist.results.filter((item) => {
              return item.genre_ids.includes(genre);
            });
            setFiltered(filteredmovie);
          }
        };
        getpopularmovie();
      },
      [genre, page]
    );

    const nextHandler = () => {
      setPage(page + 1);
    };

    const prevHandler = () => {
      setPage(page - 1);
    };

    return (
      <div className="container">
        <Filter activegenre={genre} setactivegenre={setGenre} />
        <motion.div layout className="row">
          <AnimatePresence>
            {filtered?.map((pMovie) => {
              return <Movieitem movie={pMovie} key={pMovie.id} />;
            })}
          </AnimatePresence>
        </motion.div>
        <Pagebtn nextpage={nextHandler} prevpage={prevHandler} />
      </div>
    );
}

export default App;
