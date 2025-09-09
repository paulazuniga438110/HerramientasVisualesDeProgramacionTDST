import React, { useState } from 'react'



export const BasicTypes = () => {
   const name: string = "Víctor";
   const age: number = 28;
  //  const isActive: boolean = true;

   const [isActive, setIsActive] = useState(true)

   const names =[

    "Juan David",
    "Victor",
    "Jaime",
    "Nicolas",
    "Daniel",

   ];

   const user ={
/* Estructura de datos, tipo llave valor que lo quee hace es asignar un tipo de valor */
    name: "Paula",
    email: "pau@gmail.com",
    age: "19",
    role: "Estudiante",
    maritalStatus: "Divorciada",
    isActive: true
   }

  return (
    <>
     <div>BasicTypes</div>
     <h2>Constantes</h2>

     
     <ul>
      {/*ul>((li>(b+span))*3)*/}
      <li><b>name: </b><span>{name}</span></li>
                <li><b>age: </b><span>{age}</span></li>
                <li>
                    <b>isActive: </b>
                    <span>{isActive ?
                        "Usuario Activo" :
                        "Usuario Inactivo"}</span>
                </li>
     </ul>

      <button onClick={() => setIsActive(!isActive)}>
                {isActive ? "Desactivar" : "Activar"}
            </button>

            
                      

     {names[0]}

     <ul>

     {names.map(
      (name, index)=><li key={index}>
        {name}
      </li>
     )}

     <h2>Objetos literales</h2>
     {user.name}

     </ul>
    </>
  
  )
}

export default BasicTypes
