import styled from "styled-components";
import CatImg from "../../assets/images/test5.jpg";

function Review() {
  return (
    <ContentWrap>
      <BookWrap>
        <Book>
          <img src={CatImg} alt="picture" />
        </Book>
        <BookInfo>
          <h2>책정보</h2>
          <ul>
            <li>책제목</li>
            <li>저자</li>
            <li>출판사</li>
            <li>가격</li>
          </ul>
        </BookInfo>
      </BookWrap>
      <Comment>
        <h2>리뷰(댓글)</h2>
        <Submit>
          <input placeholder="닉네임" />
          <textarea placeholder="리뷰를 작성해주세요" />
          <button>제출하기</button>
        </Submit>
        <CommentList>
          <p>홍길동</p>
          <p>|</p>
          <p>이 책 매우 재밌습니다!</p>
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
    width: 350px;
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
    width: 260px;
    height: 260px;
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
    border-radius: 4px;
  }
  @media screen and (max-width: 600px) {
    input,
    textarea,
    button {
      width: 100%;
    }
  }
`;

const CommentList = styled.div`
  display: flex;
  margin-top: 20px;
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  p {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: 0.64rem;
    }
  }
`;
