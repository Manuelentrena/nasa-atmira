type Props = {
  image: string;
  title: string;
  date: string;
  handleClick: () => void;
};

export default function Planet({ image, title, date, handleClick }: Props) {
  return (
    <div onClick={handleClick}>
      <h3>{title}</h3>
      <img loading="lazy" src={image} alt={title}></img>
      <small>{date}</small>
    </div>
  );
}
