import Gallery from 'components/molecules/Gallery/Gallery'
import Slider from 'components/molecules/Slider/Slider'
import { useSlider } from 'components/molecules/Slider/useSlider'
import { RAWGOptions } from 'utils/fetchingOptions'
import React, { useEffect } from 'react'
import { useScreenshots } from './useScreenshots'
const { url, key } = RAWGOptions
const Screenshots = ({ slug }) => {
  const { isOpen, index, handleSliderClose, handleSliderOpen } = useSlider()
  const { data, loading, fetchData } = useScreenshots()

  useEffect(() => {
    fetchData(`${url}/games/${slug}/screenshots?key=${key}`)
  }, [fetchData, slug])

  return (
    <div>
      <Gallery isLoading={loading} handleSliderOpen={handleSliderOpen} images={data} />
      <Slider handleSliderClose={handleSliderClose} isOpen={isOpen} images={data} index={index} />
    </div>
  )
}

export default Screenshots
