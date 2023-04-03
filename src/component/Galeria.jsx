import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../MyContext'
import Heart from './Heart'

const Galeria = () => {
    const {dataRickAndMorty, setDataRickAndMorty} = useContext(MyContext)


    const handleClick = (id)=>{
      const personajeIndex = dataRickAndMorty.findIndex((f) => f.id === id);
      dataRickAndMorty[personajeIndex].favorito = !dataRickAndMorty[personajeIndex].favorito;
      setDataRickAndMorty([...dataRickAndMorty]);
    }
  return (
    <div className='galeria grid-columns-5 p-3'>
     
      {dataRickAndMorty.map(personaje =>(
        <div 
            onClick={() => {handleClick(personaje.id)} }
            //; favorite(personaje.id, personaje.src)
            className="foto" 
            key={personaje.id} 
            style={{backgroundImage:`url(${personaje.src})`}}
        >
            
            <Heart filled={personaje.favorito}   /> 
          
           
        </div>
        ))}
        
     
    </div>
  )
}

export default Galeria
