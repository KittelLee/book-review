import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
} from "firebase/firestore";
import Loader from "../components/Loader/Loader";

function Board() {
  const [posts, setPosts] = useState<BoardData[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수 추가
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  interface BoardData {
    id: string;
    author: string;
    category: string;
    comments: CommentData[];
    content: string;
    image: string;
    likes: number;
    title: string;
    views: number;
  }

  interface CommentData {
    user: string;
    content: string;
  }

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const startIdx: number = (page - 1) * pageSize;
        const endIdx: number = startIdx + pageSize;
        const query = collection(db, "Board");
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(query);
        const data: BoardData[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          author: doc.data().author,
          category: doc.data().category,
          comments: doc.data().comments,
          content: doc.data().content,
          image: doc.data().image,
          likes: doc.data().likes,
          title: doc.data().title,
          views: doc.data().views,
        }));

        const startIdx: number = (page - 1) * pageSize;
        const endIdx: number = startIdx + pageSize;
        const slicedData: BoardData[] = data.slice(startIdx, endIdx);
        setPosts(slicedData);
        const total = Math.ceil(data.length / pageSize);
        setTotalPages(total);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [page, pageSize]);

  return (
    <Main>
      <Loader loading={loading} />
      <div>
        <WrapBody>
          <BoardMainBody>
            <BoardRoom>
              <Bh1>
                자유게시판
                <Bh2>자유로운 소통을 위한 공간입니다.</Bh2>
              </Bh1>
              <Bar></Bar>
              <ExBar>
                <Title>제목</Title>
                <View> 조회수 |</View>
                <Like> 좋아요</Like>
              </ExBar>
              {posts.map((post) => (
                <BoardBody key={post.id}>
                  <PostBtn onClick={() => navigate(`/boarddetail/${post.id}`)}>
                    <PostTitle>{post.title}</PostTitle>
                    <Views>
                      {post.views} | <Likes> {post.likes} </Likes>
                    </Views>
                  </PostBtn>
                </BoardBody>
              ))}
            </BoardRoom>

            <PgBody>
              <PgPrev onClick={() => setPage(page - 1)} disabled={page === 1}>
                이전
              </PgPrev>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PgSelect
                  key={index + 1}
                  onClick={() => setPage(index + 1)}
                  active={index + 1 === page}
                >
                  {index + 1}
                </PgSelect>
              ))}
              <PgNext
                onClick={() => setPage(page + 1)}
                disabled={page >= totalPages}
              >
                다음
              </PgNext>
              <WriteBtn href="/Boardwrite">글쓰기</WriteBtn>
            </PgBody>
          </BoardMainBody>
        </WrapBody>
      </div>
    </Main>
  );
}

export default Board;

const Main = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const WrapBody = styled.div`
  margin-top: 150px;
  padding: 0;
  width: 1200px;
  height: 1000px;

  @media (max-width: 1300px) {
    width: 1000px;
  }

  @media (max-width: 1039px) {
    width: 450px;
  }
`;

const Bh1 = styled.h1`
  color: black;
  font-size: 30pt;
  padding: 10px 0 0 6em;
  margin-top: 30px;
  margin-left: 100px;
  @media (max-width: 1300px) {
    font-size: 15pt;
  }

  @media (max-width: 1039px) {
    font-size: 10pt;
    margin-left: 0;
  }
`;

const Bh2 = styled.span`
  color: gray;
  font-size: 12pt;
  height: auto;
  padding-top: 10px;
  padding-left: 20px;
  /*제목 옆 부제목*/
  @media (max-width: 1039px) {
    font-size: 10pt;
  }
`;

const Bar = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  margin-top: 10px;
  background: linear-gradient(120deg, purple, skyblue);
  margin-bottom: 20px;
`;

const ExBar = styled.div`
  width: 100%;
  height: auto;
  text-align: left;

  padding-left: 10px;
  font-size: 9pt;
  font-weight: bold;
  text-align: center;

  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /*게시글 설명 바*/
  @media (max-width: 1300px) {
  }
  @media (max-width: 1039px) {
  }
