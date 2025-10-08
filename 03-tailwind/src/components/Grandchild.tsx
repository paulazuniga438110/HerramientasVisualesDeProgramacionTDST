interface Props {
  name: string
}

export const Grandchild = ({ name }: Props) => {
  return (
    <>
      <h1>GrandChild</h1>
      <div>{name}</div>
    </>
  )
}

