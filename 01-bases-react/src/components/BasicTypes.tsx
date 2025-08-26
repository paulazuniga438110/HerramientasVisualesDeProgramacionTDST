import React from 'react'

const BasicTypes = () => {
const name: string = "Víctor";
   const age: number = 28;
   const isActive: boolean = true;
 
  return (
    <>

    <div>Hello world</div>
    
    <div>
      {" "+name}
    </div>
    <div>
      {" "+age}
    </div>
    <div>
      {" "+isActive}
    </div>


    </>
  )
}

export default BasicTypes
