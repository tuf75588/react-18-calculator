import React from 'react';

function App() {
  const [value, setValue] = React.useState<any | null>(0);
  const [displayValue, setDisplay] = React.useState<any | null>('0');
  const [operator, setOperator] = React.useState<any | null>(null);
  const [waitingForOperand, setWaitingForOperand] = React.useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setOperation('');
  };
  const clearAll = () => {
    setValue(0);
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

  const performOperation = (operator: string) => {
    setOperation(operator);
    setWaitingForOperand(true);
    const nextValue = parseFloat(displayValue);
    const prevValue = parseFloat(value);
    const operations: any = {
      '/': (previousValue: number, nextValue: number) => previousValue / nextValue,
      '*': (previousValue: number, nextValue: number) => previousValue * nextValue,
      '+': (previousValue: number, nextValue: number) => previousValue + nextValue,
      '=': (nextValue: number) => nextValue,
    };
    const computedValue = operations[operator](nextValue, prevValue);
  };
  return (
    <React.Fragment>
      <pre style={{ color: 'white', fontSize: '1.2rem' }}>
        {JSON.stringify({ operation, displayValue, waitingForOperand, value }, null, 2)}
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
          <button className={operation === '/' ? 'active' : ''} onClick={() => performOperation('/')}>
            /
          </button>
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
          <button className={operation === '*' ? 'active' : ''} onClick={() => performOperation('*')}>
            X
          </button>
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
          <button className={operation === '-' ? 'active' : ''} onClick={() => performOperation('-')}>
            -
          </button>
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
          <button className={operation === '+' ? 'active' : ''} onClick={() => performOperation('+')}>
            +
          </button>
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
