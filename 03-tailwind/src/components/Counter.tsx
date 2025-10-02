import { useCounter } from "../hooks/useCounter";
import { StyledButton } from "./StyledButton";

export const Counter = () => {
  const { count, increaseBy, reset } = useCounter(10);

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h3 className="text-center text-xl font-bold mb-4 text-purple-600">
        Counter: <span className="text-gray-800">{count}</span>
      </h3>

      <div className="flex justify-center gap-4">
        <StyledButton
          label="+1"
          color="bg-green-500"
          handleClick={() => increaseBy(1)}
        />
        <StyledButton
          label="-1"
          color="bg-red-500"
          handleClick={() => increaseBy(-1)}
        />
        <StyledButton
          label="Resetear"
          color="bg-blue-500"
          handleClick={reset}
        />
      </div>
    </div>
  );
};


