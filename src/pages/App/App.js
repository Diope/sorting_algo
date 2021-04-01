
import React, {useState, useEffect} from 'react';
import './App.style.css';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';

function App() {
  const rand = Math.floor(Math.random() * 150) + 5;

  const [size, setSize ] = useState(rand);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    updateList()
  }, [size]);

  const rangeChange = () => {
      const userGraphSize = prompt('Enter a numerical value from 5 to 150');
      if (isNaN(userGraphSize)) {
        alert('Entry must be a numerical value')
        setSize(null);
      } else {
        if (userGraphSize < 5 || userGraphSize > 150 ) {
          alert('Please enter a value between 5 and 150');
          rangeChange()
        } else {
          setSize(userGraphSize);
        }
      }
  };

  const generateRandomArray = () => {
    setSize(rand);
  }

  const updateList = () => {
    const randomArr = Array.from({length: size}, () => Math.floor(Math.random() * 500) + 5); // The (* 500) is for bar length
    setArr(randomArr);
    // console.log("Size of array: ", size)
    // console.log('Random Array: ', randomArr);
  }
  return (
    <mainContainer>
      <Header
        rangeChange={rangeChange}
        generateRandomArray={generateRandomArray}
      />
      <Body data={arr} />
    </mainContainer>
  );
}

const mainContainer = styled.div`
  padding: 0 10px;
  width: 100%;
`;

export default App;
