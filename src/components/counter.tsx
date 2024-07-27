import { useState } from "react";

const Counter = () => {
  const colors = [
    'bg-inherit',
    'bg-green-600'
  ];

  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => (count < 3 ? count + 1 : count));
  };

  return (
    <>
      
      <button onClick={increase} className={`rounded-3xl text-2xl font-bold w-full h-8 flex justify-center items-center border-solid border-2 ${counter === 3 ? colors[1] : colors[0]}`}>{counter}/3</button>
    </>
  );
};

export default Counter;
