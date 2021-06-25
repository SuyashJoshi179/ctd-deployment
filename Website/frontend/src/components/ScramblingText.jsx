import React, { useRef, useState, useEffect } from "react";
// load 'scrambling-text' module.
import Scrambler from "scrambling-text";
import "../assets/css/scrambleText.css";

const ScramblingText = ({ scrambleText, mainContainer }) => {
  // define the text to be scrambled as state.
  const [text, setText] = useState(scrambleText);
  // create an instance of Scrambler using useRef.
  const scramblerRef = useRef(new Scrambler());
  useEffect(() => {
    //observer
    var observer = new IntersectionObserver(
      function (entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if (entries[0].isIntersecting === true)
          console.log("Element has just become visible in screen");
        // call scramble function with the text to be scrambled and handler.
        scramblerRef.current.scramble(text, setText);
      },
      { threshold: [0] }
    );
    //     console.log(document.querySelector(`.${mainContainer}`));
    observer.observe(document.querySelector(`.${mainContainer}`));
  }, []);
  return <div className="display-3 text-scramble">{text}</div>;
};

export default ScramblingText;
