
import {Container, Button, SortGroupWrapper, GenerateButton} from './Header.styles';

export default function Header({rangeChange, generateRandomArray, handleBubbleSort}) {

    const handleGenerateArray = () => {
        console.log("Button clicked");
    }
    return (
        <Container>
            <GenerateButton onClick={generateRandomArray}>Generate New Array</GenerateButton>
            <Button onClick={rangeChange}>Range</Button>
            <SortGroupWrapper>
                <Button onClick={handleBubbleSort}>Bubble Sort</Button>
                <Button onClick={handleGenerateArray}>Quick Sort</Button>
                <Button onClick={handleGenerateArray}>Heap Sort</Button>
                <Button onClick={handleGenerateArray}>Merge Sort</Button>
            </SortGroupWrapper>
        </Container>
        
    )
}
