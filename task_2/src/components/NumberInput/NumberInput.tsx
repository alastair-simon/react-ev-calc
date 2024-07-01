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
  const { handleInputChange, increment, decrement, inputValue, handleBlur, handleKeyDown } = useNumInput(value, setValue, max, min, initialVal);

  return (
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
  );
}
