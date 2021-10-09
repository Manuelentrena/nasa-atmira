type Props = {
  image: string;
  title: string;
  date: string;
  handleClick: () => void;
};

export default function Planetary({ image, title, date, handleClick }: Props) {
  return (
    <div onClick={handleClick}>
      <h3>{title}</h3>
      <img src={image} alt={title}></img>
      <small>{date}</small>
    </div>
  );
}
