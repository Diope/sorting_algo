import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    background-image: linear-gradient(to right, #051421, #042727);
    padding: 15px;
`;

export const Button = styled.button`
    border: 2px white solid;
    height: 40px;
    border-radius: 20px;
    align-items: center;
    margin-left: 8px;
    padding: 4px 16px; 
    background-color: transparent;
    color: white;
    cursor: pointer;
    outline: none;
    &:hover {
        color: #051421;
        background-color: white;
    }
`;

export const GenerateButton = styled.button`
    height: 40px;
    border: none;
    border-radius: 20px;
    align-items: center;
    padding: 4px 16px; 
    background-color: #00B39B;
    color: #051421;
    cursor: pointer;
    outline: none;
    &:hover {
        color: #00806E;
        background-color: white;
    }
`;

export const SortGroupWrapper = styled.div`
    display: inline-flex;
    align-content: center;
    padding-left: 25px;
    justify-content: space-between;
`;