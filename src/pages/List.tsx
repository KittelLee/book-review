import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Review from "../components/Modal/Review";
import BookAdd from "../components/Modal/BookAdd";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

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
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = useCallback(async () => {
    const db = firebase.firestore();
    const booksSnapshot = await db.collection("books").get();
    return booksSnapshot.docs.map((doc) => ({
      imageUrl: doc.data().imageUrl,
      bookTitle: doc.data().bookTitle,
      author: doc.data().author,
      publisher: doc.data().publisher,
      price: doc.data().price,
    }));
  }, []);

  const refreshBooks = useCallback(async () => {
    const booksFromFirestore = await fetchBooks();
    setBooks(booksFromFirestore);
  }, [fetchBooks]);

  useEffect(() => {
    refreshBooks();
  }, [refreshBooks]);

  const openReviewModal = () => {
    setReviewModalIsOpen(true);
  };

  const closeReviewModal = () => {
    setReviewModalIsOpen(false);
  };

  const openBookAddModal = () => {
    setBookAddModalIsOpen(true);
  };

  const closeBookAddModal = () => {
    setBookAddModalIsOpen(false);
  };

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
            {books.map((book, index) => (
              <BookLeftSection key={index}>
                <ImgSection onClick={openReviewModal}>
                  <img src={book.imageUrl} alt="책 이미지" />
                </ImgSection>
                <InfoSection onClick={openReviewModal}>
                  <p>책 제목: {book.bookTitle}</p>
                  <p>저자: {book.author}</p>
                  <p>출판사: {book.publisher}</p>
                  <p>가격: {book.price}원</p>
                </InfoSection>
              </BookLeftSection>
            ))}
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
          refreshBooks={refreshBooks}
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
