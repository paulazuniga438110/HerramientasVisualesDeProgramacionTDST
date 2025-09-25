import './App.css'

//import Counter from './components/Counter'
import { Lista } from './components/Lista'


function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center h-svh w-svw'>
        <h1 className="text-4xl mb-5">Contador </h1>
      {/*<Counter />*/}
     <Lista/>    
      </div>
    </>
  )
}

export default App
