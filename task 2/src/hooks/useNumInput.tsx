import { useState, useEffect, Dispatch, SetStateAction } from "react";

type SetValueFunction = Dispatch<SetStateAction<number>>;

export function useNumInput(value: number, setValue: SetValueFunction, max:number) {
  const [inputValue, setInputValue] = useState<string>(String(value));

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (!isNaN(Number(newValue))) {
      newValue = String(Math.min(Number(newValue), max));
    } else {
      newValue = String(value);
    }

    setInputValue(newValue);
    setValue(Number(newValue));
  };

  const increment = () => {
    const newValue = value + 1;
    if (newValue <= max) {
      setInputValue(String(newValue));
      setValue(newValue);
    }
  };

  const decrement = () => {
    const newValue = value - 1;
    setInputValue(String(newValue));
    setValue(newValue);
  };

  return { handleInputChange, increment, decrement, inputValue };
}
