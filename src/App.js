import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const Container = styled.div`
    padding-left:10px;
    padding-right:10px;
    padding-top:20px;
`;

function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;
