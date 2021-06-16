import React from 'react'
import { StyledAchievementsListItem, StyledWrapper } from './AchievementsListItem.style'
import Title from 'components/atoms/Title/Title'
import { Paragraph } from 'components/atoms/Paragraph/Paragraph'

const AchievementsListItem = ({ achievementsData: { id, name, description, image } }) => {
  return (
    <StyledAchievementsListItem key={id}>
      <StyledWrapper>
        <Title titleType="h4">{name}</Title>
        <img data-testid="image" src={image} alt={name} />
        <Paragraph>{description}</Paragraph>
      </StyledWrapper>
    </StyledAchievementsListItem>
  )
}

export default AchievementsListItem
