
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useRef } from 'react';

function App() {
  const [links, setLinks] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const link = inputRef.current.value;
    setLinks([...links, link]);
    inputRef.current.value = '';
  };

  return (
    <div>
      <h1>web3 linktree</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a social site link" ref={inputRef}
          pattern="^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$"
          required />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={`${link}`} target="_blank" rel="noreferrer">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
