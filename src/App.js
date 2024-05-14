import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState('CONFIRM')
  const [isLoading, setIsLoading] = useState(false)


  function getQueryParams(url) {
    const queryStringWithoutQuestionMark = url.substring(1);
    if (queryStringWithoutQuestionMark) {
      return JSON.parse(decodeURIComponent(queryStringWithoutQuestionMark));
    }
  }

  const transactionAccept = (data) => {
    return axios
      .put('https://staging-payments.exa22.com/v1/Transaction/', {
        ...data
      })
      .then(response => {
        // console.log(`/payment/cancel?payment_type=${paymentType}&serial=${serial}`,response)
        return response;
      })
      .catch(error => {
        // console.log(`/payment/cancel?payment_type=${paymentType}&serial=${serial}`, error)
        return error;
      });
  }
  console.log(getQueryParams(window.location.search))

  const handleConfirm = () => {
    setIsLoading(true)
    transactionAccept(getQueryParams(window.location.search))
      .then(response => {
        console.log(response)
        setActive(true)
        setText('')
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="page">
      <header>
        <div className='logo-main'></div>
      </header>
      <main>

        <p className='title'>Confirm payment</p>
        <div className={`${active ? 'active' : ''}`}>
          <button
            className={`waves`}
            onClick={active ? () => { } : handleConfirm}
          >
            {isLoading ? <span className="loader"></span> : <span>{text}</span>}
            {active &&
              <div className="o-circle c-container__circle o-circle__sign--success">
                <div className="o-circle__sign"></div>
              </div>}
          </button>
        </div>

      </main>
      <footer>
        <div className='logo-footer'>
        </div>
      </footer>
    </div>
  );
}

export default App;
