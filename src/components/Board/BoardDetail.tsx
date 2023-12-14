import { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../Firebase";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
} from "firebase/firestore";

function BoardDetail() {
  interface BoardData {
    id: string;
    author: string;
    category: string;
    comments: string;
    content: string;
    image: string;
    likes: number;
    title: string;
    views: number;
  }

  const [posts, setPosts] = useState<BoardData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
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
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

  return (
    <Main>
        {posts.map ((post) => (
      <Box>
        <Title>
          <h1>{post.title}</h1>
          <h2>올린사람</h2>
        </Title>
        <Content></Content>
        <Chatroom>
          <h3>사용자</h3>
          <p>댓글들</p>
        </Chatroom>
        <Chatself placeholder="댓글을 입력해주세요"></Chatself>
      </Box>
        ))}
    </Main>
  );
}

export default BoardDetail;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  width: 1300px;
  height: 800px;
  border: 5px solid black;
  background-color: #fff;
`;

const Title = styled.div`
  width: 100%;
  height: 200px;
  border: 3px solid blue;
`;

const Content = styled.div`
  width: 100%;
  height: 600px;
  border: 3px solid red;
`;

const Chatroom = styled.div`
  width: 1300px;
  border: 3px solid yellow;
`;

const Chatself = styled.textarea`
  width: 1300px;
  height: 50px;
`;
