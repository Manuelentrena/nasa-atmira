type Props = {
  url: string;
  title: string;
  date: string;
  type: string;
  handleClick: () => void;
};

export default function Planet({ url, title, date, handleClick, type }: Props) {
  return (
    <div onClick={handleClick}>
      <h3>{title}</h3>
      {type === "image" && <img loading="lazy" src={url} alt={title} />}
      {type === "video" && (
        <iframe title={title} width="1000" height="570" src={url} />
      )}
      <small>{date}</small>
    </div>
  );
}
