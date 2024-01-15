"use client";

import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debouncedName, setDebouncedName] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedName(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedName;
}
