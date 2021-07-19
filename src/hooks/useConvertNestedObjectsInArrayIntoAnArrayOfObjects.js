import { useEffect, useState } from 'react'
const initialState = []
export const useConvertNestedObjectsInArrayIntoAnArrayOfObjects = (data) => {
  const [transformedData, setPlatformData] = useState(initialState)

  useEffect(() => {
    if (!data) return
    data.map(({ platform }) => setPlatformData((state) => [...state, platform]))

    return () => setPlatformData(initialState)
  }, [data])
  return { transformedData }
}
