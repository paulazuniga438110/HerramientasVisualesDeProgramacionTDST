import { Grandchild } from "./Grandchild"

interface Props {
  name: string
  age: number
}

export const Child = ({ name, age }: Props) => {
  return (
    <div>
      <h1>Child</h1>
      <div>Edad: {age}</div>
      <div>
        <Grandchild name={name} />
      </div>
    </div>
  )
}


