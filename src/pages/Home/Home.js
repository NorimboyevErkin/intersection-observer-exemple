import React, { useEffect, useState, useMemo, useRef } from "react";

import "./Home.css";
import Header from "../../components/Header/Header";

function App() {
  const targetElement = useRef(null);
  const tootElement = useRef(null);

  const [isInView, setIsInView] = useState(false);
  const [threshold, setthreshold] = useState(0);

  const options = {
    root: null,
    rootMargin:"100px",
    threshold:1
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      setIsInView(entry.isIntersecting);
      setthreshold(Math.round(entry.intersectionRatio * 100));
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(targetElement.current);

    return ()=> observer.unobserve(targetElement.current);
  }, []);

  return (
    <>
      <Header isVisible={isInView} threshold={threshold} />

        {/* <div ref={tootElement} style={{width:"100%", top:"200px", position:"fixed" , left:0 , height:"300px" , background:"yellow" , opacity:.1 , zIndex:-1 , overflow:"auto"}}> */}
      <div className="App"  >

        <div className="box" ref={targetElement} >
          targetElement
        </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default App;
