import styled from 'styled-components';

export const Bar = styled.div`
    height: ${(props) => props.height};
    width: 1%;
    background-color: ${(props) => props.color || '#00B39B'};
    margin: 0 4px;
`;

export const Container = styled.div`
    margin: 0 50px;
    display: flex;
    justify-content: center;
`