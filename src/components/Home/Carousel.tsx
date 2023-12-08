import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Test1 from "../../assets/images/test1.jpg";
import Test2 from "../../assets/images/test2.jpg";
import Test3 from "../../assets/images/test3.jpg";
import Test4 from "../../assets/images/test4.jpg";
import Test5 from "../../assets/images/test5.jpg";

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 30,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      arrows: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      centerMode: true,
    };

    let Super = styled.div`
      background-color: black;

      width: 1500px;
    `;

    let Main = styled.div`
      margin: auto;
      margin-top: 150px;

      width: 900px;
    `;

    let Carousel = styled.div`
      margin-left: auto;
      width: 100%;
      height: 400px;
      overflow: hidden;
      background-color: yellow;
    `;

    let Photobox = styled.img`
      max-width: 100%;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    `;

    return (
      <Super>
        <Main>
          <Slider {...settings}>
            <Carousel>
              <Photobox src={Test1}></Photobox>
            </Carousel>
            <Carousel>
              <Photobox src={Test2}></Photobox>
            </Carousel>
            <Carousel>
              <Photobox src={Test3}></Photobox>
            </Carousel>
            <Carousel>
              <Photobox src={Test4}></Photobox>
            </Carousel>
            <Carousel>
              <Photobox src={Test5}></Photobox>
            </Carousel>
            <Carousel>
              <Photobox src={Test5}></Photobox>
            </Carousel>
          </Slider>
        </Main>
      </Super>
    );
  }
}

export default Carousel;