`;
const Title = styled.span`
  font-size: 9pt;
  font-weight: bold;
  position: absolute;
  left: 480px;
  @media (max-width: 1300px) {
    left: 370px;
  }
  @media (max-width: 1039px) {
    left: 175px;
  }
`;

const View = styled.span`
  font-size: 9pt;
  font-weight: bold;
  position: absolute;
  right: 200px;

  @media (max-width: 1039px) {
    right: 60px;
  }
`;

const Like = styled.span`
  color: purple;
  font-size: 9pt;
  font-weight: bold;
  position: absolute;
  right: 160px;
  @media (max-width: 1039px) {
    right: 70px;
  }

  @media (max-width: 1039px) {
    right: 20px;
  }
`;

const WriteBtn = styled.a`
  background-color: #333333;
  color: white;
  font-size: 12pt;
  border-radius: 30px;
  border: 1px solid gray;
  margin-left: 350px;
  font-weight: bold;
  padding: 15px 30px;
  bottom: 15%;
  right: 5%;
  text-align: center;
  text-decoration: none;
  padding-top: 2px;

  &:hover {
    background-color: white;
    color: black;

    visibility: visible;
    transition: all 0.2s ease;
    text-decoration: underline;
  }

  @media (max-width: 1300px) {
    padding: 10px 15px;
    font-size: 15px;
    margin-left: 100px;
  }
  @media (max-width: 1039px) {
  }
`;

const BoardMainBody = styled.div`
  height: 800px;
  width: 90%;
  box-shadow: 5px 5px 5px;
  background-color: white;
  border-radius: 25px;
  position: relative;
  display: flex;

  justify-content: center;
  @media (max-width: 1300px) {
    width: 90%;
  }
`;

const BoardRoom = styled.div`
  height: 80%;
  width: 100%;
  position: absolute;

  margin-top: 25px;
`;

const BoardBody = styled.div`
  height: 30px;
  width: 90%;
  margin: 0;
  margin-bottom: 10px;
`;

const PostBtn = styled.button`
  cursor: pointer;
  border-bottom: lightgray 1px solid;
  border-left: none;
  border-right: none;
  color: black;
  background-color: white;
  width: 100%;
  height: 40px;
  font-size: 13pt;
  text-align: left;
  margin-bottom: 10px;
  margin-left: 50px;
  padding-left: 20px;
  position: relative;

  &:hover {
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    text-decoration: underline;
  }
  @media (max-width: 1300px) {
    width: 800px;
  }
  @media (max-width: 1039px) {
    width: 330px;
    font-size: 10px;
  }
`;

const PostTitle = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Views = styled.span`
  font-size: 8pt;
  left: 933px;
  top: 15px;
  position: absolute;
  @media (max-width: 1300px) {
    left: 643px;
  }
  @media (max-width: 1039px) {
    left: 290px;
  }
`;

const Likes = styled.span`
  color: purple;

  margin-left: 5px;
`;

const PgBody = styled.div`
  position: absolute;
  bottom: 50px;
`;

const PgPrev = styled.button`
  left: 20%;
  width: auto;
  box-sizing: content-box;
  background-color: #fff;
  color: black;
  border: gray 1px solid;
  border-radius: 3px;
  font-size: 8pt;

  &:hover {
    opacity: 1;
    visibility: visible;
    transition: all 0.2s ease;
    text-decoration: underline;
  }
`;

const PgNext = styled.button`
  right: 20%;
  width: auto;
  box-sizing: content-box;
  background-color: #fff;
  color: black;
  border: gray 1px solid;
  font-size: 8pt;
  border-radius: 3px;

  &:hover {
    opacity: 1;
    visibility: visible;
    transition: all 0.2s ease;
    text-decoration: underline;
  }
`;

const PgSelect = styled.button<{ active: boolean }>`
  background-color: white;
  color: black;
  box-sizing: content-box;
  width: auto;
  margin-left: 15px;
  margin-right: 15px;

  &:hover {
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    text-decoration: underline;
  }
`;
