import { useEffect, useState } from 'react'

export const useTitleByRoute = (data, slug) => {
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (!data || !slug) return
    const filtredData = data.find((e) => (e.slug.toLowerCase() === slug.toLowerCase() ? e.name : null))
    return filtredData ? setTitle(filtredData.name) : null
  }, [slug, data])
  return { title }
}
