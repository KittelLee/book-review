import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import styled from "styled-components";
import { db } from "../../Firebase";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { User } from "firebase/auth";

function BoardDetail() {
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

  const { id } = useParams<{ id: string }>();
  const [posts, setPosts] = useState<BoardData[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const query = collection(db, "Board");
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(query);

        const data: BoardData[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          author: doc.data().author,
          category: doc.data().category,
          comments: Array.isArray(doc.data().comments)
            ? doc.data().comments.map((commentDoc: any) => ({
                user: commentDoc.user,
                content: commentDoc.content,
              }))
            : [],
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
  }, [id]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  /*const currentUserInfo = currentUser ? (
    <p>{currentUser.displayName}님이 댓글을 작성했습니다.</p>
  ) : (
    <p>로그인 후 댓글을 작성하세요.</p>
  );*/

  const handleCommentSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (currentUser && commentInput.trim() !== "") {
      try {
        console.log(currentUser);
        const commentData: CommentData = {
          user: currentUser.email || "Anonymous",
          content: commentInput,
        };

        // Get a reference to the document
        const boardCollection = collection(db, "Board");
        const boardRef = doc(boardCollection, id);

        // Get the current document data
        const boardDoc = await getDoc(boardRef);

        if (boardDoc.exists()) {
          // Update Firestore with new comment
          await updateDoc(boardRef, {
            comments: [...posts[0]?.comments, commentData],
          });

          console.log("Comment added successfully!");

          // Clear comment input
          setCommentInput("");
          window.location.reload();
        } else {
          console.error("Board document not found");
        }
      } catch (error) {
        console.error("Error adding comment: ", error);
      }
    }
  };

  return (
    <Main>
      <Box>
        <Title>
          <Line></Line>
          <h1>{posts[0]?.title}</h1>
          <Line></Line>
          <h2>{posts[0]?.author}</h2>
        </Title>
        <Content>
          <h3>{posts[0]?.content}</h3>
        </Content>
        <Chatroom>
          <h3>댓글쓴사람</h3>
          <ul>
            {posts[0]?.comments.map((comment, index) => (
              <li key={index}>
                {`${comment.user}`} <span> {`${comment.content}`}</span>
                <ChatLine></ChatLine>
              </li>
            ))}
          </ul>

          <form onSubmit={handleCommentSubmit}>
            <Chatself
              placeholder="댓글을 입력해주세요"
              value={commentInput}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setCommentInput(e.target.value)
              }
            ></Chatself>
            <button type="submit">댓글 달기</button>
          </form>
        </Chatroom>
      </Box>
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
  height: 100%;

  background-color: #fff;
`;

const Title = styled.div`
  width: 100%;
  height: 200px;
`;

const Content = styled.div`
  width: 100%;
  height: 600px;
  border: 3px solid red;
  h3 {
    font-size: 15px;
    margin-left: 15px;
  }
`;

const Chatroom = styled.div`
  width: 1300px;
  border: 3px solid yellow;
`;

const Chatself = styled.textarea`
  width: 1300px;
  height: 150px;
`;

const Line = styled.div`
  width: 100%;

  border-bottom: 3px solid #1e1c1c;
  margin-bottom: 5px;
`;

const ChatLine = styled.div`
  width: 100%;

  border-bottom: 1px solid #1e1c1c;
  margin-bottom: 5px;
`;
