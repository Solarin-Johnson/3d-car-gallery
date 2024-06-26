import { useEffect, useRef, useState } from "react";
import "./footer.scss";
import thumb from "../../assets/ferrarri.webp";

export default function GalleryFooter({ current, previous, fullscreen }) {
  return (
    <div className="gallery-footer">
      <div className="info">Dotjs</div>
      <FooterNav
        current={current}
        previous={previous}
        fullscreen={fullscreen}
      />
      <div className="brands">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </div>
  );
}

const FooterNav = ({ current, previous, fullscreen }) => {
  const carNavRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
      previous(currentIndex);
      current(currentIndex + 1);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      previous(currentIndex);
      current(currentIndex - 1);
    }
  };

  useEffect(() => {
    const carNav = carNavRef.current;
    const clean = carNav.children[1].offsetWidth;
    carNav.scrollTo({
      left: currentIndex > 0 ? clean * 1.6 * currentIndex : clean / 2,
      behavior: "smooth",
    });
  }, [currentIndex]);
  return (
    <div className="gallery-footer-nav" id={fullscreen ? "hide" : ""}>
      <span
        class="material-symbols-rounded"
        id={currentIndex <= 0 ? "hide" : ""}
        onClick={prev}
      >
        chevron_left
      </span>
      <div className="car-nav" ref={carNavRef}>
        <div id="demo"></div>
        <img src={thumb} alt="thumb" />
        <img src={thumb} alt="thumb" />
        <img src={thumb} alt="thumb" />
        <img src={thumb} alt="thumb" />
        <div id="demo"></div>
      </div>
      <span
        class="material-symbols-rounded"
        id={currentIndex >= 3 ? "hide" : ""}
        onClick={next}
      >
        chevron_right
      </span>
    </div>
  );
};
