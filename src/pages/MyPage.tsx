import styled from "styled-components";
import CatImg from "../assets/images/baseimg.jpg";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Intro from "../components/Modal/Intro";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { User } from "firebase/auth";
import Loader from "../components/Loader/Loader";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    width: "80%",
    zIndex: 11,
  },
};

interface NewIntro {
  imageUrl: string;
  NickName: string;
}

function MyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newIntro, setNewIntro] = useState<NewIntro | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

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
            setNewIntro({
              imageUrl: userData.profileImageUrl,
              NickName: userData.NickName,
            });
          }
        }
        setUserEmail(currentUser.email);
      }
    } catch (error) {
      console.error("Error user data", error);
    }
  };

  useEffect(() => {
    // 현재 로그인된 사용자 상태 변경 감지
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // 컴포넌트 언마운트 시 unsubscribe
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // 사용자가 로그인되면 해당 사용자의 데이터를 가져옴
    if (user) {
      userDataGet();
    }
  }, [user]);

  return (
    <Body>
      <Loader loading={loading} />
      <Card>
        <Lines />
        {!modalOpen && (
          <ImgBx>
            <img src={newIntro?.imageUrl || CatImg} alt="User Image" />
          </ImgBx>
        )}
        <ConTent>
          <DeTail>
            <h2>
              {newIntro?.NickName} <br />
            </h2>
            <Data>
              <h3>
                ID <br />
                <span>{userEmail}</span>{" "}
              </h3>
              <h3>
                NickName <br />
                <span>{newIntro?.NickName}</span>{" "}
              </h3>
            </Data>

            <ActionBtn>
              <button onClick={openModal}> 수정하기</button>
            </ActionBtn>
          </DeTail>
        </ConTent>
      </Card>
      <Modal isOpen={modalOpen} onRequestClose={closeModal} style={modalStyles}>
        <Intro
          closeModal={closeModal}
          changeIntro={setNewIntro}
          setLoading={setLoading}
        />
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </Body>
  );
}

export default MyPage;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #333;
  font-family: "Poppins", sans-serif;
`;

const Lines = styled.div`
  position: absolute;
  inset: 0;
  background: #000;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 120px;
    background: linear-gradient(
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff,
      transparent
    );
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  &::after {
    content: "";
    position: absolute;
    background: #292929;
    inset: 3px;
  }
`;

const ImgBx = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: black;
  transition: 0.5s;
  z-index: 10;
  overflow: hidden;

  img {
    position: absolute;
    z-index: 1;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    top: 10px;
    left: 10px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;
    transform: translate(-50%, -50%);
    background: linear-gradient(
      transparent,
      #ff3c7b,
      #ff3c7b,
      #ff3c7b,
      transparent
    );
    animation: animate2 6s linear infinite;

    @keyframes animate2 {
      0% {
        transform: translate(-50%, -50%) rotate(360deg);
      }

      100% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
  }
  &::after {
    content: "";
    position: absolute;
    inset: 3px;
    background: #292929;
  }
`;

const ConTent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;

const DeTail = styled.div`
  padding: 40px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  transform: translateY(145px);
`;

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  h3 {
    font-size: 1em;
    color: #45f3ff;
    line-height: 1.2em;
    font-size: 600;
    margin-left: 15px;
  }

  span {
    font-size: 0.85em;
    font-weight: 400;
    color: #fff;
  }
`;

const ActionBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    padding: 10px 30px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 500;
    background: #45f3ff;
    color: #222;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

/*변수 사용 순서때문에 card에 css를 imgbx밑으로 내렸음 */
const Card = styled.div`
  position: relative;
  width: 350px;
  height: 190px;
  background: #333;
  transition: 0.5s;

  h2 {
    font-size: 1.25em;
    font-weight: 600;
    color: #45f3ff;
    line-height: 1.2em;
  }

  span {
    font-size: 0.75em;
    font-weight: 500;
    color: #fff;
  }
  &:hover {
    height: 550px;

    ${ImgBx} {
      width: 250px;
      height: 250px;
    }

    ${ConTent} {
      transform: translateY(0px);
    }

    ${DeTail} {
      transform: translateY(0px);
    }
  }
`;
