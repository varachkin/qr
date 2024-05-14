import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState('CONFIRM')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

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
        if(response.status === 200){
          setActive(true)
          setText('')
        }else{
          setIsError(true)
          setText('ERROR')
        }
       
      })
      .catch(error => {
        setIsError(true)
        setText('ERROR')
      })
      .finally(() => {
        setIsLoading(false)
        setTimeout(()=> {
          setText('CONFIRM')
          setIsError(false)
        }, 5000)
      })
  }

  return (
    <div className="page">
      <header>
        <div className='logo-main'></div>
      </header>
      <main>

        <p className='title'>Confirm payment</p>
        <div className={`${active ? 'active' : ''} ${isError ? 'error' : ''}`}>
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
