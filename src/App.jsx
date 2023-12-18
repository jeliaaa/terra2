import "./App.scss";
import "./i18n";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  Container,
  Nav,
  Navbar,
  Offcanvas,
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
  });
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
                <Link className="nav-link navLinks" to="teamVision">
                  {t('teamVision')}
                </Link>
                <Link className="nav-link navLinks" to="projectInfo">
                  {t('projectInfo')}
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
      <Scroll.Element name="overview" className="overview">
        <h1>Project overview</h1>
        <hr />
        <div className="video_wrap">
          <h4>Introduction to Project</h4>
          <iframe src="https://drive.google.com/file/d/1PhDKUUXOUA5YAyk58pAUK6r9CTHqdoTc/preview" width="95%" height="280" allow="autoplay"></iframe>
        </div>
        <hr />
        <div className="block">
          <h4>Robot Miner</h4>
          <Carousel interval={500} style={{ width: '100%' }}>
            {[1, 2, 3].map((member) => (
              <Carousel.Item>
                <img style={{ width: '100%' }} src="https://picsum.photos/200" alt="..." />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="text_wrap">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit quos voluptates nulla nostrum quisquam ratione at corporis mollitia expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero dolorum beatae corrupti laudantium odio ipsa, cum repudiandae quo exercitationem aliquam sed. Numquam eaque quisquam quae tenetur nesciunt odit blanditiis!</p>
          </div>
          <iframe src="https://drive.google.com/file/d/1PhDKUUXOUA5YAyk58pAUK6r9CTHqdoTc/preview" width="95%" height="280" allow="autoplay"></iframe>
        </div>
        <hr />
        <div className="block">
          <h4>Smart Uniform</h4>
          <Carousel interval={500} style={{ width: '100%' }}>
            {[1, 2, 3].map((member) => (
              <Carousel.Item>
                <img style={{ width: '100%' }} src="https://picsum.photos/200" alt="..." />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="text_wrap">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit quos voluptates nulla nostrum quisquam ratione at corporis mollitia expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero dolorum beatae corrupti laudantium odio ipsa, cum repudiandae quo exercitationem aliquam sed. Numquam eaque quisquam quae tenetur nesciunt odit blanditiis!</p>
          </div>
          <iframe src="https://drive.google.com/file/d/1PhDKUUXOUA5YAyk58pAUK6r9CTHqdoTc/preview" width="95%" height="280" allow="autoplay"></iframe>
        </div>
        <hr />
        <div className="block">
          <h4>Smart Ventilation</h4>
          <div className="text_wrap">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit quos voluptates nulla nostrum quisquam ratione at corporis mollitia expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero dolorum beatae corrupti laudantium odio ipsa, cum repudiandae quo exercitationem aliquam sed. Numquam eaque quisquam quae tenetur nesciunt odit blanditiis!</p>
          </div>
          <iframe src="https://drive.google.com/file/d/1PhDKUUXOUA5YAyk58pAUK6r9CTHqdoTc/preview" width="95%" height="280" allow="autoplay"></iframe>
        </div>
        <div className="block">
          <h4>Monitoring system</h4>
          <div className="text_wrap">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit quos voluptates nulla nostrum quisquam ratione at corporis mollitia expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero dolorum beatae corrupti laudantium odio ipsa, cum repudiandae quo exercitationem aliquam sed. Numquam eaque quisquam quae tenetur nesciunt odit blanditiis!</p>
          </div>
          <iframe src="https://drive.google.com/file/d/1PhDKUUXOUA5YAyk58pAUK6r9CTHqdoTc/preview" width="95%" height="280" allow="autoplay"></iframe>
        </div>
      </Scroll.Element>
      <Scroll.Element name="teamVision" className="teamVision" style={{ backgroundColor: 'darkviolet' }}>
        <h1>Team missions and visions</h1>
        <div className="text_wrap">
          <h2>Missions</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam alias officia non expedita rerum nihil veritatis consequatur quos porro? Minus eaque excepturi culpa aspernatur amet maiores possimus cumque accusamus dolore alias obcaecati ipsum, error ut quia est perspiciatis. Delectus praesentium ipsam sint, dignissimos laboriosam optio? Odit cum doloremque dolores iure ullam possimus quibusdam! Voluptatum, minus est vitae quaerat quas quasi fugiat et illo ullam aliquid commodi minima consectetur. Dignissimos accusantium sint aliquid molestiae non veritatis eius cumque repellendus. Iste perferendis eos maiores et nisi. Repudiandae molestias id voluptas nesciunt illo, odit, suscipit impedit, culpa quidem vel adipisci quasi unde.</p>
        </div>
        <div className="img_wrap">
          <div className="three">
            {[1, 2, 3].map((id) => (
              <img src='https://picsum.photos/100' alt={id} style={{ borderRadius: '50%' }} />
            ))}
          </div>
          <div className="two">
            {[1, 2].map((id) => (
              <img src='https://picsum.photos/100' alt={id} style={{ borderRadius: '50%' }} />
            ))}
          </div>
          <div className="three">
            {[1, 2, 3].map((id) => (
              <img src='https://picsum.photos/100' alt={id} style={{ borderRadius: '50%' }} />
            ))}
          </div>
        </div>
        <div className="text_wrap">
          <h2>Visions</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam alias officia non expedita rerum nihil veritatis consequatur quos porro? Minus eaque excepturi culpa aspernatur amet maiores possimus cumque accusamus dolore alias obcaecati ipsum, error ut quia est perspiciatis. Delectus praesentium ipsam sint, dignissimos laboriosam optio? Odit cum doloremque dolores iure ullam possimus quibusdam! Voluptatum, minus est vitae quaerat quas quasi fugiat et illo ullam aliquid commodi minima consectetur. Dignissimos accusantium sint aliquid molestiae non veritatis eius cumque repellendus. Iste perferendis eos maiores et nisi. Repudiandae molestias id voluptas nesciunt illo, odit, suscipit impedit, culpa quidem vel adipisci quasi unde.</p>
        </div>
      </Scroll.Element>
      <Scroll.Element name="projectInfo" className="about" style={{ backgroundColor: 'antiquewhite' }}>
        <div className="img_wrap">
          <h2>{t('projectInfo')}</h2>
          <hr className="mb-5 mt-5" />
          <img src="https://picsum.photos/800" alt="..." />
        </div>
        <div className="text_wrap">

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam alias officia non expedita rerum nihil veritatis consequatur quos porro? Minus eaque excepturi culpa aspernatur amet maiores possimus cumque accusamus dolore alias obcaecati ipsum, error ut quia est perspiciatis. Delectus praesentium ipsam sint, dignissimos laboriosam optio? Odit cum doloremque dolores iure ullam possimus quibusdam! Voluptatum, minus est vitae quaerat quas quasi fugiat et illo ullam aliquid commodi minima consectetur. Dignissimos accusantium sint aliquid molestiae non veritatis eius cumque repellendus. Iste perferendis eos maiores et nisi. Repudiandae molestias id voluptas nesciunt illo, odit, suscipit impedit, culpa quidem vel adipisci quasi unde.</p>
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
            <img alt="..." src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <h6>დღე პირველი</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="..." src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <h6>დღე მეორე</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="..." src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <h6>დღე mesame</h6>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="..." src="https://swiperjs.com/demos/images/nature-2.jpg" />
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
                <img alt="..." src="https://placehold.co/150" style={{ borderRadius: '50%' }} />
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
