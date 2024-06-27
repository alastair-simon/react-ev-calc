import "./NumberInput.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

export default function NumberInput({ chargePoints, setChargePoints }) {
  const [inputValue, setInputValue] = useState(chargePoints);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setChargePoints(value === "" ? 0 : Number(value));
  };

  const increment = () => {
    const newValue = chargePoints + 1;
    setInputValue(newValue);
    setChargePoints(newValue);
  };

  const decrement = () => {
    const newValue = chargePoints - 1;
    setInputValue(newValue);
    setChargePoints(newValue);
  };

  return (
    <div className="number-wrap">
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <div className="button-wrap">
        <button onClick={increment}>
          <MdKeyboardArrowUp size={26} color="grey" />
        </button>
        <button onClick={decrement}>
          <MdKeyboardArrowDown size={26} color="grey" />
        </button>
      </div>
    </div>
  );
}
