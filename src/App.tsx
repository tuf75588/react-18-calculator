import React from 'react';

function App() {
  const [displayValue, setDisplay] = React.useState<any | null>('0');
  const [operation, setOperation] = React.useState<string | null>('');
  const [waitingForOperand, setWaitingForOperand] = React.useState(false);
  const addDigit = (digit: string) =>
    setDisplay((previousState: string) => {
      return previousState === '0' ? digit : previousState + digit;
    });
  const clearDisplay = () => setDisplay('0');
  const toggleSign = () => setDisplay(displayValue * -1);
  //decimal point
  const handleDot = () => {
    setDisplay(displayValue + '.');
  };
  const inputPercent = () => {
    const toNum: number = parseFloat(displayValue);
    setDisplay(String(toNum / 100));
  };
  return (
    <React.Fragment>
      <pre style={{ color: 'white', fontSize: '1.2rem' }}>
        {JSON.stringify(
          { operation, displayValue, waitingForOperand },
          null,
          2
        )}
      </pre>
      <div className="calc">
        <div className="calc-btn display">{displayValue}</div>
        <div className="calc-btn">
          <button onClick={() => clearDisplay()}>AC</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => toggleSign()}>+/-</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputPercent()}>%</button>
        </div>
        <div className="calc-btn">
          <button>/</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => addDigit('7')}>7</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => addDigit('8')}>8</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => addDigit('9')}>9</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => addDigit('')}>X</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => addDigit('4')}>4</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => addDigit('5')}>5</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => addDigit('6')}>6</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => setOperation('-')}>-</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => addDigit('1')}>1</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => addDigit('2')}>2</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => addDigit('3')}>3</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => setOperation('+')}>+</button>
        </div>
        <div className="calc-btn zero">
          <button onClick={() => addDigit('0')}>0</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => handleDot()}>.</button>
        </div>
        <div className="calc-btn">
          <button>=</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
