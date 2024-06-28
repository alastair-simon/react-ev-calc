import "./NumberInput.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useNumInput } from "../../hooks/useNumInput";


export default function NumberInput({ value, setValue }) {

  const { handleInputChange, increment, decrement, inputValue } = useNumInput(value, setValue)

  return (
    <div className="number-wrap">
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <div className="button-wrap">
        <button onClick={increment}>
          <MdKeyboardArrowUp size={26} color="black" className="arrow" />
        </button>
        <button onClick={decrement}>
          <MdKeyboardArrowDown size={26} color="black" className="arrow" />
        </button>
      </div>
    </div>
  );
}
