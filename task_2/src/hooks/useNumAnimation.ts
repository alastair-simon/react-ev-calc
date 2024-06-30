import { useState, useEffect, useRef } from "react";

// Custom hook for count up animation with ease-in-out effect
export function useCountUpAnimation(initialValue:number, duration:number) {
  const [currentValue, setCurrentValue] = useState(0);
  const frameDuration = 1000 / 60; // Duration for each frame (60 frames per second)
  const totalFrames = Math.round(duration / frameDuration); // Total frames needed for animation
  const previousValueRef = useRef(currentValue);

  // Easing function (ease-in-out quadratic)
  const easeInOutQuad = (t:number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  useEffect(() => {
    let frame = 0;
    const startValue = previousValueRef.current;
    const endValue = initialValue;
    const valueChange = endValue - startValue;
    const counter = setInterval(() => {
      frame++;
      const progress = easeInOutQuad(frame / totalFrames);
      const currentCount = Math.round(startValue + valueChange * progress);

      setCurrentValue(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
        previousValueRef.current = endValue;
      }
    }, frameDuration);

    return () => {
      clearInterval(counter);
    };
  }, [initialValue, duration]);

  return { currentValue };
}
