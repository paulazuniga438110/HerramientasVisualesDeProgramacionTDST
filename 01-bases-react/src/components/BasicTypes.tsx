import React, { useState } from 'react'

export const BasicTypes = () => {
  let name: string = "Víctor";
  const [age, setAge] = useState(28);


  //let  isActive: boolean = true;
  const [isActive, setisActive] = useState(true);
  return (
    <>
      <h3>Basic Types</h3>
      {isActive == true ?
        <ul>
          <li>Nombre: {name}</li>
          <li>Edad: {age}</li>
        </ul> :
        <p>Usuario Inactivo</p>
      }
      <h2>Variable de estado age</h2>
      <button onClick={
        () => {
          setAge(29);
          console.log(`El valor de age es: ${age}`)
        }
      }>Modificar edad</button>

      <h2>Variable de estado activo</h2>
      <button onClick={
        () => {
          setisActive(!isActive);
          console.log(`El valor de age es: ${isActive}`)
        }
      }>Modificar Estado</button>
      <h1>maria</h1>
    </>


  )
}

export default BasicTypes
