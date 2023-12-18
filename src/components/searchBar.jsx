import { useState } from "react";

export default ({ onSearch }) => {
  const [value, setvalue] = useState("");

  
  return (
    <div className="search-bar">
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

