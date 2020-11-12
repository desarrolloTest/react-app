import styled from 'styled-components'
//import { createBreakpoint, createMap } from 'styled-components-breakpoint';
//const breakpoints = {xs: 0,sm: 576,md: 768,lg: 992,xl: 1200};
//const breakpoint = createBreakpoint(breakpoints);
//const map = createMap(breakpoints);

const ContainerTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
    font-family: sans-serif;
    border-width: 0px 0px 0px 4px;
    border-color: lightseagreen;
    border-style: solid;
    padding-left: 10px;
`;

const ContainerBubtitle = styled.div`
    font-size: 10px;
    font-family: sans-serif;
    margin-top: 10px;
`;

function Header() {
    return (
        <div>
            <ContainerTitle>Post Management</ContainerTitle>
            <ContainerBubtitle>Select the social media on which you want to publish</ContainerBubtitle>
        </div>
    );
}

export default Header;