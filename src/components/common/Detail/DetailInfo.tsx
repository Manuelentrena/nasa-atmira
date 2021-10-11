// Dependecies
import { Link } from "react-router-dom";

type Props = {
  url: string;
  hdurl: string | undefined;
  title: string;
  date: string;
  type: string;
  desc: string;
  copy: string | undefined;
};

export default function DetailInfo({
  url,
  title,
  date,
  type,
  desc,
  copy,
  hdurl,
}: Props) {
  return (
    <div className="detail">
      <Link to="/" className="backHome">
        {"<"} HOME 🌎
      </Link>
      <h1 className="detail__title">{`🌌 ${title}`}</h1>
      {type === "image" && (
        <img className="detail__image" loading="lazy" src={url} alt={title} />
      )}
      {type === "video" && (
        <div className="detail__iframeBox">
          <iframe className="detail__iframe" title={title} src={url} />
        </div>
      )}
      <p className="detail__descTitle">Description:</p>
      <p className="detail__desc">{desc ? desc : " None"}</p>

      <div className="detail__Container">
        <p className="detail__infoTitle">▪ Author:{"\u00A0"}</p>
        <p className="detail__info">{copy ? copy : " None"}</p>
      </div>

      <div className="detail__Container">
        <p className="detail__infoTitle">▪ Date:{"\u00A0"}</p>
        <p className="detail__info">{date ? date : " None"}</p>
      </div>
    </div>
  );
}
