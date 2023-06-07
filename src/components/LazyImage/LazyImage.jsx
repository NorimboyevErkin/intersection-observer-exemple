import React, { useEffect, useState, useRef, useMemo } from "react";
import { useInView } from "react-intersection-observer";

import "./LazyImage.scss";

const LazyImage = ({ width, height, src, ...rest }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        background: "#2a4b7a",
      }}
      className="img-box"
    >
      {inView ? (
        <img
          {...rest}
          src={src}
          loading="lazy"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      ) : null}
    </div>
  );
};

export default LazyImage;
