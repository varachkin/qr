import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState('CONFIRM')

  const handleConfirm = () => {
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
