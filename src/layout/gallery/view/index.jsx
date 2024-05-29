import Image3d from "../../../components/3d";
import "./view.scss";

export default function CarGallery({ data, key, currentIndex, prevIndex }) {
  const state =
    key === currentIndex ? "current" : key === prevIndex ? "past" : "";
  return (
    <div className={`gallery-view ${state}`}>
      <div className="gallery-hero-container">
        <GalleryHero name={data.name} description={data.description} />
        <GalleryRatings />
      </div>
      <div className="gallery-image">
        <Image3d src={data.src} />
      </div>
      <div className="gallery-specs">
        <GallerySpecs specs={data.specs} />
      </div>
    </div>
  );
}

const GalleryHero = ({ name, description }) => {
  return (
    <div className="gallery-hero">
      <div className="gallery-name">{name}</div>
      <div className="gallery-desc">{description}</div>
    </div>
  );
};

const GalleryRatings = ({ ratings }) => {
  return (
    <div className="gallery-ratings">
      <div className="gallery-rating">{ratings}</div>
      <div className="gallery-stars"> ★★★★☆</div>
    </div>
  );
};

const GallerySpecs = ({ specs }) => {
  return (
    <>
      {specs.map((spec, index) => (
        <div key={index} className="gallery-spec">
          <div className="gallery-spec-bullet"></div>
          <div className="gallery-spec-value">{spec.value}</div>
        </div>
      ))}
    </>
  );
};