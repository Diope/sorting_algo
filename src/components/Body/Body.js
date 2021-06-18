import React from 'react';
import {Bar, Container} from './Body.styles';
// import styled from 'styled-components';


export default function Body({data}) {
    return (
        <Container>
            {data.map((size, idx) => (
                <Bar height={`${size}px`} key={idx}/>
            ))}
        </Container>
    )
}

// const Bar = styled.div`
//     height: ${(props) => props.height};
//     width: 5%;
//     background-color: ${(props) => props.color || '#00B39B'};
// `;
