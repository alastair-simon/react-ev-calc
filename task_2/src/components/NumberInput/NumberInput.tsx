import "./NumberInput.css";
import { SetStateAction } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
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
    <div className="number-wrap">
      <input
        type="number"
        min={min}
        max={max}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
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
