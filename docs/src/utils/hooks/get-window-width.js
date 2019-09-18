import React from "react";
export default function useWindowWidth() {
  const [width, setWidth] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth
    } else {
      return 0;
    }
  });

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } else {
      return undefined;
    }
  }, []);
  return width;
}