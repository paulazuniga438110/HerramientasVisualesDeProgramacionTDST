import { useCounter } from "../hooks/useCounter";
import { StyledButton } from "./StyledButton";

export const Counter = () => {
  const { count, increaseBy, reset } = useCounter(10);

  return (
    <div className="max-w-sm mx-auto p-4 border rounded shadow-sm">
      <h3 className="text-center text-lg font-semibold mb-3">
        Counter <small className="text-gray-600">{count}</small>
      </h3>

      <div className="flex justify-center gap-3">
        <StyledButton label="+1" color="bg-green-500" handleClick={() => increaseBy(1)} />
        <StyledButton label="-1" color="bg-red-500" handleClick={() => increaseBy(-1)} />
        <div className="p-2">
          <button
            onClick={() => reset()}
            className="bg-blue-600 px-4 py-2 rounded text-white hover:opacity-90"
          >
            Resetear
          </button>
        </div>
      </div>
    </div>
  );
};


