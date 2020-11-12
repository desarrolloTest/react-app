import styled from 'styled-components'
import {createBreakpoint, createMap} from 'styled-components-breakpoint';

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const breakpoint = createBreakpoint(breakpoints);
const map = createMap(breakpoints);

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 16px;

  ${breakpoint('md')`
    font-size: 18px;
  `}
`;

function Boton() {
    return (
        <Button>Boton Importado</Button>
    );
  }

export default Boton;