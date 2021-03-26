
import React, {useState, useEffect} from 'react';
import './App.style.css';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';

function App() {
  const [size, setSize ] = useState(5);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    updateList();
  }, [size]);

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
    const randomArr = Array.from({length: size}, () => Math.floor(Math.random() * 100));
    setArr(randomArr);
    console.log("Size of array: ", size)
    console.log('Random Array: ', randomArr);
  }
  return (
    <mainContainer>
      <Header rangeChange={rangeChange}/>
      <Body data={arr} />
    </mainContainer>
  );
}

const mainContainer = styled.div`
  padding: 0 10px;
  width: 100%;
`;

export default App;
