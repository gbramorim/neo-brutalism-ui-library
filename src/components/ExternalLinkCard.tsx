type ExternalLinkCardType = {
  thumbnail: string | undefined;
  date?: string;
  title?: string;
  description?: string;
  callToActionText?: string;
  calllToActionLink: string;
};

const ExternalLinkCard = ({
  thumbnail,
  date,
  title,
  description,
  callToActionText,
  calllToActionLink,
}: ExternalLinkCardType) => {
  return (
    <div className="w-full max-w-2xl h-full md:h-[480px] border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
      <a href={calllToActionLink} target="_blank">
        <article className="w-full h-full">
          <figure className="w-full border-black border-b-2">
            <img
              src={thumbnail}
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="px-6 py-5 text-left h-full">
            {date && <p className="text-base mb-4">{date}</p>}
            {title && (
              <h1 className="text-[32px] leading-8 font-bold mb-4">{title}</h1>
            )}
            {description && (
              <p className="text-xs mb-4 line-clamp-2">{description}</p>
            )}
            {callToActionText && <strong>{callToActionText}</strong>}
          </div>
        </article>
      </a>
    </div>
  );
};

export default ExternalLinkCard;
