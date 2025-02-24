import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  // Başlangıç değerini localStorage'dan al
  const [data, setData] = useState(() => {
    if (typeof window === "undefined") return initialValue; // SSR önlemi

    try {
      const localValue = localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Değer güncellendiğinde localStorage'a yaz
  useEffect(() => {
    try {
      console.log(`LocalStorage Güncellendi: ${key} =`, data);
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, data]);

  return [data, setData];
}