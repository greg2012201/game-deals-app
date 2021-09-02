import { useState } from 'react';
import { animationsDuration } from './DeleteBinButton.style';

export const useDeleteBinButtonAnimation = () => {
  const [hasAnimationStarted, setAnimationStart] = useState(false);

  const calculateDelay = ({ swingingAnimation, delay, disappearanceAnimation }) => {
    return swingingAnimation + delay + disappearanceAnimation;
  };
  const startAnimation = () => {
    return setAnimationStart(true);
  };

  return { hasAnimationStarted, startAnimation, delay: calculateDelay(animationsDuration) };
};
