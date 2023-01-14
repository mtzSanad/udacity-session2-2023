import React, { useState } from 'react';

const CounterInteraction = ({ increment }) => {
  return <button onClick={increment}>+</button>;
};

export default CounterInteraction;
