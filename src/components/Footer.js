import styled from 'styled-components';
import { createBreakpoint } from 'styled-components-breakpoint';
const breakpoints = {xs: 0,sm: 576,md: 768,lg: 992,xl: 1200};
const breakpoint = createBreakpoint(breakpoints);
//const map = createMap(breakpoints);

const ContainerFooter = styled.div`
    padding-bottom:10px;
    display: block;

    ${breakpoint('sm')`
        display: flex;
    `}
`;

const CancelSection = styled.div`
    width:100%;
    text-align:center;
    
    ${breakpoint('sm')`
        width:50%;
        text-align:left;
    `}
`;

const PreviewSection = styled.div`
    width:100%;
    text-align:center;
    
    ${breakpoint('sm')`
        width:50%;
        text-align:right;
    `}
`;

const Button = styled.button`
    border-radius: 25px;
    text-align: center;
    padding: 10px;
    border: 1px solid cornflowerblue;

    color: ${props => props.theme.color};
    background: ${props => props.theme.back};
`;

const themeWhite = {color: "cornflowerblue", back: "white"};
const themeBlue = {color: "white", back: "cornflowerblue"};

const validate = event => {
    console.log('EVENT CLICK');
};

function Footer() {

    return (
        <ContainerFooter>
            <CancelSection>
                <Button theme={themeWhite}>Cancel Post</Button>
            </CancelSection>
            <PreviewSection>
                <Button theme={themeBlue} id="btnPreviewPost" onClick={validate}>Preview Post before publishing</Button>
            </PreviewSection>
        </ContainerFooter>
            
    );
}

export default Footer;