import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState('CONFIRM')
  const [isLoading, setIsLoading] = useState(false)


  function getQueryParams(url) {
    const queryStringWithoutQuestionMark = url.substring(1);
    return JSON.parse(decodeURIComponent(queryStringWithoutQuestionMark));
  }

  const handleConfirm = () => {
    setIsLoading(true)
    setTimeout(() => {
      setActive(true)
      setText('')
      setIsLoading(false)
    }, 5000)
  }
  console.log(window.location.search)
  return (
    <div className="page">
      <header></header>
      <main>
        <div className='logo-main'></div>
        <p className='title'>Confirm payment</p>
        <p className={`${active ? 'active' : ''}`}>
          <button
            className={`waves`}
            onClick={active ? ()=>{} : handleConfirm}
          >
            {isLoading ? <span className="loader"></span> : <span>{text}</span>}
            {active &&
            <div className="o-circle c-container__circle o-circle__sign--success">
              <div className="o-circle__sign"></div>
            </div>}
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
