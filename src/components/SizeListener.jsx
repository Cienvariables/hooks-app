import React, { useEffect, useState } from "react";

function SizeListener() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const width = document.body.clientWidth;
      console.log(`updateWidth con ${width}`);
      setWidth(width);
    };
    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  });

  return (
    <div>
      <p>Width es de {width}px</p>
    </div>
  );
}
export default SizeListener;