import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import Title from 'components/atoms/Title/Title';
import { useGameDetails } from 'hooks/useGameDetails';
import React from 'react';
import { states } from 'utils/state/states';
import TextContainer from '../TextContainer/TextContainer';
import { RequirementsWrapper } from './PCRequirements.style';

const PCRequirements = () => {
  const { data, compareState } = useGameDetails();

  return (
    !compareState(states.idle) && (
      <RequirementsWrapper>
        <Title titleType="h2">System requirements</Title>
        {data.platforms &&
          data.platforms.map(({ platform, requirements }, index) => {
            return (
              platform.id === 4 &&
              (Object.keys(requirements).length ? (
                Object.keys(requirements).map((key, i) => (
                  <TextContainer key={i} viewHeight={40}>
                    {requirements[key]}
                  </TextContainer>
                ))
              ) : (
                <Paragraph key={index}>There is nothing here</Paragraph>
              ))
            );
          })}
      </RequirementsWrapper>
    )
  );
};
export default PCRequirements;
