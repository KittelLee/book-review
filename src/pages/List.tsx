// import { useState } from "react";
// import styled from "styled-components";
// import Modal from "react-modal";
// import Review from "../components/Modal/Review";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     height: "80%",
//     width: "80%",
//   },
// };

// Modal.setAppElement("#root");

// function List() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   function openModal() {
//     setModalIsOpen(true);
//   }

//   function closeModal() {
//     setModalIsOpen(false);
//   }

//   return (
//     <ListWrap>
//       <Book src="../../src/assets/images/test5.jpg" onClick={openModal}/>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//       >
//         <Review />
//         <CloseBtn>
//           <button onClick={closeModal}>X</button>
//         </CloseBtn>
//       </Modal>
//       <Book src="../../../src/assets/images/test5.jpg" onClick={openModal}/>
//       <Book src="../../../src/assets/images/test5.jpg" onClick={openModal}/>
//       <Book src="../../../src/assets/images/test5.jpg" onClick={openModal}/>
//     </ListWrap>
//   );
// }

// export default List;

// const ListWrap = styled.div``;

// const Book = styled.img`
//   height: 300px;
//   margin: 180px;
//   // padding: 100px;
//   cursor: pointer;
// `;

// const CloseBtn = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   button {
//     border: none;
//     background-color: #fff;
//     font-size: 1.2rem;
//     &:hover {
//       cursor: pointer;
//       color: red;
//     }
//   }
// `;


import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Review from "../components/Modal/Review";
import CatImg from "../assets/images/test5.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    width: "80%",
  },
};

Modal.setAppElement("#root");

function List() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <ListWrap>
      <img src={CatImg} onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Review />
        <CloseBtn>
          <button onClick={closeModal}>X</button>
        </CloseBtn>
      </Modal>
      <img src={CatImg} onClick={openModal} />
      <img src={CatImg} onClick={openModal} />
      <img src={CatImg} onClick={openModal} />
    </ListWrap>
  );
}

export default List;

const ListWrap = styled.div`
  img {
    height: 300px;
    margin: 180px;
    cursor: pointer;
  }`
;

const CloseBtn = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  button {
    border: none;
    background-color: #fff;
    font-size: 1.2rem;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }`
;
