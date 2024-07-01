import "./NumberInput.css";
import { SetStateAction } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useNumInput } from "../../hooks/useNumInput";

interface props {
  value: number;
  setValue: React.Dispatch<SetStateAction<number>>;
  max: number;
  min: number;
  initialVal:number
}

export default function NumberInput({ value, setValue, max, min, initialVal }:props) {
  const { handleInputChange, increment, decrement, inputValue, handleBlur, handleKeyDown, error } = useNumInput(value, setValue, max, min, initialVal);

  return (
    <div>
      <div className="number-input">
        <button onClick={decrement}>
          <FaMinus size={20} color="#AEAEAE" />
        </button>
        <input
          type="number"
          min={min}
          max={max}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
        <button onClick={increment}>
          <FaPlus size={20} color="#AEAEAE" />
        </button>
      </div>
      {error && <p id="validation" className="inline-block pl-2 pr-2 pt-1 pb-1 mt-1 rounded-md bg-red-100 text-red-500 text-xs">Number must be: {min} - {max}</p>}
    </div>
  );
}
