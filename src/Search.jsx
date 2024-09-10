import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <form>
      <input onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};

export default Search;
