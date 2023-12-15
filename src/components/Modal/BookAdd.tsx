import { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import BookAddIcon from "../../assets/icons/BookAddIcon.jpeg";

interface BookAddProps {
  closeBookAddModal: () => void;
}

/*firebaseConfig부분 props로 내려줄수있지않나?*/
const firebaseConfig = {
  apiKey: "AIzaSyAu1pu4r4m_kJLEyeL7Jgc6tWz94Upzk98",
  authDomain: "book-review-a7be9.firebaseapp.com",
  projectId: "book-review-a7be9",
  storageBucket: "book-review-a7be9.appspot.com",
  messagingSenderId: "905824431279",
  appId: "1:905824431279:web:f56fdfc06bc60dd733785a",
  measurementId: "G-L9QXD3H138",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

function BookAdd({ closeBookAddModal }: BookAddProps) {
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

  const handleUpload = async () => {
    if (!selectedFile) return;

    // 파일을 Firebase Storage에 업로드
    const storageRef = storage.ref();
    const fileRef = storageRef.child(selectedFile.name);
    await fileRef.put(selectedFile);

    // 업로드된 파일의 다운로드 URL을 가져옴
    const downloadURL = await fileRef.getDownloadURL();

    // 책 정보 및 다운로드 URL을 콘솔에 출력
    console.log("책 제목:", bookTitle);
    console.log("저자:", author);
    console.log("출판사:", publisher);
    console.log("가격:", price);
    console.log("이미지 URL:", downloadURL);

    // 모달 닫기
    closeBookAddModal();
  };

  return (
    <BookAddWrap>
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
          type="number"
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
    background-color: skyblue;
  }
`;

const BottomBtn = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  button {
    margin-right: 4px;
    background-color: lightblue;
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
      background-color: lightcoral;
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
