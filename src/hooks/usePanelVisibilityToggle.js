import { useEffect, useState, useCallback } from 'react';

export const usePanelVisibilityToggle = (changingElement, targetElement) => {
  const [visibility, setVisibility] = useState(true);
  const isTarget = useCallback(() => {
    if (!targetElement?.current || !changingElement?.current) {
      return setVisibility(true);
    }

    setVisibility(
      targetElement.current.getBoundingClientRect().top +
        targetElement.current.getBoundingClientRect().height >=
        0
    );
  }, [changingElement, targetElement]);
  useEffect(() => {
    if (changingElement && targetElement) {
      isTarget();
      window.addEventListener('scroll', isTarget);
    }
    return () => {
      window.removeEventListener('scroll', isTarget);
    };
  }, [changingElement, targetElement, isTarget]);
  return visibility;
};
