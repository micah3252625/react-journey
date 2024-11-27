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
    googleMapsLink: string,
    dates: string;
    text: string;
  };
}

const Entry: React.FC<EntryProps> = ({ entries }) => {
  const { img, title, country, googleMapsLink, text, dates } = entries;
  return (
    <article className="entry my-3 flex flex-wrap items-center md:flex-nowrap gap-6">
      <div className="w-[225px] h-[225px]  overflow-hidden rounded-sm flex-shrink-0">
        <img
          src={img.src}
          alt={img.alt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="info-containeritems-center">
        <h1 className="title text-3xl font-bold mb-2">{title}</h1>
        <div className="location flex items-center gap-2 text-sm text-gray-600 mb-2">
          <img
            src={LocationPin}
            alt="location-pin"
            className="w-4 h-4"
          />
          <span>{country}</span>
          <a
            href={`${googleMapsLink}`}
            className="text-blue-500 underline ml-2"
            aria-label={`View ${title} on Google Maps`}
          >
            View on Google Maps
          </a>
        </div>
        <p className="dates text-gray-500 mb-3">{dates}</p>
        <p className="text leading-relaxed">{text}</p>
      </div>
    </article>

  );
};

export default Entry;
