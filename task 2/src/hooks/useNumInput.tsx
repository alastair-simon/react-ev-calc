import { useState, useEffect, Dispatch, SetStateAction } from "react";

type SetValueFunction = Dispatch<SetStateAction<number>>;

export function useNumInput(value: number, setValue: SetValueFunction) {
  const [inputValue, setInputValue] = useState<string>(String(value));

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setValue(newValue === "" ? 0 : Number(newValue));
  };

  const increment = () => {
    const newValue = value + 1;
    setInputValue(String(newValue));
    setValue(newValue);
  };

  const decrement = () => {
    const newValue = value - 1;
    setInputValue(String(newValue));
    setValue(newValue);
  };

  return { handleInputChange, increment, decrement, inputValue };
}
