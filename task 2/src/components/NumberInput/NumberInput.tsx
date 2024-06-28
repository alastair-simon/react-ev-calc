import "./NumberInput.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useNumInput } from "../../hooks/useNumInput";
import { SetStateAction } from "react";

interface props {
  value: number;
  setValue: React.Dispatch<SetStateAction<number>>;
  max: number;
  min: number;
}

export default function NumberInput({ value, setValue, max, min }:props) {
  const { handleInputChange, increment, decrement, inputValue } = useNumInput(value, setValue, max);

  return (
    <div className="number-wrap">
      <input
        type="number"
        min={min}
        max={max}
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="button-wrap">
        <button onClick={increment}>
          <MdKeyboardArrowUp size={26} color="#E2E2E2" className="arrow" />
        </button>
        <button onClick={decrement}>
          <MdKeyboardArrowDown size={26} color="#E2E2E2" className="arrow" />
        </button>
      </div>
    </div>
  );
}
