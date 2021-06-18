import React, {useState, useEffect} from 'react';
import './App.style.css';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';

import {bubbleSort} from '../../Utilities/sorts';
import {wait} from '../../Utilities/misc'
import SelectInput from '@material-ui/core/Select/SelectInput';

function App() {
  const rand = Math.floor(Math.random() * 150) + 5;

  const [size, setSize ] = useState(rand);
  const [arr, setArr] = useState([]);

  const [currentNext, setCurrentNext] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null);

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


  const handleBubbleSort = async () => {
    const leng = arr.length;
    for (let i = 0; i < leng; i++) {
        for (let j = 0; j < leng; j++) {
            setCurrentIndex(i);
            setCurrentNext(i + 1);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
            setArr([...arr])
        }
        await wait();
    }
    setCurrentIndex(null)
    setCurrentNext(null)
  }

  return (
    <MainContainer>
      <Header
        rangeChange={rangeChange}
        generateRandomArray={generateRandomArray}
        handleBubbleSort={handleBubbleSort}
      />
      <Body data={arr} />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
`;

export default App;
