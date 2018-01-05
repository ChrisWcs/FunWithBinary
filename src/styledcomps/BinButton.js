import styled from 'styled-components';

const BinButton = styled.button`
    background: ${props => props.feedBack ? 'green' : 'red'};
`;

export default BinButton;