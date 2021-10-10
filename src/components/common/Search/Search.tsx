// Dependencies
import { useState } from "react";
import { useHistory } from "react-router";
// Utils
import createPath from "../../../utils/createPath";

export default function Search() {
  const [date, setDate] = useState<string>("");
  let history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const path = createPath(date);
    history.push(path);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="date"
        name="date"
        required
        onChange={handleChange}
      ></input>
      <button className="search__button" type="submit">
        SEARCH
      </button>
    </form>
  );
}
