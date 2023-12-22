import { useEffect, useState, useCallback, ChangeEvent } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Review from "../components/Modal/Review";
import BookAdd from "../components/Modal/BookAdd";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Loader from "../components/Loader/Loader";

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
  id: string;
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
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filterBooks = () => {
    return books.filter((book) =>
      book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    const db = firebase.firestore();
    const booksSnapshot = await db.collection("books").get();
    const books = booksSnapshot.docs.map((doc) => ({
      id: doc.id,
      imageUrl: doc.data().imageUrl,
      bookTitle: doc.data().bookTitle,
      author: doc.data().author,
      publisher: doc.data().publisher,
      price: doc.data().price,
    }));
    setLoading(false);
    return books;
  }, []);

  const refreshBooks = useCallback(async () => {
    const booksFromFirestore = await fetchBooks();
    setBooks(booksFromFirestore);
  }, [fetchBooks]);

  const deleteBook = async (id: string) => {
    // async 키워드를 추가합니다
    const db = firebase.firestore();
    await db.collection("books").doc(id).delete();
    setBooks(books.filter((book) => book.id !== id));
  };

  useEffect(() => {
    refreshBooks();
  }, [refreshBooks]);

  const openReviewModal = (bookId: string) => {
    setSelectedBookId(bookId);
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
      <Loader loading={loading} />
      <SearchSection>
        <input
          placeholder="Search Title"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </SearchSection>

      <BookAddSection>
        <button onClick={openBookAddModal}>책 추가하기</button>
      </BookAddSection>

      <BookMainWrap>
        <BookWrap>
          <BookSection>
            {filterBooks().map((book, index) => (
              <BookLeftSection key={index}>
                <ImgSection onClick={() => openReviewModal(book.id)}>
                  <img src={book.imageUrl} alt="책 이미지" />
                </ImgSection>

                <InfoSection onClick={() => openReviewModal(book.id)}>
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
        {selectedBookId !== null && (
          <Review bookId={selectedBookId} onDelete={deleteBook} />
        )}
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
  align-items: center;
  margin: 30px 0;
  padding: 70px 0 0 0;
  input {
    width: 300px;
    height: 20px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50px;
    // background: #283542;
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
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    }


    @media screen and (max-width: 1300px) {
      & > * {
        flex-basis: calc(50% - 10px);
        margin: 5px;
      }
    }
`;

const BookLeftSection = styled.div`
  display: flex;
  width: 25%;
  padding: 10px;
  margin-top: 10px;
  box-sizing: border-box;
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
  margin-left: 45px;
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
