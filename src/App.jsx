import "./App.scss";
import "./i18n";
import { useTranslation } from "react-i18next";
import '../src/patrick-hendry-asHMHLCdv7M-unsplash.jpg'
import team from '../src/343935063_1061082471946518_1424884706702797220_n (1).jpg'
import map from '../src/background.png'
import buttonImg from './assets/imgOfGraph2.png'
import circleImg from './assets/imgOfGraph.png'
import {
  Carousel,
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
function App() {
  const { t } = useTranslation();
  const Scroll = require("react-scroll");
  const scroll = Scroll.animateScroll;

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
  let [deg, setDeg] = useState(0);
  const setDegrees = () => {
    if (deg >= 355) {
      setDeg(0);
    } else {
      setDeg(deg += 51.5);
    }
    console.log(deg);
  }
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
                <Link className="nav-link navLinks" to="about">
                  {t('overview')}
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
                  {t('achievements')}
                </Link>
                <Link className="nav-link navLinks" to="team">
                  {t('partners')}
                </Link>
                <Link className="nav-link navLinks" to="team">
                  {t('team')}
                </Link>
                <Link className="nav-link navLinks" to="team">
                  {t('contact')}
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="main">
        <div className="mainHero">
          <h2>კეთილი იყოს თქვენი მობრძანება TerraTech ის პროექტში - <br />რობოტი მაღაროელი და ჭკვიანი უნიფორმა</h2>
          <Link to="about"><button>{t('seeMore')}</button></Link>
        </div>
      </div>
      <Scroll.Element name="about" className="about">
        <div className="text_wrap">
          <h2 className="about-header">{t('about')}</h2>
          <p>კეთილი იყოს თქვენი მობრძანება TerraTech-ში, ხუთკაციან გუნდში საქართველოდან, რომლებიც არიან სამთო ინდუსტრიის ყველაზე მასშტაბური პროექტის შემქმნელები. ჩვენი ინოვაცია შეიცავს რობოტ მაღაროელს, ჭკვიან უნიფორმას და ყოვლისმომცველ ჭკვიან სამონიტორინგო და სავენტილაციო სისტემას. ჩვენი მთავარი მიზანია შევქმნათ უსაფრთხო და მაღალ-ტექნოლოგიური გარემო საქართველოს მაღაროებში. TerraTech ის მრავალფეროვანი გუნდი თავდაუზოგავად შრომობს და თითოეულ წევრს აქვს უნიკალური უნარები რათა დღევანდელი სამწუხარო რეალობა სამუდამოდ შეიცვალოს. ჩვენი პროექტი არის პასუხი, ცნობილ ტრაგედიებსა და გამოწვევებს ქართულ სამთო სფეროში, რომელიც ეძღვნება ინდუსტრიის პრობლემების მოგვარებას და შერბილებას. შემოგვიერთდით სამთო მომავლის ფორმირებაში - სადაც მიწა და ტექნოლოგია ერთმანეთს ერწყმის და შეიქმნება გადაწყვეტილება, რომელიც მსოფლიოზე ხანგრძლივ გავლენას მოახდენს. </p>
        </div>
        <div className="img_wrap">
          <img src={team} alt="..." />
        </div>
      </Scroll.Element>

      <Scroll.Element name="teamVision" className="teamVision" style={{ backgroundColor: 'darkviolet' }}>
        <h1 className="mission-header">გუნდის მიზანი</h1>
        <div className="text_wrap">
          <p>TerraTech-ის მიზანია რევოლუცია მოვახდინოთ სამთო ინდუსტრიაში ინოვაციური გადაწყვეტილებების საშუალებით, რომლის პრიორიტეტია უსაფრთხოება, ეფექტურობა და მდგრადობა.
            ჩვენი მისიაა შევამსუბუქოთ ის გამოწვევები, რომელთა წინაშეც დგას საქართველოს სამთო სექტორი უახლესი ტექნოლოგიების დანერგვით, რომლებიც აძლიერებენ საოპერაციო სტანდარტებს და იცავენ მაღაროელების კეთილდღეობას. </p>
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
        </div>
      </Scroll.Element>

      <Scroll.Element name="teamVision" className="teamVision" style={{ backgroundColor: 'darkviolet' }}>
        <h1 className="mission-header">გუნდის წარმომავლობა</h1>

        <img src={map} alt="" />
        <div className="text_wrap">
          <p>TerraTech შედგება ერთგული მეგობრებისაგან. ჩვენი მრავალფეროვანი გუნდი აერთიანებს უამრავ უნარებსა და გამოცდილებას, რომელიც ქმნის გარემოს სადაც კოლექტიური გარემო ხელს უწყობს ინოვაციურ წინსვლას.
          </p>
        </div>
      </Scroll.Element>

      <Scroll.Element name="overview" className="overview">
        <h1>პროექტის მიმოხილვა</h1>
        <hr />
        <div className="video_wrap">
          <h4>რობოტი მაღაროელი</h4>
          <div style={{ width: '95%', height: 280 }}></div>
        </div>

        <div className="text_wrap">
          <p>ჩვენი რობოტი მაქსიმალურად ურუნველყოფს მაღაროში სახიფათო გარემოს განეიტრალებასა და კავშირის დამყარებას სამონიტორინგო სისტემასთან. რობოტის ყველაზე მნიშვნელოვანი ფუნქციაა მომუშავე პერსონალის ჯანმრთელობისა და უსაფრთხოების მონაცემების შეგროვება,  რომელზეც მუდმივი წვდომა აქვს სამონიტორინგო სამსახურს. აღსანიშნავია, რომ ჩვენი რობოტი მოსალოდნელ საშიშროებას აფიქსირებს რამაც შესაძლოა მაღაროელის სიცოცხლე გადაარჩინოს. გარდა ამისა რობოტის ფუნქციონალში შედის: <br />
            <br />1)	მავნე აირების დაფიქსირებას და ფილტრაცია
            <br />2)	სამუშაოს დამოუკიდებლად  განხორციელება
            <br />3)	3D რუკის შექმნა
            <br />4)	ჭკვიანი სავენტილაციო სისტემასთან კავშირი
            <br />5)	თვითდატენვა</p>
        </div>

        <div className="block">
          <Carousel interval={1000} style={{ width: '100%' }}>
            {[1, 2, 3].map((member) => (
              <Carousel.Item>
                <img style={{ width: '100%' }} src="https://picsum.photos/200" alt="..." />
              </Carousel.Item>
            ))}
          </Carousel>
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
          <div style={{ width: '95%', height: 280 }} ></div>
        </div>
        <hr />
        <div className="block">
          <h4>Smart Ventilation</h4>
          <div className="text_wrap">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit quos voluptates nulla nostrum quisquam ratione at corporis mollitia expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero dolorum beatae corrupti laudantium odio ipsa, cum repudiandae quo exercitationem aliquam sed. Numquam eaque quisquam quae tenetur nesciunt odit blanditiis!</p>
          </div>
          <div style={{ width: '95%', height: 280 }} ></div>
        </div>
        <hr />
        <div className="block">
          <h4>Monitoring system</h4>
          <div className="text_wrap">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit quos voluptates nulla nostrum quisquam ratione at corporis mollitia expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero dolorum beatae corrupti laudantium odio ipsa, cum repudiandae quo exercitationem aliquam sed. Numquam eaque quisquam quae tenetur nesciunt odit blanditiis!</p>
          </div>
          <div style={{ width: '95%', height: 280 }} ></div>
        </div>
      </Scroll.Element>
      <Scroll.Element name="projectInfo" className="about" style={{ backgroundColor: 'antiquewhite' }}>
        <div className="img_wrap">
          <h2>{t('projectInfo')}</h2>
          <hr />
          <div className="graph">
            <img style={{ zIndex: 100, cursor:'pointer' }} onClick={() => setDegrees()} className="btnImg" src={buttonImg} alt="..." />
            <img style={{ transform: `rotate(${deg}deg)`, zIndex: '-2' }} className="circleImg" src={circleImg} alt="..." />
          </div>
          <table>
            <thead>
              <tr>
                გამოყენებული კომპონენტები
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>რასბერი პი</td>
                <td>
                  <div >
                    <img src={team} alt="" style={{ height: '50px', width: '100px', background: '#3498db' }} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Category 2</td>
                <td>
                  {/* Replace 'image-url.jpg' with the actual URL of your image */}
                  <img
                    src="image-url.jpg"
                    alt="Category 2 Graph"
                    style={{ height: '100px' }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Scroll.Element>
      <Scroll.Element name="projectProgress" className="info">
        <h1 className="mb-3">Project Progress</h1>
        <hr />
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
      <Scroll.Element name="achievements" className="partners" style={{ backgroundColor: 'gold' }}>
        <h1>Achievements</h1>
        <hr />
        <ul id="achievements">
          <li>Completed a challenging project ahead of schedule, exceeding expectations.</li>
          <li>Received Employee of the Month award for outstanding dedication and performance.</li>
          <li>Successfully led a cross-functional team to achieve a 20% increase in productivity.</li>
          <li>Implemented innovative solutions that resulted in a cost savings of 15%.</li>
          <li>Attained a professional certification in [Your Field of Expertise].</li>
          <li>Published an article in [Reputable Journal/Magazine] on [Topic].</li>
          <li>Contributed to [Company/Team] winning the [Specific Award or Recognition].</li>
          <li>Consistently met or exceeded sales targets for [Number] consecutive quarters.</li>
          <li>Volunteered for and successfully executed a community outreach program.</li>
          <li>Completed [Number] hours of professional development training in [Specific Skill].</li>
        </ul>
      </Scroll.Element>
      <Scroll.Element name="partners" className="partners">
        <h1>Partners</h1>
        <hr style={{ width: '100%' }} />
        {[0, 1, 2, 3].map((e) => (
          <div key={e} className="partner">
            <p>Lorem ipsum dolor sit.</p>
            <img src="https://picsum.photos/100" alt="..." />
          </div>
        ))}
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
      <Scroll.Element name="contact" className="partners" style={{ backgroundColor: 'yellowgreen' }}>
        <h1>Contact us</h1>
        <hr />
        {['instagram', 'facebook', 'telegram', 'linkedin'].map((e) => (
          <a key={e} href={`https://${e}.com`} className="partner">
            <p>{e}</p>
            <img src="https://picsum.photos/100" alt="..." />

          </a>
        ))}
      </Scroll.Element>
    </div>
  );
}

export default App;
