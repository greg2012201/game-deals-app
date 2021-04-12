import { useState } from 'react'

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)
  return [value, () => setValue((state) => !state)]
}
