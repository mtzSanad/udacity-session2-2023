import { useState } from 'react';
import Counter from './Counter';
import CounterInteraction from './CounterInteraction';
import CounterView from './CounterView';
import Form from './Form';
import UseEffectSample from './UseEffectSample';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div>
      <Counter />
      {/* <hr />
      <Counter /> */}
      <hr />
      <CounterView counter={counter} />
      <CounterInteraction increment={increment} />
      {/* <hr />
      <CounterView counter={counter} />
      <CounterInteraction increment={increment} /> */}
      <hr />
      <Form />
      <hr />
      <UseEffectSample />
    </div>
  );
}

export default App;
