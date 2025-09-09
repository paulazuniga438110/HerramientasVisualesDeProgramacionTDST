import React from 'react'

export const Pets = () => {

const Pets =[

    "Perro",
    "Gato",
    "Panda",
    "Serpiente",
    "Mono",

   ];    

/*  Un div es un cuadro el cual se puede colocar en diferentes lugares de la panntalla  */
  return (
  <>
  <h2>Imprime la lista de nombres con<span>Map</span></h2>
  {Pets.map(
      (pet, index)=><div key={index}>
        {pet}
        </div>
  )}
   
  <h2>Imprime todos los elementos de la lista separados</h2>
  {Pets.join(", ")}
  </>
  )
}

export default Pets
