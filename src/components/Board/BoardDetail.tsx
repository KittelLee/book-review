import CatImg from "../../assets/images/baseimg.jpg";
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
  deleteDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { User } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faEye,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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
    profileImageUrl?: string; // 프로필 이미지 URL을 나타내는 속성 추가
    NickName?: string;
  }

  interface UserGetData {
    imageUrl: string;
    NickName: string;
  }

  const { id } = useParams<{ id: string }>();
  const [posts, setPosts] = useState<BoardData[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [commentInput, setCommentInput] = useState("");
  const [chatdata, setChatData] = useState<UserGetData>({
    imageUrl: "",
    NickName: "",
  });
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [commentCount, setCommentCount] = useState<number>(0);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingContent, setIsEditingContent] = useState(false);
  const [editedTitle, setEditedTitle] = useState<string>(posts[0]?.title || "");
  const [editedContent, setEditedContent] = useState<string>(
    posts[0]?.content || ""
  );

  const navigate = useNavigate();

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
                NickName: commentDoc.NickName,
                profileImageUrl: commentDoc.profileImageUrl,
              }))
            : [],
          content: doc.data().content,
          image: doc.data().image,
          likes: doc.data().likes,
          title: doc.data().title,
          views: doc.data().views,
        }));

        const selectedPost = data.find((post) => post.id === id);

        // 해당 게시물만을 상태에 저장
        if (selectedPost) {
          setPosts([selectedPost]);
        } else {
          console.error("Post not found");
        }
        setIsEditingTitle(false);
        setIsEditingContent(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      if (user) {
        setCurrentUserId(user.uid);
        userdataget();
        console.log(user.uid);
        console.log(chatdata);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // 이 부분에서 댓글 수를 업데이트하는 함수 호출
    updateCommentCount();
  }, [posts[0]?.comments]);

  const updateCommentCount = () => {
    const selectedPost = posts[0];
    if (selectedPost) {
      setCommentCount(selectedPost.comments.length);
    }
  };

  const handleCommentSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (currentUser && commentInput.trim() !== "") {
      try {
        const commentData: CommentData = {
          user: currentUserId || "Anonymous",
          content: commentInput,
          profileImageUrl: chatdata.imageUrl,
          NickName: chatdata.NickName,
        };

        // Get a reference to the document
        const boardCollection = collection(db, "Board");
        const boardRef = doc(boardCollection, id);

        // Get the current document data
        const boardDoc = await getDoc(boardRef);

        if (boardDoc.exists()) {
          // Update Firestore with new comment
          await updateDoc(boardRef, {
            comments: [
              ...(posts[0]?.comments || []), // Keep existing comments
              commentData, // Add the new comment
            ],
          });

          console.log("Comment added successfully!");
          console.log("Comment Data:", commentData);
          console.log(
            "Rendering Image:",
            commentData.profileImageUrl || CatImg
          );
          console.log("Rendering NickName:", commentData.NickName || "익명");
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

  const handleUpdatePost = async () => {
    try {
      const postToUpdate = posts[0];
      if (postToUpdate) {
        const postRef = doc(db, "Board", postToUpdate.id);

        const updatedPostData: Partial<BoardData> = {
          title: editedTitle,
          content: editedContent,
        };

        await updateDoc(postRef, updatedPostData);

        setPosts((prevPosts) => [
          {
            ...prevPosts[0],
            ...updatedPostData,
          },
        ]);

        console.log("Post updated successfully!");
      }
    } catch (error) {
      console.error("Error updating post: ", error);
    }
  };

  const incrementLikes = async () => {
    try {
      const postToUpdate = posts[0];
      if (postToUpdate) {
        const postRef = doc(db, "Board", postToUpdate.id);
        await updateDoc(postRef, {
          likes: postToUpdate.likes + 1,
        });

        // 업데이트된 데이터를 상태에 반영
        setPosts((prevPosts) => [
          {
            ...prevPosts[0],
            likes: prevPosts[0].likes + 1,
          },
        ]);

        console.log("Likes incremented successfully!");
      }
    } catch (error) {
      console.error("Likes 업데이트 중 오류 발생:", error);
    }
  };

  const userdataget = async () => {
    try {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const uid = currentUser.uid;
        const userDocRef = doc(db, "User", uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();

          if (userData) {
            setChatData({
              imageUrl: userData.profileImageUrl,
              NickName: userData.NickName,
            });
          }
          console.log(userData.NickName);
        }
      }
    } catch (error) {
      console.error("Error user data", error);
    }
  };

  const handleDeletePost = async () => {
    try {
      const postToDelete = posts[0];

      if (postToDelete) {
        const postRef = doc(db, "Board", postToDelete.id);

        // 해당 게시글 문서 삭제
        await deleteDoc(postRef);
        navigate(`/board`);

        console.log("Post deleted successfully!");

        // 이후 필요한 작업 수행 (예: 리다이렉트, 메시지 표시 등)
      }
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  const startEditingTitle = () => {
    setIsEditingTitle(true);
    setIsEditingContent(true);
    if (posts.length > 0) {
      setEditedTitle(posts[0]?.title || "");
    }
    if (posts.length > 0) {
      setEditedContent(posts[0]?.content || "");
    }
  };

  // 제목 수정 완료
  const finishEditingTitle = () => {
    setIsEditingTitle(false);

    handleUpdatePost(); // 수정 완료 시 업데이트
  };

  // 내용 수정 완료
  const finishEditingContent = () => {
    setIsEditingContent(false);

    handleUpdatePost(); // 수정 완료 시 업데이트
  };

  return (
    <Main>
      <Box>
        <Title>
          <Line></Line>
          {isEditingTitle ? (
            <div>
              <EditTitle
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <FinishButton onClick={finishEditingTitle}>
                수정 완료
              </FinishButton>
            </div>
          ) : (
            <h1>{posts[0]?.title}</h1>
          )}
          <Line></Line>

          <h2>
            {posts[0]?.author}
            {chatdata.NickName === posts[0]?.author && (
              <>
                <EditBtn onClick={startEditingTitle}>
                  <FontAwesomeIcon icon={faEraser} />
                </EditBtn>

                <DeleteBtn>
                  <FontAwesomeIcon icon={faTrash} onClick={handleDeletePost} />
                </DeleteBtn>
              </>
            )}
          </h2>

          <RightSide>
            <p>
              <FontAwesomeIcon icon={faEye} />
            </p>
            <p>{posts[0]?.views}</p>
            <p>
              <FontAwesomeIcon icon={faThumbsUp} />
            </p>
            <p>{posts[0]?.likes}</p>
          </RightSide>
        </Title>
        <Content>
          {isEditingContent ? (
            <div>
              <EditContent
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              <FinishButton onClick={finishEditingContent}>
                수정완료
              </FinishButton>
            </div>
          ) : (
            <h3>{posts[0]?.content}</h3>
          )}
          <Likesroom onClick={incrementLikes}>
            <FontAwesomeIcon icon={faThumbsUp} />
          </Likesroom>
        </Content>

        <Chatroom>
          <h3>댓글: {commentCount}</h3>
          <ul>
            {posts[0]?.comments.map((comment, index) => (
              <div key={index}>
                <ChatLine></ChatLine>
                <li>
                  <ChatUserRooom>
                    <ChatUserImg>
                      <img
                        src={comment.profileImageUrl || CatImg}
                        alt="프로필"
                      />
                    </ChatUserImg>
                    <h3>{comment.NickName || "익명"}</h3>
                  </ChatUserRooom>
                  <br />
                  <span>{`${comment.content}`}</span>
                </li>
                <ChatLine></ChatLine>
              </div>
            ))}
          </ul>

          <BtnRoom onSubmit={handleCommentSubmit}>
            <BackBtn onClick={() => navigate("/board")}>게시판으로</BackBtn>
            <Chatself
              placeholder="댓글을 입력해주세요"
              value={commentInput}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setCommentInput(e.target.value)
              }
            ></Chatself>
            <Chatsubmit type="submit">댓글 달기</Chatsubmit>
          </BtnRoom>
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
  height: 100%;
`;

const Box = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
  width: 1300px;
  height: 100%;
  background-color: #fff;
  @media (max-width: 1420px) {
    width: 80%;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-bottom: 1px solid rgb(128, 128, 128);
  h1 {
    margin-left: 30px;
  }
  h2 {
    display: flex;
    align-items: center;
    margin-left: 30px;
  }
  p {
    margin-left: 10px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 2px;
  border-top: 1px solid rgb(128, 128, 128);
  border-bottom: 1px solid rgb(128, 128, 128);
  position: relative;

  h3 {
    font-size: 15px;
    margin-left: 15px;
  }
`;

const Chatroom = styled.div`
  width: 1300px;

  position: relative;
  h3 {
    margin-left: 30px;
  }
  li {
    align-items: center;
    margin-top: 30px;
    height: 100px;
    list-style: none;
  }
  @media (max-width: 1420px) {
    width: 100%;
  }
`;

const Chatself = styled.textarea`
  width: 1300px;
  height: 150px;
  @media (max-width: 1420px) {
    width: 100%;
  }
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

const ChatUserRooom = styled.div`
  display: flex;
  position: relative;
  h3 {
    position: absolute;
    top: -18px;
    left: 10px;
  }
`;
const ChatUserImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 95px;

  height: 100px;
  width: 150px;
  p {
    font-size: 20px;
  }
`;

const Likesroom = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 45%;
  width: 100px;
  height: 50px;
  background-color: gray;
  &:hover {
    background-color: whitesmoke;
  }
`;

const BtnRoom = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 150px;
  right: 130px;
  width: 100px;
  height: 50px;
  background-color: gray;
  color: white;
  border-radius: 15px;
  font-size: 15px;
  margin-top: 30px;
  &:hover {
    color: black;
    background-color: whitesmoke;
  }
`;

const Chatsubmit = styled.button`
  cursor: pointer;
  position: absolute;
  top: 150px;
  right: 0;
  width: 100px;
  height: 50px;
  background-color: gray;
  color: white;
  border-radius: 15px;
  font-size: 15px;
  margin-top: 30px;
  &:hover {
    background-color: whitesmoke;
    color: black;
  }
`;
const EditTitle = styled.input`
  width: 80%;
  height: 50px;
  margin-left: 5%;
  margin-bottom: 30px;
  @media (max-width: 1420px) {
    width: 60%;
  }
  @media (max-width: 480px) {
    width: 40%;
  }
`;

const EditContent = styled.textarea`
  margin-top: 15px;
  margin-left: 5%;
  width: 80%;
  height: 500px;
  @media (max-width: 1420px) {
    width: 60%;
  }
  @media (max-width: 480px) {
    width: 40%;
  }
`;

const FinishButton = styled.button`
  cursor: pointer;
  margin-left: 30px;
  height: 40px;
  background-color: #3abf30;
  color: white;
  border-radius: 15px;
  font-size: 15px;
  margin-top: 30px;
  &:hover {
    background-color: whitesmoke;
    color: black;
  }
`;

const DeleteBtn = styled.p`
  cursor: pointer;

  &:hover {
    color: red; /* 호버 시 적용될 스타일 */
  }
`;

const EditBtn = styled.p`
  cursor: pointer;

  &:hover {
    color: blue; /* 호버 시 적용될 스타일 */
  }
`;
