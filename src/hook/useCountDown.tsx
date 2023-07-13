import { useEffect, useState } from "react";

interface CountDownProps {
  duration: number;
}

export default function useCountDown({ duration }: CountDownProps) {
  const [isCountDown, setIsCountDown] = useState<boolean>(false);
  const [count, setCount] = useState(duration);

  useEffect(() => {
    const countDownFunc = setInterval(() => {
      if (isCountDown === false) return;

      if (count <= 1) {
        setIsCountDown(false);
        clearInterval(countDownFunc);
        setCount(duration);
      } else {
        setCount((count) => count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(countDownFunc);
    };
  }, [isCountDown, count]);

  return { count, isCountDown, setIsCountDown };
}
