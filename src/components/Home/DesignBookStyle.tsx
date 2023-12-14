import Design from "../Home/BookImage/BookSection"
import Design1 from "../Home/BookImage/BookSection1"
import Design2 from "../Home/BookImage/BookSection2"
import Design3 from "../Home/BookImage/BookSection3"
import Design4 from "../Home/BookImage/BookSection4"
import Design5 from "../Home/BookImage/BookSection5"
import styled from 'styled-components'


function DesignBookStyle() {
  return (
    <BookDesign>
        <Book>
            <Design />
            <Design1 />
            <Design2 />
            <Design3 />
            <Design4 />
            <Design5 />
        </Book>
        
    </BookDesign>
  )
}

export default DesignBookStyle;

const BookDesign = styled.section`
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 100px;
`;

const Book = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px;
    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 1300px) {
        & > *:nth-child(n + 6){
            display: none;}
    }

    @media screen and (max-width: 1200px) {
        & > *:nth-child(n + 5){
            display: none;}
    }
    @media screen and (max-width: 1000px) {
        & > *:nth-child(n + 4){
            display: none;}
    }
`;