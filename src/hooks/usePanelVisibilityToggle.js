import { useEffect, useState } from 'react';

export const usePanelVisibilityToggle = (changingElement, targetElement) => {
  const [visibility, setVisibility] = useState(true);
  useEffect(() => {
    if (!targetElement || !changingElement || !targetElement.current || !changingElement.current)
      return;
    const isTarget = () => {
      setVisibility(
        targetElement.current.getBoundingClientRect().top +
          targetElement.current.getBoundingClientRect().height >=
          0
      );
    };
    if (changingElement && targetElement) {
      isTarget();
      window.addEventListener('scroll', isTarget);
    }
    return () => {
      window.removeEventListener('scroll', isTarget);
    };
  }, [changingElement, targetElement]);
  return visibility;
};
