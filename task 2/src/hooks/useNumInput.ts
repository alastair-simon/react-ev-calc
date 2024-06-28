import { useState, useEffect, Dispatch, SetStateAction } from "react";

type SetValueFunction = Dispatch<SetStateAction<number>>;

export function useNumInput(
  value: number,
  setValue: SetValueFunction,
  max: number,
  min: number
) {
  const [inputValue, setInputValue] = useState<number>(value);

  // Keep input in sync with value
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Handle user typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(e.target.value);
    // Check input is number
    if (!isNaN(newValue)) {
      newValue = Math.min(Math.max(newValue, min), max);
    } else {
      newValue = value;
    }
    setInputValue(newValue);
    setValue(Math.max(newValue, min)); 
  };

  // Increment the number
  const increment = () => {
    const newValue = value + 1;
    // Check value is not above max
    if (newValue <= max) {
      setInputValue(newValue);
      setValue(newValue);
    }
  };

  // Decrement the number
  const decrement = () => {
    const newValue = value - 1;
    // Check value is not below min
    if (newValue >= min) {
      setInputValue(newValue);
      setValue(newValue);
    } else {
      setInputValue(min);
      setValue(min);
    }
  };

  return { handleInputChange, increment, decrement, inputValue };
}
