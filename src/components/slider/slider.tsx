import "./slider.css";
import { useState, useEffect } from "react";

const NameSlider = () => {
  const names = ["Aspiring Fullstack Developer", "Gamer", "Dad"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [names.length]);

  return (
    <div>
      <h1>{names[currentIndex]}</h1>
    </div>
  );
};

export default NameSlider;
