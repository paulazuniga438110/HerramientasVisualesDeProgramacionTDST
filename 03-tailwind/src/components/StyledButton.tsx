import { useState } from "react";

interface Props {
  label: string;
  color: string; 
  handleClick: () => void;
}

export const StyledButton = ({ label, color, handleClick }: Props) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        disabled={isDisabled}
        onClick={handleClick}
        className={`${color} px-4 py-2 rounded-lg text-white font-medium shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {label}
      </button>

      <label className="flex items-center gap-2 text-sm text-gray-600">
        <input
          type="checkbox"
          checked={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
          className="w-4 h-4"
        />
        Deshabilitar
      </label>
    </div>
  );
};

export default StyledButton;
