import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Review from "../components/Modal/Review";
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
    height: "54%",
    width: "40%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

interface Book {
  imageUrl: string;
  bookTitle: string;
  author: string;
  publisher: string;
  price: string;
}

Modal.setAppElement("#root");

function List() {
  const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);
  const [bookAddModalIsOpen, setBookAddModalIsOpen] = useState(false);
  const [newBook, setNewBook] = useState<Book | null>(null);

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
    <BackColor>
      <SearchSection>
        <input placeholder="검색창" />
      </SearchSection>

      <BookAddSection>
        <button onClick={openBookAddModal}>책 추가하기</button>
      </BookAddSection>

      <BookMainWrap>
        <BookWrap>
          <BookSection>
            <BookLeftSection>
              {newBook && typeof newBook.imageUrl !== "undefined" ? (
                <>
                  <ImgSection onClick={openReviewModal}>
                    {newBook.imageUrl ? (
                      <img src={newBook.imageUrl} alt="책 이미지" />
                    ) : (
                      <p>이미지가 없습니다.</p>
                    )}
                  </ImgSection>
                  <InfoSection onClick={openReviewModal}>
                    <p>책 제목: {newBook.bookTitle}</p>
                    <p>저자: {newBook.author}</p>
                    <p>출판사: {newBook.publisher}</p>
                    <p>가격: {newBook.price}원</p>
                  </InfoSection>
                </>
              ) : (
                <p>책이 추가되지 않았습니다.</p>
              )}
            </BookLeftSection>
            <BookRightSection>
              {newBook && typeof newBook.imageUrl !== "undefined" ? (
                <>
                  <ImgSection onClick={openReviewModal}>
                    {newBook.imageUrl ? (
                      <img src={newBook.imageUrl} alt="책 이미지" />
                    ) : (
                      <p>이미지가 없습니다.</p>
                    )}
                  </ImgSection>
                  <InfoSection onClick={openReviewModal}>
                    <p>책 제목: {newBook.bookTitle}</p>
                    <p>저자: {newBook.author}</p>
                    <p>출판사: {newBook.publisher}</p>
                    <p>가격: {newBook.price}원</p>
                  </InfoSection>
                </>
              ) : (
                <p>책이 추가되지 않았습니다.</p>
              )}
            </BookRightSection>
            <BookLeftSection>
              {newBook && typeof newBook.imageUrl !== "undefined" ? (
                <>
                  <ImgSection onClick={openReviewModal}>
                    {newBook.imageUrl ? (
                      <img src={newBook.imageUrl} alt="책 이미지" />
                    ) : (
                      <p>이미지가 없습니다.</p>
                    )}
                  </ImgSection>
                  <InfoSection onClick={openReviewModal}>
                    <p>책 제목: {newBook.bookTitle}</p>
                    <p>저자: {newBook.author}</p>
                    <p>출판사: {newBook.publisher}</p>
                    <p>가격: {newBook.price}원</p>
                  </InfoSection>
                </>
              ) : (
                <p>책이 추가되지 않았습니다.</p>
              )}
            </BookLeftSection>
            <BookRightSection>
              {newBook && typeof newBook.imageUrl !== "undefined" ? (
                <>
                  <ImgSection onClick={openReviewModal}>
                    {newBook.imageUrl ? (
                      <img src={newBook.imageUrl} alt="책 이미지" />
                    ) : (
                      <p>이미지가 없습니다.</p>
                    )}
                  </ImgSection>
                  <InfoSection onClick={openReviewModal}>
                    <p>책 제목: {newBook.bookTitle}</p>
                    <p>저자: {newBook.author}</p>
                    <p>출판사: {newBook.publisher}</p>
                    <p>가격: {newBook.price}원</p>
                  </InfoSection>
                </>
              ) : (
                <p>책이 추가되지 않았습니다.</p>
              )}
            </BookRightSection>
          </BookSection>
        </BookWrap>
      </BookMainWrap>

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

      <Modal
        isOpen={bookAddModalIsOpen}
        onRequestClose={closeBookAddModal}
        style={customStyles2}
      >
        <BookAdd
          closeBookAddModal={closeBookAddModal}
          addNewBook={setNewBook}
        />
        <CloseBtn>
          <button onClick={closeBookAddModal}>X</button>
        </CloseBtn>
      </Modal>
    </BackColor>
  );
}

export default List;

const BackColor = styled.div`
  background-color: #fff;
`;

const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
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
      background-color: #fff;
    }
  }
`;

const BookMainWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const BookWrap = styled.div`
  width: 90%;
`;

const BookSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const BookLeftSection = styled.div`
  display: flex;
  width: 50%;
  padding: 10px;
`;

const ImgSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 140px;
    height: 200px;
    cursor: pointer;
  }
`;

const InfoSection = styled.div`
  width: 50%;
  padding: 10px;
  p {
    cursor: pointer;
    font-weight: bold;
  }
`;

const BookRightSection = styled.div`
  display: flex;
  padding: 10px;
  width: 50%;
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
