type Props = {
  url: string;
};

export default function Planetary({ url }: Props) {
  return (
    <div>
      <h1>{url}</h1>
    </div>
  );
}
