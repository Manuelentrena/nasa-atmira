// Dependencies
import useSWR from "swr";

type Props = {
  url: string;
};

export default function Planetary({ url }: Props) {
  const { data, error } = useSWR(url);

  if (error || data.error) {
    return <div />;
  }

  if (!data) {
    return <div />;
  }

  console.log(data);

  return (
    <div>
      <h1>{url}</h1>
    </div>
  );
}
