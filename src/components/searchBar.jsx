import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [value, setvalue] = useState("");

  const gestisciRicerca = () => {
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cerca film..."
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <button onClick={gestisciRicerca}>Cerca</button>
    </div>
  );
};

export default SearchBar;
