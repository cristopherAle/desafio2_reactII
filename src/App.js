import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import { MyContext } from './MyContext';
import FavoritePage from './pages/FavoritePage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';


const urlApi = 'https://rickandmortyapi.com/api/character'

function App() {

  const [dataRickAndMorty, setDataRickAndMorty] = useState([])

    useEffect(()=>{
        getRickAndMorty()
    }, [])
    
      const getRickAndMorty = async()=>{
      const response = await fetch(urlApi)
      //const data = await response.json()
      let { results }= await response.json()
         const data = results.map((dat) => ({
            id: dat.id, 
            src: dat.image, 
            name: dat.name,
            favorito: false
            
      }))
      setDataRickAndMorty(data) 

    }
  return (
    <div>
 
      <NavBar />
      <div>
        
        <MyContext.Provider value={{dataRickAndMorty, setDataRickAndMorty}}>
          <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='home' element={<HomePage/>}/>
                <Route path='favorite' element={<FavoritePage/>}/>
                <Route path='*' element={<NotFound/>}/> 
                
          </Routes>
        </MyContext.Provider>
      </div>
   </div>
  );
}

export default App;
