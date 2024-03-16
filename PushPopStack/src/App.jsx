import React, { useState } from 'react';
import './App.css';

function Stack() {

  const [stack, setStack] = useState([]);
  const [newValue, setNewValue] = useState('');
  const [tables, setTables] = useState(Array(10).fill(''));

  const handlePush = () => {
    if (newValue.trim() !== '') {
      if (stack.length >= 10) {
        alert('Stack is full');
        return;
      }

      const newStack = [...stack];
      newStack.push(newValue);
      setStack(newStack);
      setNewValue('');
      const newBoxes = [...tables];
      if (newStack.length <= 10) {
        newStack.forEach((value, index) => {
          newBoxes[9 - index] = value;
        });
      } else {
        for (let i = 0; i < 10; i++) {
          newBoxes[9 - i] = newStack[newStack.length - 10 + i];
        }
      }
      setTables(newBoxes);
    } else {
      alert('Input is empty');
    }
  };

  const handlePop = () => {
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);

    const newBoxes = [...tables];
    if (newStack.length < 10) {
      newStack.forEach((value, index) => {
        newBoxes[9 - index] = value;
      });
      for (let i = newStack.length; i < 10; i++) {
        newBoxes[9 - i] = '';
      }
    } else {
      for (let i = 0; i < 10; i++) {
        newBoxes[9 - i] = newStack[newStack.length - 10 + i];
      }
    }
    setTables(newBoxes);
  };

  return (
    <div className='base'>
      <main className="main">
        <input className="input" type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
        <div className="actions">
          <button className='popBtn' onClick={handlePop}>Pop</button>
          <button className='pushBtn' onClick={handlePush}>Push</button>
        </div>
        <div className="stack">
          {tables.map((value, index) => (
            <span key={index} className='box'>{value}</span>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Stack;