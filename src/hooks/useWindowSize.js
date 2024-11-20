import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const cleanUp = () => {
      console.log("runs if a useEffect dep changes");
      window.removeEventListener("resize", handleResize);
    };

    return cleanUp;
  }, []);

  return windowSize;
};

export default useWindowSize;
