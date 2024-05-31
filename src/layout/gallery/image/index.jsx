import React, { useEffect, useState } from "react";
import Image3d from "../../../components/3d";
import "./image.scss";

export default function GalleryImage({ src, fullscreen }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    const navBar = document.querySelectorAll(".nav-bar")[0];
    if (navBar) {
      navBar.lastChild.style.opacity = state ? "0" : "1";
      setTimeout(() => {
        navBar.lastChild.style.visibility = state ? "hidden" : "visible";
      }, 400);
    }
  }, [state]);
  return (
    <div className="gallery-image">
      <div className={`gallery-image-close ${!state ? "hide" : ""}`}>
        <span
          onClick={() => {
            fullscreen(false);
            setState(false);
          }}
          class="material-symbols-rounded"
        >
          close
        </span>
      </div>
      <div>
        <Image3d src={src} />
      </div>
      <div
        onClick={() => {
          fullscreen(true);
          setState(true);
        }}
        className={`gallery-explore ${state ? "hide" : ""}`}
      >
        Explore
      </div>
    </div>
  );
}