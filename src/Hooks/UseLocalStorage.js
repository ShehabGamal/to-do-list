import { useState, useEffect } from "react";
const useLocalStorage = (initialValue, id) => {
  const [value, setter] = useState(() => {
    const savedValue = localStorage.getItem(id);
    if (savedValue) {
      return savedValue;
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(id, value);
  }, [value]);
  return [value, setter];
};
export default useLocalStorage;
