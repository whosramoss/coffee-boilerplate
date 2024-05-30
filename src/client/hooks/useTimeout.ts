import { useEffect, useLayoutEffect, useRef } from "react";

export const useTimeout = (
  callback: () => void,
  delay: number | null,
): void => {
  const savedCallback = useRef(callback);

  useScreenEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) return;

    const id = setTimeout(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay]);
};

const useScreenEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
