import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Background, Mask, Wrapper } from './GameDetails.style';
import 'swiper/swiper-bundle.css';
import Title from 'components/atoms/Title/Title';
import ArticleContainer from 'components/oraganisms/ArticleContainer/ArticleContainer';
import GameMetaWrapper from 'components/molecules/GameMetaWrapper/GameMetaWrapper';
import PCRequirements from 'components/molecules/PCRequirements/PCRequirements';
import InformationsTemplate from 'components/templates/InformationsTemplate/InformationsTemplate';
import GamesList from 'components/oraganisms/GamesList/GamesList';
import RoundButton from 'components/atoms/RoundButton/RoundButton';
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo';
import AchievementsList from 'components/oraganisms/AchievementsList/AchievementsList';
import Screenshots from 'components/oraganisms/Screenshots/Screenshots';
import { states } from 'utils/state/states';
import { useGameDetails } from 'hooks/useGameDetails';
import ArticleContainerSkeletonLoader from 'components/oraganisms/ArticleContainer/ArticleContainerSkeletonLoader';
import Loader from 'react-loader-spinner';
import { useTheme } from 'styled-components';
import { useErrorPage } from 'hooks/useErrorPage';

const GameDetails = () => {
  const theme = useTheme();
  const { slug } = useParams();
  const {
    data: {
      name,
      id,
      description_raw: descripton,
      background_image: backgroundImage,
      achievements_count: achievementsCount,
    },
    compareState,
  } = useGameDetails();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  useErrorPage(compareState(states.hasError));
  return (
    <Background>
      <Wrapper
        hasLoaded={compareState(states.hasLoaded) || compareState(states.idle)}
        backgroundURL={backgroundImage}
      >
        <Mask isLoading={compareState(states.isLoading) || compareState(states.idle)}>
          <Title isLoading={compareState(states.isLoading)} key={id}>
            {name}
          </Title>
          <Screenshots />
          {compareState(states.isLoading) || compareState(states.idle) ? (
            <ArticleContainerSkeletonLoader />
          ) : (
            <ArticleContainer title={'About'}>{descripton}</ArticleContainer>
          )}
          <InformationsTemplate>
            {compareState(states.isLoading) || compareState(states.idle) ? (
              <Loader
                className="loader"
                type="Oval"
                color={theme.colors.darkWhite}
                height={60}
                width={60}
              />
            ) : (
              <>
                {achievementsCount > 0 && <AchievementsList />}
                <GameMetaWrapper />
                <PCRequirements />
              </>
            )}
          </InformationsTemplate>
          <GamesList
            title="Games like"
            endMessage={false}
            fecthingRoute={`/games/${slug}/game-series?`}
          />
        </Mask>
        <RoundButton onClick={customSmoothScrollTo} isReturn={true} />
      </Wrapper>
    </Background>
  );
};

export default GameDetails;
