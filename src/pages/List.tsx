// import { useState } from "react";
// import styled from "styled-components";
// import Modal from "react-modal";
// import Review from "../components/Modal/Review";
// import CatImg from "../assets/images/test5.jpg";

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
//       <Book src={CatImg} onClick={openModal} />
//       <div>
//         <p>책제목:</p>
//         <p>저자:</p>
//         <p>출판사:</p>
//       </div>
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
//       <Book src={CatImg} onClick={openModal} />
//       <Book src={CatImg} onClick={openModal} />
//       <Book src={CatImg} onClick={openModal} />
//     </ListWrap>
//   );
// }

// export default List;

// const ListWrap = styled.div`
//   // img {
//   //   height: 300px;
//   //   margin: 180px;
//   //   cursor: pointer;
//   //   // float: left;}
//   `
// ;

// const Book = styled.img`
//   img {
//     height: 300px;
//     margin: 180px;
//     cursor: pointer;
//     // float: left;
//   }
//     `

// const CloseBtn = styled.img`
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
//   }`
// ;

// import { useState } from "react";
// import styled from "styled-components";
// import Modal from "react-modal";
// import Review from "../components/Modal/Review";
// import CatImg from "../assets/images/test5.jpg";

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

// // New BookInfo component to display book details
// const BookInfo = () => (
//   <InfoContainer>
//     <div>Title: Sample Title</div>
//     <div>Author: Sample Author</div>
//     <div>Publisher: Sample Publisher</div>
//   </InfoContainer>
// );

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
//       {/* Example of one image with book information */}
//       <ImageContainer>
//         <img src={CatImg} onClick={openModal} />
//         <BookInfo />
//       </ImageContainer>

//       {/* Add more images with book information as needed */}
//       <ImageContainer>
//         <img src={CatImg} onClick={openModal} />
//         <BookInfo />
//       </ImageContainer>

//       {/* Modal setup */}
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
//     </ListWrap>
//   );
// }

// export default List;

// const ListWrap = styled.div`
//   /* Add styling for the container if needed */
// `;

// const ImageContainer = styled.div`
//   position: relative;
//   margin: 20px;

//   img {
//     height: 300px;
//     cursor: pointer;
//   }
// `;

// const InfoContainer = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 50%;
//   transform: translateX(-50%);
//   background: rgba(255, 255, 255, 0.8);
//   padding: 10px;
//   text-align: center;
//   width: 100%;
// `;

// const CloseBtn = styled.div`
//   /* Your styling for the close button */
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
      <Book src={CatImg} onClick={openModal}>
        
      </Book>
      <div>
          <p>책제목:</p>
          <p>저자:</p>
          <p>출판사:</p>
        </div>
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
      <Book src={CatImg} onClick={openModal}/>
      <Book src={CatImg} onClick={openModal}/>
      <Book src={CatImg} onClick={openModal}/>
    </ListWrap>
  );
}

export default List;

const ListWrap = styled.div``;

const Book = styled.img`
  height: 300px;
  margin: 180px;
  // padding: 100px;
  cursor: pointer;
`;

const CloseBtn = styled.div`
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
  }
`;
