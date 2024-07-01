import { useState, useEffect, Dispatch, SetStateAction } from "react";

type SetValueFunction = Dispatch<SetStateAction<number>>;

export function useNumInput(
  value: number,
  setValue: SetValueFunction,
  max: number,
  min: number,
  initialVal: number
) {
  const [inputValue, setInputValue] = useState<string>(value.toString());

  // Keep input in sync with value
  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  // Handle user typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    setInputValue(newValue);
  };

  // Handle enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleBlur(); // Call the handleBlur function on Enter key press
    }
  };

  // Handle blur
  const handleBlur = () => {
    const numValue = Number(inputValue);
    if (
      inputValue === "" ||
      inputValue.includes("-") ||
      inputValue.toLowerCase().includes("e") ||
      inputValue === "0"
    ) {
      setInputValue(initialVal.toString());
      return;
    }
    if (numValue >= min && numValue <= max) {
      setValue(Number(inputValue));
    } else {
      setInputValue(initialVal.toString());
    }
  };

  // Increment the number
  const increment = () => {
    const newValue = value + 1;
    // Check value is not above max
    if (newValue <= max) {
      setInputValue(newValue.toString());
      setValue(newValue);
    }
  };

  // Decrement the number
  const decrement = () => {
    const newValue = value - 1;
    if (newValue >= min) {
      setInputValue(newValue.toString());
      setValue(newValue);
    } else {
      setInputValue(min.toString());
      setValue(min);
    }
  };

  return {
    handleInputChange,
    increment,
    decrement,
    inputValue,
    handleBlur,
    handleKeyDown,
  };
}
