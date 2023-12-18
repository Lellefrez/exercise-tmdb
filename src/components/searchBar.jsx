import { useState } from "react";

export default ({ onSearch }) => {
  const [value, setvalue] = useState("");

  return (
    <div className="search-bar">
      <select name="generes" id="generes">
          <option value="">Movie</option>
          <option value="">Tv Series</option>
          <option value="">Person</option>
      </select>
      <input
        type="text"
        placeholder="Cerca film..."
        value={value}
        onChange={e => setvalue(e.target.value)}
      />
      <button onClick={() =>{
        onSearch(value)
      }}>Cerca</button>
    </div>
  );
};

