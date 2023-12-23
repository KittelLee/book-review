import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { doc, getDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { User } from "firebase/auth";

function BoardWrite() {
  const [newauthor, setnewAuthor] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [newTitle, setnewTitle] = useState("");
  const [newCategory, setnewCategory] = useState("");
  const [newContent, setnewContent] = useState("");
  const navigate = useNavigate();

  const userDataGet = async () => {
    try {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const uid = currentUser.uid;
        const userDocRef = doc(db, "User", uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();

          if (userData) {
            setnewAuthor(userData.NickName);
          }
        }
      }
    } catch (error) {
      console.error("Error user data", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      userDataGet();
    }
  }, [user]);

  const AddBoard = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const query = collection(db, "Board");
      const docRef = await addDoc(query, {
        author: newauthor,
        title: newTitle,
        category: newCategory,
        content: newContent,
        likes: 0,
        views: 0,
        comments: [],
        image: "",
        createdAt: serverTimestamp(),
      });

      console.log("Author:", newauthor);
      console.log("Title:", newTitle);
      console.log("Category:", newCategory);
      console.log("Content:", newContent);
      console.log("게시물이 성공적으로 추가되었습니다.");

      const newPostId = docRef.id;
      navigate(`/boarddetail/${newPostId}`);
    } catch (error) {
      console.error("게시물 추가 중 오류 발생:", error);
    }
  };

  return (
    <Main>
      <WriteForm>
        <Command>글쓰기</Command>
        <Line></Line>
        <ul>
          <li>
            <AuthorSpan>작성자</AuthorSpan>
            <Author
              type="text"
              placeholder="작성자"
              value={newauthor || ""}
              onChange={() => {}}
            ></Author>
          </li>
          <li>
            <TitleSpan>제목</TitleSpan>
            <Title
              type="text"
              placeholder="제목"
              value={newTitle}
              onChange={(e) => setnewTitle(e.target.value)}
            ></Title>
          </li>
          <li>
            <CategorySpan>카테고리</CategorySpan>
            <select
              value={newCategory}
              onChange={(e) => setnewCategory(e.target.value)}
            >
              <option value="카테고리1" disabled>
                카테고리 1
              </option>
              <option value="카테고리2">카테고리2</option>
              <option value="카테고리3">카테고리3</option>
              <option value="카테고리4">카테고리4</option>
              <option value="카테고리5">카테고리5</option>
              <option value="카테고리6">카테고리6</option>
            </select>
          </li>
          <li>
            <ContentSpan>내용</ContentSpan>
            <Content
              placeholder="내용"
              value={newContent}
              onChange={(e) => setnewContent(e.target.value)}
            ></Content>
          </li>
          <Line></Line>
          <li>
            <Link to="/board">
              <BackBtn>취소</BackBtn>
            </Link>
            <AddBtn onClick={AddBoard}>등록</AddBtn>
          </li>
        </ul>
      </WriteForm>
    </Main>
  );
}

export default BoardWrite;

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WriteForm = styled.form`
  height: 800px;
  width: 900px;

  background-color: #fff;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    padding: 7px 0;
  }

  @media (max-width: 1420px) {
    width: 90%;
  }
`;

const Command = styled.h1`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1420px) {
    font-size: 15pt;
    width: 30%;
  }
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 5px;
`;

const Author = styled.input`
  display: flex;
  align-items: center;
  width: 80%;
  height: 34px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  padding: 0 10px;
`;

const AuthorSpan = styled.span`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.input`
  width: 80%;
  height: 34px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  padding: 0 10px;
`;

const TitleSpan = styled.span`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.textarea`
  display: flex;
  width: 80%;
  height: 400px;
  margin-bottom: 30px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  padding: 0 10px;
`;

const ContentSpan = styled.span`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategorySpan = styled.span`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddBtn = styled.button`
  padding: 10px 30px;
  background-color: #2f2fbe;
  color: #fff;
  margin-left: 30px;
  @media (max-width: 1420px) {
    padding: 5px 15px;
  }
  @media (max-width: 947px) {
    padding: 5px 15px;
    margin-left: 5%;
  }
`;

const BackBtn = styled.button`
  padding: 10px 30px;
  background-color: #3b3b44;
  color: #fff;
  margin-left: 600px;
  @media (max-width: 1420px) {
    padding: 5px 15px;
  }
  @media (max-width: 947px) {
    padding: 5px 15px;
    margin-left: 200px;
  }
  @media (max-width: 450px) {
    padding: 5px 15px;
    margin-left: 50px;
  }
`;
