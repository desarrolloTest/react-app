import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faLaugh} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*import FontAwesome, { 
    Icons,
    IconTypes
  } from '@fortawesome/free-brands-svg-icons';//*/

import styled from 'styled-components'
import { createBreakpoint } from 'styled-components-breakpoint';
const breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 };
const breakpoint = createBreakpoint(breakpoints);

const imagePost = process.env.PUBLIC_URL + '/assets/images/bakery.png';

const Container = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: block;

    ${breakpoint('md')`
        display: flex;
    `}
`;

const SocialMediaSection = styled.div`
    width:40%;

    ${breakpoint('sm')`
        width:100%;
    `}
`;

const DataPostSection = styled.div`
    width:60%;

    ${breakpoint('sm')`
        width:100%;
    `}
`;

const ZoneSocialMedia = styled.div`
    border: 1px solid lightgray;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;
    
`;

const Input = styled.input`
    border-radius: 10px;
`;

const Label = styled.label`
    margin-left: 10px;
`;

const ContianerPost = styled.div`
    -webkit-box-shadow: 6px 6px 10px 0px rgba(128,128,128,0.5);
    -moz-box-shadow: 6px 6px 10px 0px rgba(128,128,128,0.5);
    box-shadow: 6px 6px 10px 0px rgba(128,128,128,0.5);
    
    height: auto;
    border-radius: 5px;
    margin-left: 30px;
    padding: 25px;
`;

const TitlePost = styled.div`
    margin-bottom: 10px;
`;

const ImagePost = styled.div`
    height: auto;
    text-align: center;
    margin-bottom: 20px;
`;

const ImageResponsive = styled.img`
    max-width: 100%;
    height: auto;
`;

const TextArea = styled.textarea`
    width:70%;
    border-radius: 5px;

    ::placeholder{
        line-height: 30px;
    }
`;

const Button = styled.button`
    border-radius: 25px;
    text-align: center;
    padding: 10px;
    border: 1px solid cornflowerblue;
    color: white;
    background: cornflowerblue;
    width:30%;
    margin-left: 30px;
`;

const ActionsPost = styled.div`
    
    text-align:right;
    display: flex;
`;

const AditionalPost = styled.div`
    
    text-align:right;
    margin-top: 10px;
`;

/*-------------------------------- */
const countText = event => {
    console.log('EVENT KEY UP');
    let currentText = document.getElementById("textPost").value;
    console.log('currentText=>',currentText);

    document.getElementById('countText').innerHTML = currentText.length;
};

//<FontAwesomeIcon icon={faLaugh}></FontAwesomeIcon>

function Content() {
    return (
        <Container>
            <SocialMediaSection>
                <ZoneSocialMedia>
                    <Input type="checkbox" id="chkFacebook"/>
                    &nbsp;
                    <FontAwesomeIcon icon={faFacebookSquare} style={{ color: 'blue' }}/>
                    &nbsp;
                    <Label for="chkFacebook">Publish on Facebook</Label>
                </ZoneSocialMedia>
                <ZoneSocialMedia>
                    <Input type="checkbox" id="chkInstagram"/>
                    &nbsp;
                    <FontAwesomeIcon icon={faInstagram} style={{ color: 'red' }}/>
                    &nbsp;
                    <Label for="chkInstagram">Publish on Instagram</Label>
                </ZoneSocialMedia>
                <ZoneSocialMedia>
                    <Input type="checkbox" id="chkTwitter"/>
                    &nbsp;
                    <FontAwesomeIcon icon={faTwitter} style={{ color: 'cyan' }}/>
                    &nbsp;
                    <Label for="chkTwitter">Publish on Twitter</Label>
                </ZoneSocialMedia>
            </SocialMediaSection>
            <DataPostSection>
                <ContianerPost>
                    <TitlePost>Bakery Day</TitlePost>
                    <ImagePost>
                        
                        <ImageResponsive src={imagePost} alt="Bakery Day"></ImageResponsive>
                    </ImagePost>
                    <ActionsPost>
                        <TextArea id="textPost" rows="2" cols="40" placeholder="Write your post message" onKeyUp={countText}></TextArea>
                        <Button>Edit Image</Button>
                    </ActionsPost>
                    <AditionalPost>
                        
                        <FontAwesomeIcon icon={faLaugh}></FontAwesomeIcon>
                        &nbsp;&nbsp;<span id="countText">0</span>/250
                    </AditionalPost>
                </ContianerPost>
            </DataPostSection>
        </Container>
    );
}

export default Content;