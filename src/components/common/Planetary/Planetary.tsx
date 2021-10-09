type Props = {
  image: string;
  title: string;
  date: string;
};

export default function Planetary({ image, title, date }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title}></img>
      <small>{date}</small>
    </div>
  );
}
