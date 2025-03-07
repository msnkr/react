import React, { useState, useEffect } from "react";

import small from "./assets/test-1.jpg";
import big from "./assets/test-2.jpg";

function ExampleComponent() {
  const [defaultImage, setDefaultImage] = useState("");

  useEffect(() => {
    const changeImage = () => {
      if (window.innerWidth > 718) {
        setDefaultImage(big);
      } else {
        setDefaultImage(small);
      }
    };

    changeImage();

    window.addEventListener("resize", changeImage);

    return () => {
      window.removeEventListener("resize", changeImage);
    };
  }, []);

  return (
    <div>
      <div>
        <img
          src={`${defaultImage}`}
          className="w-full h-dvh object-cover object-[90%_100%]"
        />
      </div>
    </div>
  );
}

export default ExampleComponent;
