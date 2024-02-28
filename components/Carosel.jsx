import { useState } from "react";


export default function Carosel({ slides }) {
  let [current, setCurrent] = useState(1);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="flex justify-content-center">
      <div>{slides.map((item,index)=>current===index&&(slides[index]))}</div>
      
    </div>
  );
}