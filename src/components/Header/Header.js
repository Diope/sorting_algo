
import {Container, Button, SortGroupWrapper, GenerateButton} from './Header.styles';

export default function Header({rangeChange}) {

    const handleGenerateArray = () => {
        console.log("Button clicked");
    }
    return (
        <Container>
            <GenerateButton onClick={handleGenerateArray}>Generate New Array</GenerateButton>
            <Button onClick={rangeChange}>Range</Button>
            <SortGroupWrapper>
                <Button onClick={handleGenerateArray}>Bubble Sort</Button>
                <Button onClick={handleGenerateArray}>Quick Sort</Button>
                <Button onClick={handleGenerateArray}>Heap Sort</Button>
                <Button onClick={handleGenerateArray}>Merge Sort</Button>
            </SortGroupWrapper>
        </Container>
        
    )
}
