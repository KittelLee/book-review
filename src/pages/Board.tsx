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
  const [totalPages, setTotalPages] = useState(1);
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
        const slicedData: BoardData[] = data.slice(startIdx, endIdx);
        setPosts(slicedData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [page, pageSize]);

  useEffect(() => {
    const total = Math.ceil(posts.length / pageSize);
    setTotalPages(total);
  }, [posts, pageSize]);

  return (
    <Main>
      <Loader loading={loading} />
      <div>
        <Bh1>
          자유게시판
          <Bh2>자유로운 소통을 위한 공간입니다.</Bh2>
        </Bh1>
        <Bar></Bar>
        <WrapBody>
          <ExBar>
            {" "}
            제목
            <View> | 조회수 |</View>
            <Like> 좋아요</Like>
          </ExBar>

          {posts.map((post) => (
            <BoardBody key={post.id}>
              <PostBtn onClick={() => navigate(`/boarddetail/${post.id}`)}>
                {post.title}
                <Views>
                  {" "}
                  {post.views} | <Likes> {post.likes} </Likes>
                </Views>
              </PostBtn>{" "}
              {/* navigate 함수 사용 */}
            </BoardBody>
          ))}
        </WrapBody>
      </div>{" "}
      {/*wrapbody div*/}
      <PgBody>
        <PgPrev onClick={() => setPage(page - 1)} disabled={page === 1}>
          이전
        </PgPrev>
        {/* 페이지 번호 목록 렌더링 */}
        {pageNumbers.map((pageNumber) => (
          <PgSelect key={pageNumber} onClick={() => setPage(pageNumber)}>
            {pageNumber}
          </PgSelect>
        ))}
        <PgNext onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
          다음
        </PgNext>
      </PgBody>
      <WriteBtn href="/Boardwrite">글쓰기</WriteBtn>
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

const Bh1 = styled.h1`
  background-color: whitesmoke;
  color: black;
  font-size: 30pt;
  padding: 10px 0 0 6em;
  margin-top: 30px;
  margin-left: 100px;
`;

const Bh2 = styled.span`
  background-color: whitesmoke;
  color: gray;
  font-size: 12pt;
  height: auto;
  padding-top: 10px;
  padding-left: 20px;
  /*제목 옆 부제목*/
`;

const Bar = styled.div`
  position: relative;
  width: 1200px;
  height: 3px;
  margin-top: 10px;
  margin-left: 15%;
  background: linear-gradient(120deg, purple, skyblue);
  margin-bottom: 20px;
`;

const WrapBody = styled.div`
  padding: 0;
  width: 1200px;
  height: 100vh;
`;

const ExBar = styled.div`
  width: 1100px;
  height: auto;
  text-align: left;
  margin-left: 22.5%;
  padding-left: 10px;
  font-size: 9pt;
  font-weight: bold;
  text-align: center;
  border-bottom: lightgray 1px solid;
  margin-top: 50px;
  /*게시글 설명 바*/
`;

const View = styled.span`
  font-size: 9pt;
  font-weight: bold;
  text-align: right;
  position: absolute;
  right: 12%;
`;

const Like = styled.span`
  color: purple;
  font-size: 9pt;
  font-weight: bold;
  position: absolute;
  right: 9.3%;
`;

const WriteBtn = styled.a`
  background-color: #333333;
  color: white;
  font-size: 12pt;
  border-radius: 30px;
  border: 1px solid gray;

  font-weight: bold;
  padding: 15px 30px;
  bottom: 15%;
  right: 5%;
  text-align: center;
  text-decoration: none;
  padding-top: 2px;
`;

const BoardBody = styled.div`
  height: 30px;
  width: 967px;
  margin: 0;
  margin-bottom: 10px;
  background-color: whitesmoke;
`;

const PostBtn = styled.button`
  border-bottom: lightgray 1px solid;
  color: black;
  background-color: whitesmoke;
  width: 1100px;
  height: 40px;
  font-size: 13pt;
  text-align: left;
  margin-left: 28%;
  margin-bottom: 10px;
  padding-left: 20px;
`;

const Views = styled.span`
  font-size: 8pt;
  right: 12%;
  padding-top: 5px;
  position: absolute;
`;

const Likes = styled.span`
  color: purple;

  margin-left: 5px;
  position: absolute;
`;

const PgBody = styled.div`
  position: absolute;
  left: 45%;
  box-sizing: content-box;
  margin-top: 20px;
  width: 30%;
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

const PgSelect = styled.button`
  background-color: white;
  color: black;
  box-sizing: content-box;
  width: auto;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  &:hover {
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    text-decoration: underline;
  }
`;
