import React from 'react';

function App() {
  const [value, setValue] = React.useState<any | null>(null);
  const [displayValue, setDisplay] = React.useState<any | null>('0');
  const [operator, setOperator] = React.useState<any | null>(null);
  const [waitingForOperand, setWaitingForOperand] = React.useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
  };
  const clearAll = () => {
    setValue(null);
    setDisplay('0');
    setOperator(null);
    setWaitingForOperand(false);
  };
  const toggleSign = () => setDisplay(displayValue * -1);
  //decimal point
  const handleDot = () => {
    if (waitingForOperand) {
      setDisplay('.');
      setWaitingForOperand(false);
    } else if (!/\./.test(displayValue)) {
      setDisplay(displayValue + '.');
    }
  };
  const inputPercent = () => {
    const toNum: number = parseFloat(displayValue);
    setDisplay(String(toNum / 100));
  };

  const performOperation = (nextOperator: string) => {
    const operations: any = {
      '/': (previousValue: number, nextValue: number) => previousValue / nextValue,
      '*': (previousValue: number, nextValue: number) => previousValue * nextValue,
      '+': (previousValue: number, nextValue: number) => previousValue + nextValue,
      '=': (previousValue: number, nextValue: number) => nextValue,
    };
    const inputValue = parseFloat(displayValue);
    if (value === null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = operations[operator](currentValue, inputValue);
      setValue(newValue);

      setDisplay(String(newValue));
    }
    setWaitingForOperand(true);
    setOperator(nextOperator);
  };
  return (
    <React.Fragment>
      <pre style={{ color: 'white', fontSize: '1.2rem' }}>
        {JSON.stringify({ operator, displayValue, waitingForOperand, value }, null, 2)}
      </pre>
      <div className="calc">
        <div className="calc-btn display">{displayValue}</div>
        <div className="calc-btn">
          <button onClick={() => clearAll()}>AC</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => toggleSign()}>+/-</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputPercent()}>%</button>
        </div>
        <div className="calc-btn">
          <button className={operator === '/' ? 'active' : ''} onClick={() => performOperation('/')}>
            /
          </button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputDigit('7')}>7</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputDigit('8')}>8</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputDigit('9')}>9</button>
        </div>
        <div className="calc-btn">
          <button className={operator === '*' ? 'active' : ''} onClick={() => performOperation('*')}>
            X
          </button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputDigit('4')}>4</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputDigit('5')}>5</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputDigit('6')}>6</button>
        </div>
        <div className="calc-btn">
          <button className={operator === '-' ? 'active' : ''} onClick={() => performOperation('-')}>
            -
          </button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputDigit('1')}>1</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputDigit('2')}>2</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => inputDigit('3')}>3</button>
        </div>
        <div className="calc-btn">
          <button className={operator === '+' ? 'active' : ''} onClick={() => performOperation('+')}>
            +
          </button>
        </div>
        <div className="calc-btn zero">
          <button onClick={() => inputDigit('0')}>0</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => handleDot()}>.</button>
        </div>
        <div className="calc-btn">
          <button onClick={() => performOperation('=')}>=</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
