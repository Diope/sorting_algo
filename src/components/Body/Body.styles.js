import styled from 'styled-components';

const Bar = styled.div`
    height: ${props => props.height};
    width: 10%;
    color: ${props => props.color || '#00B39B'};
`;