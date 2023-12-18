import logo from "./logo.svg";
import "./App.scss";
import "./i18n";
import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
function App() {
  const { t } = useTranslation();
  const Scroll = require("react-scroll");
  const scroll = Scroll.animateScroll;
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'CTO',
      bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more team members as needed
  ];
  return (
    <div className="App">
      <Navbar key={"lg"} expand={"lg"} className="nav">
        <Container fluid>
          <Link className="nav-link navLinks" onClick={() => scroll.scrollToTop()}>
            <Navbar.Brand>TerraTech</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                TerraTech
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link navLinks" to="about">
                  {t('about')}
                </Link>
                <Link className="nav-link navLinks" to="projectProgress">
                  {t('projectProgress')}
                </Link>
                <Link className="nav-link navLinks" to="team">
                  {t('team')}
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="main">
        <div className="mainHero">
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis!</h2>
          <Link to="about"><button>{t('seeMore')}</button></Link>
        </div>
      </div>
      <Scroll.Element name="about" className="about">
        <div className="text_wrap">
          <h2>{t('about')}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam alias officia non expedita rerum nihil veritatis consequatur quos porro? Minus eaque excepturi culpa aspernatur amet maiores possimus cumque accusamus dolore alias obcaecati ipsum, error ut quia est perspiciatis. Delectus praesentium ipsam sint, dignissimos laboriosam optio? Odit cum doloremque dolores iure ullam possimus quibusdam! Voluptatum, minus est vitae quaerat quas quasi fugiat et illo ullam aliquid commodi minima consectetur. Dignissimos accusantium sint aliquid molestiae non veritatis eius cumque repellendus. Iste perferendis eos maiores et nisi. Repudiandae molestias id voluptas nesciunt illo, odit, suscipit impedit, culpa quidem vel adipisci quasi unde.</p>
        </div>
        <div className="img_wrap">
          <img src="https://picsum.photos/800" alt="..." />
        </div>
      </Scroll.Element>
      <Scroll.Element name="projectProgress" className="info">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <h6>დღე პირველი</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <h6>დღე მეორე</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <h6>დღე mesame</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <h6>დღე meotxe</h6>
          </SwiperSlide>
        </Swiper>

        {/* <ReactPlayer controls url={'https://youtu.be/DeumyOzKqgI?si=I8C-HXa0AmPkhofN'} /> */}
      </Scroll.Element>
      <Scroll.Element>
        
      </Scroll.Element>
      <Scroll.Element name="team" className="team" style={{ backgroundColor: 'red', padding: 20 }}>
        <h2 className="mb-4">{t('team')}</h2>
        <Carousel style={{ width: '100%' }}>
          {teamMembers.map((member) => (
            <Carousel.Item>
              <div style={{ backgroundColor: 'red', width: '100%', height: 400 }}></div>
              <Carousel.Caption>
                <img src="https://placehold.co/150" style={{ borderRadius: '50%' }} />
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Scroll.Element>
    </div>
  );
}

export default App;
