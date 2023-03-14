import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import PokemonInfo from "./pages/PokemonInfo"; 
import About from "./pages/About";
import { Routes, Route, Link} from "react-router-dom";
const App = () =>  {
  const [ theme, setTheme ] = useState();
  // const [ pokemonList, setPokemonList ] = useState([]);
  // const [ offset, setOffset ] = useState(5);
  // const [ limit, setLimit ] = useState(5);
  // const [ page, setPage ] = useState(1);
  // const [ pageCount, setPageCount ] = useState();
  const toogleTheme  = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }
  // const changePage = (type) => {
  //   if (type === 'next'){
  //     if(page = pageCount) return
  //       setOffset(value => value+=limit);
  //       setPage(value => value+=1);
  //       console.log(page)
  //   }else{
  //     if (offset <= limit) return
  //       setOffset(value => value-=limit);
  //       setPage(value => value-=1);
  //   }
  // }

  // useEffect(() => {
  //   fetchPokemons(limit,offset).then((data) => {setPokemonList(data.results); setPageCount(Math.ceil(data.count / limit))})
  // }, [offset,limit]);
  // useEffect(()=> console.log(limit), [limit])
  
  return (
    <div className={`app ${theme}`}>
      <header id="header">
        <Link to='/' className="navLink">Main</Link>
        <Link to='/about' className="navLink">About</Link>
        <button
          onClick={toogleTheme}
          className="button">
            Change Theme
        </button>
      </header>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/pokemon/:id" element={<PokemonInfo/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;