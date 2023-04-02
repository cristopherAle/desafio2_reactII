import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import FavoritePage from './pages/FavoritePage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';


const urlJson  = "./json/data.json";


function App() {

    const [fotos, setFotos] = useState([]);
  
    useEffect(()=>{
      getPhotos()
    }, [])
  
    const getPhotos = async()=>{
    const response = await fetch(urlJson)
    console.log(response)
    const data = await response.json()
    setFotos(data.photos)
    }


  return (
    <div>
 
      <NavBar />
      <div className='container'>
          <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='home' element={<HomePage/>}/>
                <Route path='favorite' element={<FavoritePage/>}/>
                <Route path='*' element={<NotFound/>}/> 
                
          </Routes>
      </div>
   </div>
  );
}

export default App;
