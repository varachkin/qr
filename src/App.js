import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState('CONFIRM')
  const [title, setTitle] = useState('Confirm payment')

  function getQueryParams(url) {
    const queryParams = {};
    const urlSearchParams = new URLSearchParams(url.split('?')[1]);
    for (const [key, value] of urlSearchParams.entries()) {
      queryParams[key] = value;
    }
    return queryParams;
  }

  const handleConfirm = (event) => {
    event.preventDefault();
    const queryParams = getQueryParams(event.target.href);
    setTitle(JSON.parse(queryParams))
    setActive(true)
    setText('CONFIRMED')
    setTimeout(()=> {
      setActive(false)
      setText('CONFIRM')
    },5000)
  }

  return (
    <div className="page">
      <header></header>
      <main>
        <div className='logo-main'></div>
        <p className='title'>{title}</p>
        <p className={`${active ? 'active' : ''}`}>
          <button
            className={`waves`}
            onClick={handleConfirm}
          >
            <span>{text}</span>
          </button>
        </p>

      </main>
      <footer>
        <div className='logo-footer'>
        </div>
      </footer>
    </div>
  );
}

export default App;
