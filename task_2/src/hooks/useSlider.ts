
import { useEffect, useRef, useState, SetStateAction } from "react";
import { getBackgroundSize } from "../utils/getBackgroundSize";

interface UseSliderProps {
  max: number;
  value: number;
  setValue: React.Dispatch<SetStateAction<number>>;
}

export function useSlider ({ max, value, setValue }: UseSliderProps) {
  const sliderRef = useRef<HTMLInputElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  useEffect(() => {
    const updateIndicatorPosition = () => {
      if (sliderRef.current && indicatorRef.current) {
        const slider = sliderRef.current;
        const indicator = indicatorRef.current;

        const sliderWidth = slider.offsetWidth;
        const indicatorWidth = indicator.offsetWidth;
        const thumbWidth = 20;

        const newPosition =
          (value / max) * (sliderWidth - thumbWidth) +
          thumbWidth / 2 -
          indicatorWidth / 2;
        setIndicatorPosition(newPosition);
      }
    };

    updateIndicatorPosition();
    window.addEventListener('resize', updateIndicatorPosition);

    return () => {
      window.removeEventListener('resize', updateIndicatorPosition);
    };
  }, [value, max]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const sliderStyle = getBackgroundSize(max, value);

  return {
    sliderRef,
    indicatorRef,
    indicatorPosition,
    handleChange,
    sliderStyle,
  };
};
