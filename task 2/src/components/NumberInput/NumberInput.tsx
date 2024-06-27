import './NumberInput.css'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function NumberInput({ chargePoints, setChargePoints }) {

  return (
    <div className="number-wrap">
      <input type="number" value={chargePoints} onChange={(e)=>setChargePoints(Number(e.target.value))} />
      <div className="button-wrap">
        <button onClick={() => setChargePoints((prevCharge) => prevCharge + 1)}>
          <MdKeyboardArrowUp size={28} color="grey" />
        </button>
        <button onClick={() => setChargePoints((prevCharge) => prevCharge + 1)}>
          <MdKeyboardArrowDown size={28} color="grey" />
        </button>
      </div>
    </div>
  );
}
