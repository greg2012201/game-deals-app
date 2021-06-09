import { Paragraph } from 'components/atoms/Paragraph/Paragraph'
import Title from 'components/atoms/Title/Title'
import React from 'react'
import TextContainer from '../TextContainer/TextContainer'
import { RequirementsWrapper } from './PCRequirements.style'

const PCRequirements = ({ data }) => {
  return (
    <RequirementsWrapper>
      <Title titleType="h2">System requirements</Title>
      {data.platforms.map(({ platform, requirements }, index) => {
        return platform.id === 4 ? (
          Object.keys(requirements).length ? (
            Object.keys(requirements).map((key, i) => (
              <TextContainer key={i} viewHeight={40}>
                {requirements[key]}
              </TextContainer>
            ))
          ) : (
            <Paragraph key={index}>There is nothing here</Paragraph>
          )
        ) : null
      })}
    </RequirementsWrapper>
  )
}

export default PCRequirements
