import React from 'react';

function App() {
  const [displayValue, setDislpayValue] = React.useState('0');
  const addDigit = (digit: string) => setDislpayValue((previousState: string) => {
     return previousState === '0' ? digit : previousState + digit;
  }); 
  const clearDisplay = () => setDislpayValue('0');
  return (
    <div className='calc'>
      <div className='calc-btn display'>{displayValue}</div>
      <div className='calc-btn'>
        <button onClick={() => clearDisplay()}>AC</button>
      </div>
      <div className='calc-btn'>
        <button>+/-</button>
      </div>
      <div className='calc-btn'>
        <button>%</button>
      </div>
      <div className='calc-btn'>
        <button>/</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('7')}>7</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('8')}>8</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('9')}>9</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('')}>X</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('4')}>4</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('5')}>5</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('6')}>6</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('7')}>-</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('1')}>1</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('2')}>2</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('3')}>3</button>
      </div>
      <div className='calc-btn'>
        <button onClick={() => addDigit('7')}>+</button>
      </div>
      <div className='calc-btn zero'>
        <button onClick={() => addDigit('0')}>0</button>
      </div>
      <div className='calc-btn'>
        <button>.</button>
      </div>
      <div className='calc-btn'>
        <button>=</button>
      </div>
    </div>
  );
}

export default App;
