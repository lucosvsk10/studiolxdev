
import { useCallback } from 'react';

export const useRevealAnimation = () => {
  const handleScroll = useCallback(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }, []);

  return { handleScroll };
};
