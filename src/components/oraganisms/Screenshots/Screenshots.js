import Gallery from 'components/molecules/Gallery/Gallery'
import Slider from 'components/molecules/Slider/Slider'
import { useSlider } from 'components/molecules/Slider/useSlider'
import { RAWGOptions } from 'utils/fetchingOptions'
import React, { useEffect } from 'react'
import { useScreenshots } from './useScreenshots'
import { useStateMachine } from 'hooks/useStateMachine'
import { useParams } from 'react-router-dom'
const { url, key } = RAWGOptions
const Screenshots = () => {
  const { isOpen, index, handleSliderClose, handleSliderOpen } = useSlider()
  const { data, fetchData, getCancelToken, resetData } = useScreenshots()
  const { compareState, updateState } = useStateMachine()
  const { slug } = useParams()
  useEffect(() => {
    const cancelToken = getCancelToken()
    fetchData({ url: `${url}/games/${slug}/screenshots?key=${key}`, source: cancelToken, updateState })
    return () => resetData(cancelToken)
  }, [fetchData, slug, updateState, getCancelToken, resetData])

  return (
    <div>
      <Gallery compareState={compareState} handleSliderOpen={handleSliderOpen} images={data} />
      <Slider handleSliderClose={handleSliderClose} isOpen={isOpen} images={data} index={index} />
    </div>
  )
}

export default Screenshots
