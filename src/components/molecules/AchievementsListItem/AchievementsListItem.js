import React from 'react'
import { StyledAchievementsListItem } from './AchievementsListItem.style'
import Title from 'components/atoms/Title/Title'
import { Paragraph } from 'components/atoms/Paragraph/Paragraph'

const AchievementsListItem = ({ achievementsData: { id, name, description, image } }) => {
  return (
    <StyledAchievementsListItem key={id}>
      <div>
        <Title titleType="h4">{name}</Title>
        {image ? <img data-testid="image" src={image} alt={name} /> : <Paragraph>There is no image here</Paragraph>}
        {description ? <Paragraph>{description}</Paragraph> : <Paragraph>There is no description here</Paragraph>}
      </div>
    </StyledAchievementsListItem>
  )
}

export default AchievementsListItem
