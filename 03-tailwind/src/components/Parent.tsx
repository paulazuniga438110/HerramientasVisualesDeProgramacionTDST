import { Child } from "./Child"

interface ParentProps {
  name: string
  age: number
}

export const Parent = ({ name, age }: ParentProps) => {
  return (
    <div>
      <h1>Parent</h1>
      <div>
        <Child name={name} age={age} />
      </div>
    </div>
  )
}


