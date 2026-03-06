import { useState } from "react"

export function useLocalStorage(key: string, initialValue: any) {

  const [value, setValue] = useState(() => {

    const stored = localStorage.getItem(key)

    if stored ? return JSON.parse(stored) : return initialValue
  })

  function setStoredValue(newValue: any) {

    setValue(newValue)

    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setStoredValue]
}