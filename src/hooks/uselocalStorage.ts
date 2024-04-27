import { useState } from "react";
import { LocalStorageType } from "../types/localStorageTypes";

export function useLocalStorage(key: string, initialValue: LocalStorageType[]) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });
  
    const setValue = (value: LocalStorageType) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    };
  
    return [storedValue, setValue];
  }