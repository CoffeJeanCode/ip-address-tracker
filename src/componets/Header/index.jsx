import React, { useState } from "react"

const Header = () => {
  const [ipSearch, setIpSearch] = useState("")
  
  const handleSearchIP = (evt) => {
    evt.preventDefault()
  }

  return (
    <header>
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSearchIP}>
        <input type="text" onChange={evt => setIpSearch(evt.target.value)} value={ipSearch}/>
        <button>→</button>
      </form>

      <div>{/* IP Info */}</div>
    </header>
  );
};

export default Header;
