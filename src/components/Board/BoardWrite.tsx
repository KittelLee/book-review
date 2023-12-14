import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function BoardWrite() {
  const [newauthor, setnewAuthor] = useState("");
  const [newtitle, setnewTitle] = useState("");
  const [newcategory, setnewCategory] = useState("");
  const [newcontent, setnewContent] = useState("");
  const navigate = useNavigate();

  const AddBoard = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const query = collection(db, "Board");
      await addDoc(query, {
        author: newauthor,
        title: newtitle,
        category: newcategory,
        content: newcontent,
        likes: 0,
        views: 0,
        comments: "",
        image: "",
      });
      // 성공적으로 추가되었을 때 필요한 작업 수행
      console.log("Author:", newauthor);
      console.log("Title:", newtitle);
      console.log("Category:", newcategory);
      console.log("Content:", newcontent);
      console.log("게시물이 성공적으로 추가되었습니다.");

      navigate("/board");
      // 추가 후에 필요한 작업을 수행하거나 페이지를 리디렉션할 수 있습니다.
    } catch (error) {
      console.error("게시물 추가 중 오류 발생:", error);
      // 오류가 발생했을 경우 사용자에게 알림을 표시하거나 다른 조치를 취할 수 있습니다.
    }
  };

  const BackBoard = navigate("/board");

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
              value={newauthor}
              onChange={(e) => setnewAuthor(e.target.value)}
            ></Author>
          </li>
          <li>
            <TitleSpan>제목</TitleSpan>
            <Title
              type="text"
              placeholder="제목"
              value={newtitle}
              onChange={(e) => setnewTitle(e.target.value)}
            ></Title>
          </li>
          <li>
            <CategorySpan>카테고리</CategorySpan>
            <select
              value={newcategory}
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
              value={newcontent}
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
`;

const Command = styled.h1`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const BackBtn = styled.button`
  padding: 10px 30px;
  background-color: #3b3b44;
  color: #fff;
  margin-left: 600px;
`;