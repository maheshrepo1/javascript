import { useMemo, useState } from 'react';

function ExpensiveComponent({ a, b }) {
  // This function will be expensive to compute, so we want to memoize its result
  const expensiveValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [a, b]);

  return <p>Expensive value: {expensiveValue}</p>;
}

function MyComponent() {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleInputChange(event) {
    if (event.target.name === 'a') {
      setA(parseInt(event.target.value));
    } else {
      setB(parseInt(event.target.value));
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <label>
        A:
        <input type="number" name="a" value={a} onChange={handleInputChange} />
      </label>
      <label>
        B:
        <input type="number" name="b" value={b} onChange={handleInputChange} />
      </label>
      <button onClick={handleClick}>Increment</button>
      <ExpensiveComponent a={a} b={b} />
    </div>
  );
}
