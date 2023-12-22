import { db } from "../../Firebase";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { updatePassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import styled from "styled-components";
import ProfileAddIcon from "../../assets/icons/ProfileAddIcon.jpeg";

interface NewIntro {
  imageUrl: string;
  NickName: string;
}

interface ChangeIntroProps {
  closeModal: () => void;
  changeIntro: React.Dispatch<React.SetStateAction<NewIntro | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Intro({ closeModal, changeIntro, setLoading }: ChangeIntroProps) {
  if (!firebase.apps.length) {
    firebase.initializeApp(db);
  }
  const storage = firebase.storage();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [newPassword, setNewPassword] = useState<string>("");
  const [newNickname, setNewNickname] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      if (!selectedFile) return;

      // 파일을 Firebase Storage에 업로드
      const storageRef = storage.ref();
      const fileRef = storageRef.child(selectedFile.name);
      await fileRef.put(selectedFile);

      // 업로드된 파일의 다운로드 URL을 가져옴
      const downloadURL = await fileRef.getDownloadURL();

      const uid = auth.currentUser?.uid;

      if (uid) {
        const userDocRef = doc(db, "User", uid);
        const userDocSnapshot = await getDoc(userDocRef);
        console.log(uid);
        if (userDocSnapshot.exists()) {
          await updateDoc(userDocRef, {
            profileImageUrl: downloadURL,
            NickName: newNickname,
          });
        }
      }
      console.log(downloadURL);
      // Firebase Authentication의 비밀번호 업데이트
      if (auth.currentUser) {
        await updatePassword(auth.currentUser, newPassword);
        console.log("Password updated successfully!");
      } else {
        console.error("No user is currently signed in.");
      }

      changeIntro({
        imageUrl: downloadURL,
        NickName: newNickname,
      });

      closeModal();
    } catch (error) {
      console.error("An error occurred during upload:", error);
    }
    setLoading(false);
  };

  return (
    <MyPageModalWrap>
      <MyPageInfoWrap>
        <h2>정보 수정하기</h2>
        <img
          src={
            selectedFile ? URL.createObjectURL(selectedFile) : ProfileAddIcon
          }
          alt="프로필 이미지"
        />
        <Upload>
          <input id="fileInput" type="file" onChange={handleFileChange} />
          <input
            type="text"
            placeholder="새 비밀번호를 적어주세요"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="새 닉네임을 적어주세요"
            onChange={(e) => setNewNickname(e.target.value)}
          />
        </Upload>
        <BottomBtn>
          <button onClick={() => handleUpload()}>완료하기</button>
          <button onClick={closeModal}>창닫기</button>
        </BottomBtn>
      </MyPageInfoWrap>
    </MyPageModalWrap>
  );
}

export default Intro;

const MyPageModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
  input,
  button {
    margin-bottom: 10px;
  }
`;

const Upload = styled.div`
  display: flex;
  flex-direction: column;
  input:nth-child(n + 2) {
    border: none;
    border-radius: 4px;
    padding: 4px 6px;
    background-color: skyblue;
  }
`;

const MyPageInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomBtn = styled.div`
  display: flex;
  flex-direction: column;
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
