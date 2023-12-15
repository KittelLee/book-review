import { useState } from "react";
import styled from "styled-components";
import BookAddIcon from "../../assets/icons/BookAddIcon.jpeg";

interface BookAddProps {
  closeBookAddModal: () => void;
}

function BookAdd({ closeBookAddModal }: BookAddProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
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
        <input type="text" placeholder="책제목을 기입해주세요" />
        <input type="text" placeholder="저자를 기입해주세요" />
        <input type="text" placeholder="출판사를 기입해주세요" />
        <input type="text" placeholder="가격을 기입해주세요" />
      </Upload>
      <BottomBtn>
        <button>완료하기</button>
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
