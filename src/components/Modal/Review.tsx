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
          <textarea placeholder="리뷰를 작성해주세요"></textarea>
          <button>제출하기</button>
        </Submit>
        <CommentList></CommentList>
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
  border: 1px solid black;
  padding: 10px;
`;

const Book = styled.div`
  img {
    width: 400px;
    height: 400px;
  }
`;

const BookInfo = styled.div`
  padding: 20px;
  background-color: white;
  width: 360px;
  height: 360px;
  ul {
    list-style-type: square;
    margin-left: -20px;
    line-height: 2;
  }
`;

const Comment = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid black;
`;

const Submit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  textarea {
    margin-top: 10px;
  }
  button {
    width: 10%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
  }
`;

const CommentList = styled.div``;
