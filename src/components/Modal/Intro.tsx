import { db } from "../../Firebase";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { updatePassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import styled from "styled-components";
import ProfileAddIcon from "../../assets/icons/ProfileAddIcon.jpeg";
import { toast, ToastContainer } from "react-toastify";

interface NewIntro {
  imageUrl: string;
  NickName: string;
}

interface ChangeIntroProps {
  closeModal: () => void;
  changeIntro: React.Dispatch<React.SetStateAction<NewIntro | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  /* showToast: (message: string) => void;*/
}

const showToast = (message: string) => {
  toast(message);
};

function Intro({
  closeModal,
  changeIntro,
  setLoading,
}: /*
  showToast,
  */
ChangeIntroProps) {
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

      const storageRef = storage.ref();
      const fileRef = storageRef.child(selectedFile.name);
      await fileRef.put(selectedFile);

      const downloadURL = await fileRef.getDownloadURL();

      const uid = auth.currentUser?.uid;

      if (uid) {
        const userDocRef = doc(db, "User", uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          await updateDoc(userDocRef, {
            profileImageUrl: downloadURL,
            NickName: newNickname,
          });
        }
      }

      if (auth.currentUser) {
        await updatePassword(auth.currentUser, newPassword);
      }

      changeIntro({
        imageUrl: downloadURL,
        NickName: newNickname,
      });

      showToast("프로필이 성공적으로 업데이트되었습니다!");
      console.log("MyPage component rendered");
      closeModal();
    } catch (error) {
      console.error("An error occurred during upload:", error);
      showToast("프로필 업데이트에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MyPageModalWrap>
      <MyPageInfoWrap>
        <ToastContainer position="top-right" autoClose={5000} />
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
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px;
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
