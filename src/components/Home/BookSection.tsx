import React from 'react';
import styled from "styled-components";
import cover from "../../assets/images/cover.jpg"
import side from "../../assets/images/side.jpg"
import back from "../../assets/images/back.jpg"

const BookSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const BookContainer = styled.div`
  position: relative;
  width: 383px;
  height: 567px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  
  &:hover {
    transform: rotateY(35deg);
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: rotateY(180deg);
  }
`;

const BookCover = styled.img`
  position: absolute;
  width: 60px;
  height: 100%;
  transform-origin: left;
  background: url(side.jpg);
  background-position: center;
  transform: rotateY(90deg);
`;

const BookBackCover = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  background: url(back.jpg);
  background-position: center;
  transform: rotateY(180deg) translateZ(60px);
`;

const BookImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BookComponent: React.FC = () => {
  return (
    <BookSection>
      <BookContainer>
        <BookCover src={side}></BookCover>
        <BookBackCover src={back} />
        <BookImage src={cover} alt="Book" />
      </BookContainer>
    </BookSection>
  );
};

export default BookComponent;