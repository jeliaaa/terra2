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
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import team1 from './assets/team/team1.png'
import team2 from './assets/team/team2.png'
import team3 from './assets/team/team3.png'
import team4 from './assets/team/team4.png'
import team5 from './assets/team/team5.png'
import logo from './assets/logo.png'
import raspberry from './assets/comps/rsapberry.webp'
import remote from './assets/comps/remote.jpg'
import motor from './assets/comps/motor.jpg'
import ros from './assets/comps/ros.JPG'
import esp from './assets/comps/esp32.jpg'

function App() {
  const { t } = useTranslation();
  const Scroll = require("react-scroll");
  const scroll = Scroll.animateScroll;

  const teamMembers = [
    {
      id: 1,
      name: 'დავით რუსია',
      img: team1,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'გიგი გამსახურდია',
      img: team3,
      bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, {
      id: 3,
      name: 'საბა ხაბურზანია',
      img: team2,
      bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, {
      id: 4,
      name: 'ლუკა კუკავა',
      img: team4,
      bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, {
      id: 5,
      name: 'თამარ გამგებელი',
      img: team5,
      bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more team members as needed
  ];

  const comps = [
    {
      id : 1,
      name : 'Raspberry Pi4',
      img: raspberry
    },
    {
      id : 2,
      name : 'ROS 2-humble',
      img: ros
    },
    {
      id : 3,
      name : 'ESP32',
      img: esp
    },
    {
      id : 4,
      name : 'Flysky transmiiter and reciever',
      img: remote
    },
    {
      id : 5,
      name : 'ერთი ცხენის ძალის მქონე ძრავი რეზინის მუხლუხოთი',
      img: motor
    },
  ]

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
          <Link className="nav-link navLinks" style={{ paddingLeft: 0 }} onClick={() => scroll.scrollToTop()}>
            <img src={logo} style={{ width: 50 }} alt="..." />
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
                  გუნდის მიზანი
                </Link>
                <Link className="nav-link navLinks" to="overview">
                  პეოექტის მიმოხილვა
                </Link>
                <Link className="nav-link navLinks" to="projectInfo">
                  პროექტის ფუნქციონალი
                </Link>
                <Link className="nav-link navLinks" to="projectProgress">
                  პროექტის პროგრესი
                </Link>
                <Link className="nav-link navLinks" to="specialThanks">
                  განსაკუთრებული მადლობა
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
          <iframe width="95%" height="280" src="https://www.youtube.com/embed/DeumyOzKqgI?si=EBY9NbIZn6c2XhZn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
          <h4>ჭკვიანი უნიფორმა</h4>
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
          <h4>ჭკვიანი ვენტილაცია</h4>
          <div className="text_wrap">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit quos voluptates nulla nostrum quisquam ratione at corporis mollitia expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero dolorum beatae corrupti laudantium odio ipsa, cum repudiandae quo exercitationem aliquam sed. Numquam eaque quisquam quae tenetur nesciunt odit blanditiis!</p>
          </div>
          <div style={{ width: '95%', height: 280 }} ></div>
        </div>
        <hr />
        <div className="block">
          <h4>მონიტორინგის სისტემა</h4>
          <div className="text_wrap">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit quos voluptates nulla nostrum quisquam ratione at corporis mollitia expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero dolorum beatae corrupti laudantium odio ipsa, cum repudiandae quo exercitationem aliquam sed. Numquam eaque quisquam quae tenetur nesciunt odit blanditiis!</p>
          </div>
          <div style={{ width: '95%', height: 280 }} ></div>
        </div>
      </Scroll.Element>
      <Scroll.Element name="projectInfo" className="about" style={{ backgroundColor: 'antiquewhite' }}>
        <div className="img_wrap">
          <div className="graph">
            <img style={{ zIndex: 100, cursor: 'pointer' }} onClick={() => setDegrees()} className="btnImg" src={buttonImg} alt="..." />
            <img style={{ transform: `rotate(${deg}deg)`, zIndex: '-2' }} className="circleImg" src={circleImg} alt="..." />
          </div>
        </div>
      </Scroll.Element>
      <Scroll.Element name="components" className="partners">
        <h1>გამოყენებული კომპონენტები</h1>
        <hr style={{ width: '100%' }} />
        {comps.map((e) => (
          <div key={e} className="partner">
            <p>{e.name}</p>
            <img style={{ borderRadius: '50%', width:100, height:100 }} src={e.img} alt="..." />
          </div>
        ))}
      </Scroll.Element>
      <Scroll.Element name="projectProgress" className="info">
        <h1 className="mb-3">პროექტის განვითარება</h1>
        <hr />
        <Swiper
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img alt="..." src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <h4>ajdakf</h4>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="..." src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <h4>ajdakf</h4>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="..." src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <h4>ajdakf</h4>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="..." src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <h4>ajdakf</h4>
          </SwiperSlide>
        </Swiper>

        {/* <ReactPlayer controls url={'https://youtu.be/DeumyOzKqgI?si=I8C-HXa0AmPkhofN'} /> */}
      </Scroll.Element>
      <Scroll.Element name="minerConsultation" className="about">
        <div className="text_wrap">
          <h2 className="about-header">კონსულტაცია</h2>
          <ul style={{ listStyle: 'none' }}>
            <li><i className="fa-solid fa-location-dot" style={{ color: "#EF8600" }}></i> საქართველოს ტექნიკური უნივერსიტეტი</li>
            <li><i className="fa-solid fa-user" style={{ color: "#EF8600" }}></i> საქართველოს ტექნიკური უნივერსიტეტი</li>
          </ul>
        </div>
        <div className="img_wrap">
          <img src={team} alt="..." />
        </div>
      </Scroll.Element>
      <Scroll.Element name="specialThanks" className="partners" style={{ backgroundColor: 'gold' }}>
        <h1>განსაკუთრებული მადლობა</h1>
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
      <Scroll.Element name="team" className="team" style={{ backgroundColor: 'red', padding: 20 }}>
        <h2 className="mb-4">{t('team')}</h2>
        <Carousel style={{ width: '100%' }}>
          {teamMembers.map((member) => (
            <Carousel.Item>
              <div style={{ backgroundColor: 'red', width: '100%', height: 400 }}></div>
              <Carousel.Caption>
                <img alt="..." src={member.img} style={{ borderRadius: '50%' }} />
                <h3>{member.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Scroll.Element>
      <footer >
        <div>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
        <div>
          <a href="mailto:your-email@gmail.com">Gmail</a>
        </div>
        <div>
          <span>Mobile: +1 (123) 456-7890</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
