import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Review from "../components/Modal/Review";
import CatImg from "../assets/images/test5.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    width: "80%",
  },
};

Modal.setAppElement("#root");

function List() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

return (
  <ListWrap>
    <Bookdiv>
    <BookContainer onClick={openModal}>
        <Book src={CatImg} />
        <BookInfo>
          <p>책제목: 고양이</p>
          <p>저자: 집사</p>
          <p>출판사: 집사협회</p>
          <p>가격: 1004원</p>
        </BookInfo>
      </BookContainer>

      <BookContainer>
        <Book src={CatImg} onClick={openModal} />
        <BookInfo>
          <p>책제목: 고양이</p>
          <p>저자: 집사</p>
          <p>출판사: 집사협회</p>
          <p>가격: 1004원</p>
        </BookInfo>
      </BookContainer>

      {/* <BookContainer>
        <Book src={CatImg} onClick={openModal} />
        <BookInfo>
          <p>책제목: 고양이</p>
          <p>저자: 집사</p>
          <p>출판사: 집사협회</p>
          <p>가격: 1004원</p>
        </BookInfo>
      </BookContainer>

      <BookContainer>
        <Book src={CatImg} onClick={openModal} />
        <BookInfo>
          <p>책제목: 고양이</p>
          <p>저자: 집사</p>
          <p>출판사: 집사협회</p>
          <p>가격: 1004원</p>
        </BookInfo>
      </BookContainer> */}
    </Bookdiv>

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <Review />
      <CloseBtn>
        <button onClick={closeModal}>X</button>
      </CloseBtn>
    </Modal>
  </ListWrap>
);
}

export default List;

const ListWrap = styled.div``;

const Bookdiv = styled.div``;

const BookContainer = styled.div`
position: relative;
margin: 20px;
width: 500px;
left: 0;
`;

const Book = styled.img`
height: 300px;
cursor: pointer;
`;

const BookInfo = styled.div`
cursor: pointer;
// position: absolute;
bottom: 0;
// left: 30%;
// transform: translateX(-50%);
// background: rgba(255, 255, 255, 0.8);
padding: 10px;
text-align: center;
// width: 10%;
`;

const CloseBtn = styled.div`
position: absolute;
top: 10px;
right: 10px;
button {
  border: none;
  background-color: #fff;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    color: red;
  }
}
`;
