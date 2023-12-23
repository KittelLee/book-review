import { useState } from "react";
import styled from "styled-components";
import BookAddIcon from "../../assets/icons/BookAddIcon.jpeg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookAddProps, Book } from "../../types/BookAdd";
import { db, storage } from "../../Firebase";

function BookAdd({ closeBookAddModal, refreshBooks }: BookAddProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [price, setPrice] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const addBookToFirestore = async (book: Book) => {
    await db.collection("books").add(book);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("파일을 선택해주세요!");
      return;
    }

    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(selectedFile.name);
      await fileRef.put(selectedFile);

      const downloadURL = await fileRef.getDownloadURL();

      const newBook = {
        imageUrl: downloadURL,
        bookTitle,
        author,
        publisher,
        price,
      };

      await addBookToFirestore(newBook);
      await refreshBooks();
      toast.success("책이 성공적으로 추가되었습니다!");
      closeBookAddModal();
    } catch (error) {
      toast.error("책 추가에 실패했습니다.");
    }
  };

  return (
    <BookAddWrap>
      <ToastContainer position="top-right" autoClose={5000} />
      <h2>책 추가하기</h2>
      <img
        src={selectedFile ? URL.createObjectURL(selectedFile) : BookAddIcon}
        alt="책 이미지"
      />
      <Upload>
        <input id="fileInput" type="file" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="책제목을 기입해주세요"
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="저자를 기입해주세요"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="출판사를 기입해주세요"
          onChange={(e) => setPublisher(e.target.value)}
        />
        <input
          type="text"
          placeholder="가격을 기입해주세요"
          onChange={(e) => setPrice(e.target.value)}
        />
      </Upload>
      <BottomBtn>
        <button onClick={handleUpload}>완료하기</button>
        <button onClick={closeBookAddModal}>창닫기</button>
      </BottomBtn>
    </BookAddWrap>
  );
}

export default BookAdd;

const BookAddWrap = styled.div`
  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

const Upload = styled.div`
  display: flex;
  flex-direction: column;
  input,
  button,
  label {
    margin-bottom: 10px;
  }
  button {
    width: 20%;
  }
  input {
    width: 40%;
  }
  input:nth-child(n + 2) {
    border: none;
    border-radius: 4px;
    padding: 4px 6px;
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px;
  }
  @media screen and (max-width: 600px) {
    input {
      width: 90%;
    }
  }
`;

const BottomBtn = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  button {
    margin-right: 6px;
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px;
    border: unset;
    border-radius: 4px;
    padding: 4px 10px;
    position: relative;
    transition: all 250ms;
    overflow: hidden;
    z-index: 1;
    font-weight: 1000;
    font-size: 17px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      border-radius: 4px;
      background-color: black;
      z-index: -1;
      transition: all 250ms;
    }
    &:hover {
      cursor: pointer;
      color: #fff;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;
