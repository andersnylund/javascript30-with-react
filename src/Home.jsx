import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  a {
    text-decoration: none;
    color: inherit;
    color: #555;
  }
`;

const PosedContent = posed.section({
  after: { y: 0, opacity: 1 },
  before: { y: -50, opacity: 0 },
});

const Content = styled(PosedContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  text-align: center;
  height: 3rem;
`;

const Home = () => (
  <Wrapper>
    <Content pose="after" initialPose="before">
      <h1>JavaScript30 With React</h1>
      <p>Small stuff built by me with the aim to learn CSS</p>
      <p>
        Ideas are from <a href="https://javascript30.com/">JavaScript30</a>{' '}
        course and <a href="https://100dayscss.com/">100 Days CSS Challenge</a>{' '}
      </p>
    </Content>
    <Footer>
      <a href="https://www.github.com/andersnylund/javascript30-with-react">
        Anders Nylund
      </a>
    </Footer>
  </Wrapper>
);

export default Home;
