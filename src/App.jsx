import Slider from "react-slick";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoImg from "./assets/logo.png";
import one from "./assets/1.png";
import two from "./assets/2.jpeg";
import trhee from "./assets/3.jpeg";
import styled from "styled-components";

const SliderTitle = styled.div`
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
const ImgBlock = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 100%;
  }
`;

const Logo = styled.div`
  width: 200px;

  img {
    width: 100%;
  }
`;

const Menu = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuItem = styled.div`
  margin: 0 10px;
`;

function App() {
  let settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <Header>
        <Logo>
          <img src={LogoImg} alt="ロゴ" />
        </Logo>
        <Menu>
          <MenuItem>メニュ-1</MenuItem>
          <MenuItem>メニュ-2</MenuItem>
          <MenuItem>メニュ-3</MenuItem>
          <MenuItem>メニュ-4</MenuItem>
        </Menu>
      </Header>

      <Slider {...settings}>
        <ImgBlock>
          <SliderTitle>スライダーの説明 1</SliderTitle>
          <img src={one} alt="" />
        </ImgBlock>
        <ImgBlock>
          <SliderTitle>スライダーの説明 2</SliderTitle>
          <img src={two} alt="" />
        </ImgBlock>
        <ImgBlock>
          <SliderTitle>スライダーの説明 3</SliderTitle>
          <img src={trhee} alt="" />
        </ImgBlock>
      </Slider>
    </div>
  );
}

export default App;
