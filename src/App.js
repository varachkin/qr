import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState('CONFIRM')
  const [code, setCode] = useState(null)

  function getQueryParams(url) {
    const queryStringWithoutQuestionMark = url.substring(1);
    return JSON.parse(decodeURIComponent(queryStringWithoutQuestionMark));
  }

  const handleConfirm = () => {
    setActive(true)
    setText('CONFIRMED')
    setTimeout(() => {
      setActive(false)
      setText('CONFIRM')
    }, 5000)
  }
  console.log(getQueryParams(window.location.search))
  return (
    <div className="page">
      <header></header>
      <main>
        <div className='logo-main'></div>
        <p className='title'>Confirm payment</p>
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
