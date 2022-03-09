import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal/Fade";

function Section({title,description,bgImage,rightBtnText,leftBtnText}) {
  return (
    <Wrap bg={bgImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section
const Wrap = styled.div`
width: 100%;
height: 100%;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image:${props => `url("images/${props.bg}")`};
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const ItemText = styled.div`
color: black;
opacity: 0.8;
padding-top:20vh;
text-align: center;
`
const Buttons = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
width:224px;
height:40px;
background-color: rgb(23,26,32,0.8);
color: white;
border-radius: 150px;
opaicty: 0.8;
display: flex;
justify-content: center;
align-items: center;
margin-right: 8px;
margin-bottom: 20px;
cursor: pointer;

`
const RightButton = styled(LeftButton)`
background-color: white;
color: rgb(23,26,32,0.8);
opacity: 0.8;
`
const DownArrow = styled.img`
  width: 40px;

  overflow-x: hidden;
  animation: animateDown 2s ease-in-out 1s infinite alternate both;
`;