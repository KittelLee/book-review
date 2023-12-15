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

  <BackColor>
    <SearchSection>
      <input placeholder="검색창" />
    </SearchSection>

    <BookAddSection>
      <button onClick={openModal}>북추가</button>
    </BookAddSection>


    <BookMainWrap>
      <BookWrap>
        <BookSection>
          <BookLeftSection>
            <ImgSection>
              <img src={CatImg} onClick={openModal} />
            </ImgSection>
            <InfoSection onClick={openModal}>
              <p>책제목: 고양이3</p>
              <p>저자: 집사3</p>
              <p>출판사: 집사협회</p>
              <p>가격: 1004원</p>
            </InfoSection>
          </BookLeftSection>
          <BookRightSection>
          <ImgSection>
              <img src={CatImg} onClick={openModal} />
            </ImgSection>
            <InfoSection onClick={openModal}>
              <p>책제목: 고양이3</p>
              <p>저자: 집사3</p>
              <p>출판사: 집사협회</p>
              <p>가격: 1004원</p>
            </InfoSection>
          </BookRightSection>
          <BookLeftSection>
            <ImgSection>
              <img src={CatImg} onClick={openModal} />
            </ImgSection>
            <InfoSection onClick={openModal}>
              <p>책제목: 고양이3</p>
              <p>저자: 집사3</p>
              <p>출판사: 집사협회</p>
              <p>가격: 1004원</p>
            </InfoSection>
          </BookLeftSection>
          <BookRightSection>
          <ImgSection>
              <img src={CatImg} onClick={openModal} />
            </ImgSection>
            <InfoSection onClick={openModal}>
              <p>책제목: 고양이3</p>
              <p>저자: 집사3</p>
              <p>출판사: 집사협회</p>
              <p>가격: 1004원</p>
            </InfoSection>
          </BookRightSection>
        </BookSection>
        <BookSection>
          <BookLeftSection>
            <ImgSection>
              <img src={CatImg} onClick={openModal} />
            </ImgSection>
            <InfoSection onClick={openModal}>
              <p>책제목: 고양이3</p>
              <p>저자: 집사3</p>
              <p>출판사: 집사협회</p>
              <p>가격: 1004원</p>
            </InfoSection>
          </BookLeftSection>
          <BookRightSection>
          <ImgSection>
              <img src={CatImg} onClick={openModal} />
            </ImgSection>
            <InfoSection onClick={openModal}>
              <p>책제목: 고양이3</p>
              <p>저자: 집사3</p>
              <p>출판사: 집사협회</p>
              <p>가격: 1004원</p>
            </InfoSection>
          </BookRightSection>
          <BookLeftSection>
            <ImgSection>
              <img src={CatImg} onClick={openModal} />
            </ImgSection>
            <InfoSection onClick={openModal}>
              <p>책제목: 고양이3</p>
              <p>저자: 집사3</p>
              <p>출판사: 집사협회</p>
              <p>가격: 1004원</p>
            </InfoSection>
          </BookLeftSection>
          <BookRightSection>
          <ImgSection>
              <img src={CatImg} onClick={openModal} />
            </ImgSection>
            <InfoSection onClick={openModal}>
              <p>책제목: 고양이3</p>
              <p>저자: 집사3</p>
              <p>출판사: 집사협회</p>
              <p>가격: 1004원</p>
            </InfoSection>
          </BookRightSection>
        </BookSection>
      </BookWrap>

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
    </BookMainWrap>
  </BackColor>
  );
}

export default List;

const BackColor = styled.div`
  background-color: #FFFFFF
`;

const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  input {
    width: 300px;
    height: 20px;
  }
`;

const BookAddSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  button {
    width: 150px;
    height: 50px;
    &:hover {
      cursor: pointer;
      background-color: #FFFFFF
    }
  }
`


const BookMainWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const BookWrap = styled.div`
  width: 90%;
  // background-color: lightgray;
`;

const BookSection = styled.div`
  display: flex;
  flex-direction: row;
  // margin: 20px;
  width: 100%;
  // border: 1px solid red;
`;

const BookLeftSection = styled.div`
  display: flex;
  width: 50%;
  // height: 1px;
  padding: 10px;
  // border: 1px solid blue;
`;

const ImgSection = styled.div`
  
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: yellow;
  img {
    width: 140px;
    height: 200px;
    cursor: pointer;
  }
`;

const InfoSection = styled.div`
  width: 50%;
  padding: 10px;
  // background-color: #fff;
  p {
    cursor: pointer;
    font-weight: bold;
  }
`;

const BookRightSection = styled.div`
  display: flex;
  padding: 10px;
  width: 50%;
  // background-color: skyblue;
  // border: 1px solid green;
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
