import LocationPin from "../assets/location-pin.png";
interface ImageProps {
  src: string;
  alt: string;
}

interface EntryProps {
  entries: {
    id: number;
    img: ImageProps;
    title: string;
    country: string;
    dates: string;
    text: string;
  };
}

const Entry: React.FC<EntryProps> = ({ entries }) => {
  const { img, title, country, text, dates } = entries;
  return (
    <article className="entry flex">
      <div className="img-container">
        <img src={img.src} alt={img.alt} width={150} />
      </div>
      <div className="info-container">
        <h1 className="title text-5xl">{title}</h1>
        <div className="location flex gap-3">
          <div className="flex">
            <img
              src={LocationPin}
              alt="location-pin"
              className=" h-auto"
              width={25} height={25}
            />
            <p className="country">{country}</p>
          </div>
          <a href="">View on Google Maps</a>
        </div>
        <p className="dates">{dates}</p>
        <p className="text">{text}</p>
      </div>
    </article>
  );
};

export default Entry;
