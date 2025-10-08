import './App.css'
import { Counter } from './components/Counter'
import { Parent } from './components/Parent'

function App() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1 className="text-4xl mb-5">Ejercicio Props</h1>
      <Counter />
      <Parent name="Pepito" age={20} />
    </div>
  )
}

export default App






