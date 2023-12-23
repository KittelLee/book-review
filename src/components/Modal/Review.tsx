import { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { ReviewProps, Comment } from "../../types/Review";

const firebaseConfig = {
  apiKey: "AIzaSyAu1pu4r4m_kJLEyeL7Jgc6tWz94Upzk98",
  authDomain: "book-review-a7be9.firebaseapp.com",
  projectId: "book-review-a7be9",
  storageBucket: "book-review-a7be9.appspot.com",
  messagingSenderId: "905824431279",
  appId: "1:905824431279:web:f56fdfc06bc60dd733785a",
  measurementId: "G-L9QXD3H138",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

function Review({
  bookId,
  bookTitle,
  author,
  publisher,
  price,
  imageUrl,
  onDelete,
  onClose,
}: ReviewProps) {
  const handleDelete = async () => {
    await onDelete(bookId);
    onClose();
  };

  const [NickName, setNickName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user] = useState({ NickName: "" });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsAuthenticated(true);
        db.collection("User")
          .doc(authUser.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              if (userData && userData.NickName) {
                setNickName(userData.NickName);
              } else {
                setNickName("익명");
              }
            } else {
              setNickName("");
            }
          });
      } else {
        setIsAuthenticated(false);
        setNickName("");
      }
    });

    return () => unsubscribe();
  }, []);

  // 'NickName' 입력 필드의 값으로 'user.NickName' 사용
  useEffect(() => {
    if (user && user.NickName) {
      setNickName(user.NickName);
    }
  }, [user]);

  useEffect(() => {
    const fetchComments = async () => {
      const snapshot = await db
        .collection("books")
        .doc(bookId)
        .collection("comments")
        .get();
      const fetchedComments = snapshot.docs.map((doc) => ({
        NickName: doc.data().NickName,
        comment: doc.data().comment,
      }));
      setComments(fetchedComments);
    };
    fetchComments();
  }, [bookId]);

  const handleSubmit = async () => {
    const newComment = { NickName, comment };
    await db
      .collection("books")
      .doc(bookId)
      .collection("comments")
      .add(newComment);
    setComments([...comments, newComment]);
    setComment("");
  };

  return (
    <ContentWrap>
      <BookWrap>
        <Book>
          <img src={imageUrl} alt={bookTitle} />
        </Book>
        <BookInfo>
          <h2>책정보</h2>
          <ul>
            <li>책 제목: {bookTitle}</li>
            <li>저자: {author}</li>
            <li>출판사: {publisher}</li>
            <li>가격: {price}원</li>
          </ul>
          <DelButton>
            <button onClick={handleDelete}>책 삭제</button>
          </DelButton>
        </BookInfo>
      </BookWrap>
      <Comment>
        <h2>리뷰(댓글)</h2>
        {isAuthenticated ? (
          <Submit>
            <input
              placeholder="닉네임"
              value={NickName}
              onChange={(e) => setNickName(e.target.value)}
            />
            <textarea
              placeholder="리뷰를 작성해주세요"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleSubmit}>제출하기</button>
          </Submit>
        ) : (
          <p>댓글을 작성하려면 로그인해주세요.</p>
        )}
        <CommentList>
          {comments.map((c, index) => (
            <div key={index}>
              <p>{c.NickName}</p>
              <p>|</p>
              <p>{c.comment}</p>
            </div>
          ))}
        </CommentList>
      </Comment>
    </ContentWrap>
  );
}

export default Review;

const ContentWrap = styled.div`
  padding: 20px 0;
`;

const BookWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin: 0 auto 10px auto;
  padding: 20px;
  background-color: rgb(251, 251, 251);
  border: 1px solid #e1e1e1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Book = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: whitesmoke;
  margin-right: 100px;
  img {
    width: 95%;
    height: 350px;
  }
  @media screen and (max-width: 600px) {
    margin-right: 0px;
    width: 300px;
    height: 300px;
    img {
      width: 250px;
      height: 250px;
    }
  }
`;

const BookInfo = styled.div`
  position: relative;
  padding: 20px;
  background-color: whitesmoke;
  width: 360px;
  height: 360px;
  ul {
    list-style-type: square;
    margin-left: -20px;
    line-height: 2;
  }
  @media screen and (max-width: 600px) {
    margin-right: 0px;
    width: 90%;
    height: 260px;
  }
`;

const DelButton = styled.div`
  button {
    position: absolute;
    bottom: 20px;
    left: 20px;
    border: none;
    background-color: #fff;
    padding: 6px 12px;
    box-shadow: 2px 2px 2px 2px;
    cursor: pointer;
    &:hover {
      background-color: skyblue;
    }
  }
`;

const Comment = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(251, 251, 251);
  border: 1px solid #e1e1e1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Submit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    width: 10%;
  }
  textarea {
    margin-top: 6px;
    width: 90%;
    height: 100px;
  }
  input,
  textarea {
    font-size: 0.9rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  button {
    width: 10%;
    padding: 10px;
    margin-top: 6px;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 4px;
    &:hover {
      background-color: black;
      color: #fff;
    }
  }
  @media screen and (max-width: 600px) {
    input {
      width: 96.9%;
    }
    textarea {
      width: 97.7%;
    }
    button {
      width: 100%;
    }
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 88%;
  > div {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 10px;
  }
  p {
    margin: 0 50px;
  }
`;
