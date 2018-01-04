import styled from 'styled-components';

const BinButton = styled.button`
    background: ${props => props.color ? 'green' : 'red'};
`;

export default BinButton;