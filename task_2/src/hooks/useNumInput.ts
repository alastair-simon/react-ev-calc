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
  const [error, setError] = useState<boolean>(false);

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
      handleBlur();
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
      setError(true);
      return;
    }
    if (numValue >= min && numValue <= max) {
      setValue(Number(inputValue));
      setError(false);
    } else {
      setInputValue(initialVal.toString());
      setError(true);
    }
  };

  // Increment the number
  const increment = () => {
    const newValue = Math.min(value + 1, max);
    setInputValue(newValue.toString());
    setValue(newValue);
    setError(false);
  };

  // Decrement the number
  const decrement = () => {
    const newValue = Math.max(value - 1, min);
    setInputValue(newValue.toString());
    setValue(newValue);
    setError(false);
  };

  return {
    handleInputChange,
    increment,
    decrement,
    inputValue,
    handleBlur,
    handleKeyDown,
    error,
  };
}
