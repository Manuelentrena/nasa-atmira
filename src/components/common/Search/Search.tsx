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
    <form onSubmit={handleSubmit}>
      <label></label>
      <input type="date" name="date" onChange={handleChange}></input>
      <button type="submit">SEARCH</button>
    </form>
  );
}
