import styled from "styled-components";
import cover from "../../../assets/images/book/cover4.jpg";
import side from "../../../assets/images/book/side4.jpg";
import back from "../../../assets/images/book/back4.jpg";

function BookComponent() {
  return (
    <BookSection>
      <BookContainer>
        <BookCover src={side}></BookCover>
        <BookBackCover src={back} />
        <BookImage src={cover} alt="Book" />
      </BookContainer>
    </BookSection>
  );
}

export default BookComponent;

const BookSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const BookContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
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
  background-position: center;
  transform: rotateY(90deg);
`;

const BookBackCover = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
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
