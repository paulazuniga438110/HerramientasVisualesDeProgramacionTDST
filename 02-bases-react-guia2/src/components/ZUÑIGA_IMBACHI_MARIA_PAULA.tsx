import React from 'react'

export const Products = () => {

interface user {
    name?: string;   /*Singo de interogacion significa opcional */
    cantidad: number;
    valor: number;
    isActive: boolean; 
    
   }

   const users:user[] =[

    {
      name: "Manzana",
            cantidad: 10,
            valor: 1000,
            isActive: true
    },

    {
        name: "Fresas",
            cantidad: 30,
            valor: 3000,
            isActive: true
    }, 

    {
       name: "Pera",
            cantidad: 5,
            valor: 5000,
            isActive: true
    }
   ]

  return (
    <>
     <h2>Lista de productos</h2>
     <hr />

     {users.map(
                (value, index) => <div key={index}>
                    <div>{value.name}</div>
                    <div>{value.cantidad}</div>
                    <div>{value.valor}</div>
                    <div>{value.isActive}</div>
                    <hr />
                </div>
            )}

    </>
  )
}

