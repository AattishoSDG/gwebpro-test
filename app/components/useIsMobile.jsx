import { useState, useEffect } from 'react';

export default function useIsMobile(breakpoint = 768)  {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Check window size initially
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

