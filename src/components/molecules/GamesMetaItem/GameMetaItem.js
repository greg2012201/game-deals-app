import Title from 'components/atoms/Title/Title'
import React from 'react'
import { ItemWrapper } from './GameMetaItem.style'

function GameMetaItem({ children, title, data = [], text = '', handleClassName }) {
  return (
    <ItemWrapper className={handleClassName}>
      {data.length !== 0 ? (
        <>
          <Title titleType="h4">{title}</Title>
          {data.map(({ id, name }) => (
            <p key={id}>{name}</p>
          ))}
        </>
      ) : (
        <>
          <Title titleType="h4">{title}</Title>
          {text ? <p>{text}</p> : null}
        </>
      )}
      {children}
    </ItemWrapper>
  )
}

export default GameMetaItem
