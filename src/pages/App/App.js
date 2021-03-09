
import React, {useState, useEffect} from 'react';
import './App.style.css';

import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';

function App() {
  const [size, setSize ] = useState(5);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    updateList();
  }, [size])

  const rangeChange = () => {
      const userGraphSize = prompt('Enter graph size');
      if (isNaN(userGraphSize)) {
        alert('Please enter a numerical value')
        setSize(null);
      } else {
        setSize(userGraphSize);
      }
  };

  const updateList = () => {
    const userArraySize = Array.from({length: size}, () => Math.floor(Math.random() * 100));
    setArr(userArraySize);
    console.log("Size of array: ", size)
    console.log('Random Array: ', userArraySize);
  }
  return (
    <div>
      <Header rangeChange={rangeChange}/>
      <Body data={arr} />
    </div>
  );
}

export default App;
