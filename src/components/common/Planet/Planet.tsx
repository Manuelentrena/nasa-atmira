type Props = {
  url: string;
  title: string;
  date: string;
  type: string;
  handleClick: () => void;
};

export default function Planet({ url, title, date, handleClick, type }: Props) {
  return (
    <div onClick={handleClick} className="planet">
      <h2>{title}</h2>
      {type === "image" && (
        <>
          <img className="planet__image" loading="lazy" src={url} alt={title} />
          <small>{date}</small>
        </>
      )}
      {type === "video" && (
        <div className="planet__iframeBox">
          <iframe className="planet__iframe" title={title} src={url} />
        </div>
      )}
    </div>
  );
}
