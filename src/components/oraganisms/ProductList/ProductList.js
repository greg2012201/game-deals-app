import React, { useEffect, useState } from 'react'
import { mockProductList } from '../../../data/mockProductList'
import ProductCard from '../../molecules/ProductCard/ProductCard'
import { StyledList } from './ProductList.style'
import axios from 'axios'

const ProductList = () => {
  const [gamesData, setGamesData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = (endpoint) => {
      const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_RAWG_API_URL}/${endpoint}`,
        headers: {
          'x-rapidapi-key': `${process.env.REACT_APP_RAWG_API_KEY}`,
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        },
      }

      axios
        .request(options)
        .then((response) => {
          response.data.results.map((el) => {
            return axios
              .get(`${process.env.REACT_APP_RAWG_API_URL}/${endpoint}/${el.id}`, {
                headers: {
                  'x-rapidapi-key': `${process.env.REACT_APP_RAWG_API_KEY}`,
                  'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                },
              })
              .then((response) => {
                const newGamesData = {
                  id: response.data.id,
                  title: response.data.name,
                  image: response.data.background_image,
                  description: response.data.description_raw,
                  shop: response.data.stores[Math.round(Math.random() * (response.data.stores.length - 1))].url,
                  price: '',
                }

                setGamesData((state) => [...state, newGamesData])
              })
              .catch(() => setError('Something went wrong'))
          })
        })
        .catch((err) => console.error(err))
    }
    fetchData('games')
  }, [])

  return (
    <StyledList>
      {gamesData.map((gamesData) => (
        <ProductCard key={gamesData.id} productsData={gamesData} />
      ))}
    </StyledList>
  )
}

export default ProductList
