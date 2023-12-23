import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import SlideImg1 from "../../assets/images/book1.jpg";
import SlideImg2 from "../../assets/images/book2.jpg";
import SlideImg3 from "../../assets/images/book3.jpg";
import SlideImg4 from "../../assets/images/book4.jpg";
import SlideImg5 from "../../assets/images/book5.jpg";
import SlideImg6 from "../../assets/images/book6.jpg";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 30,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    centerMode: true,
  };

  return (
    <Super>
      <Main>
        <Slider {...settings}>
          <Carousela>
            <Photobox src={SlideImg1}></Photobox>
          </Carousela>
          <Carousela>
            <Photobox src={SlideImg2}></Photobox>
          </Carousela>
          <Carousela>
            <Photobox src={SlideImg3}></Photobox>
          </Carousela>
          <Carousela>
            <Photobox src={SlideImg4}></Photobox>
          </Carousela>
          <Carousela>
            <Photobox src={SlideImg5}></Photobox>
          </Carousela>
          <Carousela>
            <Photobox src={SlideImg6}></Photobox>
          </Carousela>
        </Slider>
      </Main>
    </Super>
  );
}

export default Carousel;

const Super = styled.div`
  width: 100%;
  margin-bottom: 100px;
  align-items: center;
  justify-self: center;
  display: flex;
`;

const Main = styled.div`
  margin: auto;
  margin-top: 50px;

  width: 1400px;
  @media (max-width: 1380px) {
    width: 80%;
  }
`;

const Carousela = styled.div`
  margin-left: auto;
  width: 100%;
  height: 600px;
  overflow: hidden;
  @media (max-width: 1120px) {
    height: 300px;
  }
`;

const Photobox = styled.img`
  max-width: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
