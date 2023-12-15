import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Review from "../components/Modal/Review";
import CatImg from "../assets/images/test5.jpg";
import BookAdd from "../components/Modal/BookAdd";

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
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

const customStyles2 = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "50%",
    width: "40%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

Modal.setAppElement("#root");

function List() {
  const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);
  const [bookAddModalIsOpen, setBookAddModalIsOpen] = useState(false);

  function openReviewModal() {
    setReviewModalIsOpen(true);
  }

  function closeReviewModal() {
    setReviewModalIsOpen(false);
  }

  function openBookAddModal() {
    setBookAddModalIsOpen(true);
  }

  function closeBookAddModal() {
    setBookAddModalIsOpen(false);
  }

  return (
    <ListWrap>
      <img src={CatImg} onClick={openReviewModal} />
      <Modal
        isOpen={reviewModalIsOpen}
        onRequestClose={closeReviewModal}
        style={customStyles}
      >
        <Review />
        <CloseBtn>
          <button onClick={closeReviewModal}>X</button>
        </CloseBtn>
      </Modal>

      <img src={CatImg} onClick={openBookAddModal} />
      <Modal
        isOpen={bookAddModalIsOpen}
        onRequestClose={closeBookAddModal}
        style={customStyles2}
      >
        <BookAdd closeBookAddModal={closeBookAddModal} />
        <CloseBtn>
          <button onClick={closeBookAddModal}>X</button>
        </CloseBtn>
      </Modal>

      <img src={CatImg} onClick={openReviewModal} />
      <img src={CatImg} onClick={openReviewModal} />
      <img src={CatImg} onClick={openReviewModal} />
    </ListWrap>
  );
}

export default List;

const ListWrap = styled.div`
  img {
    height: 300px;
    margin: 180px;
    cursor: pointer;
  }
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
