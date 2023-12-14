import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Test1 from "../../assets/images/test1.jpg";
import Test2 from "../../assets/images/test2.jpg";
import Test3 from "../../assets/images/test3.jpg";
import Test4 from "../../assets/images/test4.jpg";
import Test5 from "../../assets/images/test5.jpg";

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
            <Photowirte></Photowirte>
            <Photobox src={Test1}></Photobox>
          </Carousela>
          <Carousela>
            <Photowirte></Photowirte>
            <Photobox src={Test2}></Photobox>
          </Carousela>
          <Carousela>
            <Photowirte></Photowirte>
            <Photobox src={Test3}></Photobox>
          </Carousela>
          <Carousela>
            <Photowirte></Photowirte>
            <Photobox src={Test4}></Photobox>
          </Carousela>
          <Carousela>
            <Photowirte></Photowirte>
            <Photobox src={Test5}></Photobox>
          </Carousela>
          <Carousela>
            <Photowirte></Photowirte>
            <Photobox src={Test5}></Photobox>
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

const Photowirte = styled.div`
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: absolute;
  width: 40%;
  color: white;
  h2 {
    position: relative;
    top: 150px;
    left: 100px;
    font-size: 2.3em;
  }
  h3 {
    position: relative;
    top: 200px;
    left: 100px;
    font-size: 1.5em;
  }

  @media (max-width: 1380px) {
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.5em;
    }
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
