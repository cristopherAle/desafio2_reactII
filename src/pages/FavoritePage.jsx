import React, { useContext } from 'react'
import Heart from '../component/Heart'
import { MyContext } from '../MyContext'


const FavoritePage = () => {

  const {dataRickAndMorty, setDataRickAndMorty} = useContext(MyContext)
  
   const handleClick = (id)=>{
     const personajeIndex = dataRickAndMorty.findIndex((f) => f.id === id);
    dataRickAndMorty[personajeIndex].favorito = !dataRickAndMorty[personajeIndex].favorito;
  
    setDataRickAndMorty([...dataRickAndMorty]);
  } 
return (
    <div>
        <h2>Favorite Page</h2>
        <div className='galeria grid-columns-5 p-3'>
            {dataRickAndMorty.map(personaje=>personaje.favorito && (<div
              onClick={() => handleClick(personaje.id)}
              className="foto"
              key={personaje.id}
              style={{ backgroundImage: `url(${personaje.src})`}}
        >
            <Heart filled={personaje.favorito} />
            </div>
        ))}
        </div>
    </div>
    )
}

export default FavoritePage
