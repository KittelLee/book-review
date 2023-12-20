import { db } from "../../Firebase";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { updatePassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

interface NewIntro {
  imageUrl: string;
  NickName: string;
}

interface ChangeIntroProps {
  closeModal: () => void;
  changeintro: React.Dispatch<React.SetStateAction<NewIntro | null>>;
}

function Intro({ closeModal, changeintro }: ChangeIntroProps) {
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

      changeintro({
        imageUrl: downloadURL,
        NickName: newNickname,
      });

      // 모달 닫기
      closeModal();
    } catch (error) {
      console.error("An error occurred during upload:", error);
    }
  };

  return (
    <div>
      <div>
        <input id="fileInput" type="file" onChange={handleFileChange} />
        <input
          type="text"
          placeholder="새 비밀번호를 적어주세요"
          onChange={(e) => setNewPassword(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="새 닉네임을 적어주세요"
          onChange={(e) => setNewNickname(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={() => handleUpload()}>완료하기</button>
      </div>
    </div>
  );
}

export default Intro;
