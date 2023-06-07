import React, { useEffect, useState, useMemo, useRef } from "react";
import { useInView } from "react-intersection-observer";

import "../Home/Home.css";
import LazyImage from "../../components/LazyImage/LazyImage";

function App2() {
  const images = [
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
    { width: 300, height: 200 },
  ];

  return (
    <>
      <div className="grid">
        {images.map((size, index) => (
          <LazyImage
            key={index.toString()}
            width={size.width}
            height={size.height}
            src={`https://picsum.photos/id/${Math.round(Math.random() * 100)}/${
              size.width
            }/${size.height}`}
          />
        ))}
      </div>
    </>
  );
}

export default App2;
