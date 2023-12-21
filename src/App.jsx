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
import circle1 from './assets/circle1.png'
import circle2 from './assets/circle2.png'
import circle3 from './assets/circle3.png'
import circle4 from './assets/circle4.png'
import circle5 from './assets/circle5.png'
import visit1 from './assets/visit1.jpg'
import visit3 from './assets/visit3.jpg'
import visit2 from './assets/visit2.png'
import visit5 from './assets/visit5.jpg'
import cave1 from './assets/cave/1.jpg'
import cave2 from './assets/cave/2.jpg'
import cave3 from './assets/cave/3.jpg'
import cave4 from './assets/cave/4.jpg'
import cave5 from './assets/cave/5.jpg'


function App() {
  const { t } = useTranslation();
  const Scroll = require("react-scroll");
  const scroll = Scroll.animateScroll;
  const circleImgsUp = [circle1, circle2, circle3];
  const circleImgsDown = [circle5, circle4];
  const consultion = [cave1, cave2, cave3, cave4, cave5]
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
  const sliderVisit = [visit1, visit2, visit3, visit5]
  const comps = [
    {
      id: 1,
      name: 'Raspberry Pi4',
      img: raspberry
    },
    {
      id: 2,
      name: 'ROS 2-humble',
      img: ros
    },
    {
      id: 3,
      name: 'ESP32',
      img: esp
    },
    {
      id: 4,
      name: 'Flysky transmiiter and reciever',
      img: remote
    },
    {
      id: 5,
      name: 'ერთი ცხენის ძალის მქონე ძრავი რეზინის მუხლუხოთი',
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
                  პროექტის მიმოხილვა
                </Link>
                <Link className="nav-link navLinks" to="projectInfo">
                  პროექტის ფუნქციონალი
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

      <Scroll.Element name="teamVision" className="teamVision">
        <h1 className="mission-header">გუნდის მიზანი</h1>
        <div className="text_wrap">
          <p>TerraTech-ის მიზანია რევოლუცია მოვახდინოთ სამთო ინდუსტრიაში ინოვაციური გადაწყვეტილებების საშუალებით, რომლის პრიორიტეტია უსაფრთხოება, ეფექტურობა და მდგრადობა.
            ჩვენი მისიაა შევამსუბუქოთ ის გამოწვევები, რომელთა წინაშეც დგას საქართველოს სამთო სექტორი უახლესი ტექნოლოგიების დანერგვით, რომლებიც აძლიერებენ საოპერაციო სტანდარტებს და იცავენ მაღაროელების კეთილდღეობას. </p>
        </div>
        <div className="img_wrap">
          <div className="three">
            {circleImgsUp.map((id) => (
              <img src={id} alt={id} style={{ borderRadius: '50%', width: 100, height: 100 }} />
            ))}
          </div>
          <div className="two">
            {circleImgsDown.map((id) => (
              <img src={id} alt={id} style={{ borderRadius: '50%', width: 100, height: 100 }} />
            ))}
          </div>
        </div>
      </Scroll.Element>

      <Scroll.Element name="teamVision" className="teamVision twoo">
        {/* <hr style={{width:'100%'}} /> */}
        <h1 className="mission-header">გუნდის წარმომავლობა</h1>
        <img src={map} alt="" />
        <div className="text_wrap">
          <p>TerraTech შედგება ერთგული მეგობრებისაგან. ჩვენი მრავალფეროვანი გუნდი აერთიანებს უამრავ უნარებსა და გამოცდილებას, რომელიც ქმნის გარემოს სადაც კოლექტიური გარემო ხელს უწყობს ინოვაციურ წინსვლას.
          </p>
        </div>
      </Scroll.Element>

      <Scroll.Element name="overview" className="overview">
        <h1>პროექტის მიმოხილვა</h1>
        <iframe width="95%" height="280" src="https://www.youtube.com/embed/SiWEZiv0HP4?si=4UUKJylA01seoCMX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <hr />
        <div className="video_wrap">
          <h4>რობოტი მაღაროელი</h4>
        </div>

        <div className="text_wrap">
          <p>ჩვენი რობოტი მაქსიმალურად უზრუნველყოფს მაღაროში სახიფათო გარემოს განეიტრალებასა და კავშირის დამყარებას სამონიტორინგო სისტემასთან. რობოტის ყველაზე მნიშვნელოვანი ფუნქციაა მომუშავე პერსონალის ჯანმრთელობისა და უსაფრთხოების მონაცემების შეგროვება,  რომელზეც მუდმივი წვდომა აქვს სამონიტორინგო სამსახურს. აღსანიშნავია, რომ ჩვენი რობოტი მოსალოდნელ საშიშროებას აფიქსირებს, რამაც შესაძლოა მაღაროელის სიცოცხლე გადაარჩინოს. რობოტის ძირითადი ფუნქციებია: <br />
            <br />1)	მავნე აირების დაფიქსირებას და ფილტრაცია
            <br />2)	მაღაროს 3D რუკის შექმნა
            <br />3)	ჭკვიანი სავენტილაციო სისტემასთან კავშირი
            <br />4)	მძიმე ობიექტების გადაზიდვა
            <br />5)	თვითდატენვა
            <br />6) 	პირველადი დახმარების გაწევა <br /> <br />
            აღსანიშნავია რომ ყველა ზემოთჩამოთვლილ სამუშაოს რობოტი ასრულებს დამოუკიდებლად, თუმცა საჭიროების შემთხვევაში მისი მართვა შესაძლებელი იქნება პულტის მეშვეობითაც.</p>
        </div>

        <div className="block">
          <iframe width="95%" height="280"
            src="https://www.youtube.com/embed/Ly4z99Gp_O4?si=evMXk0X1seu2GWn3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <Carousel interval={1000} style={{ width: '100%' }}>
            {sliderVisit.map((member) => (
              <Carousel.Item>
                <img style={{ width: '100%', height: 300 }} src={member} alt="..." />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <hr />
        <div className="block">
          <h4>ჭკვიანი უნიფორმა</h4>
          <iframe width="95%" height="280" src="https://www.youtube.com/embed/XpTgFsk_dTs?si=RvNoLGF8_coXj2yh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="text_wrap">
            <p>
              ჭკვიანი უნიფორმა შედგება 4 კომპონენტისაგან: ჩაფხუტი, ტანსაცმელი, ქამარი და ფეხსაცმელი. უნიფორმა აგროვებს, მაღაროელების სასიცოცხლო მონაცემებს როგორიცაა: მათი წნევა, პულსი, ტემპერატურა და სხვა. იგი აგროვებს ინფორმაციას მათთან ახლო მდებარე აირებზე და გარემოზე, ხოლო საშიშროების შემთხვევაში ხმოვან სიგნალს გამოსცემს თვით მაღაროელისთვის და ასევე ატყობინებს სამონიტორინგო სისტემას. უნიფორმის საშუალებით შესაძლებელია თითოეული მაღაროელის ადგილმდებარეობის დადგენა რაც საშიშროების შემთხვევაში ადამიანის გადარჩენის შანსებს გაცილებით ზრდის. ყველა ზემოჩამოთვლილი მონაცემი ავტომატურად ისახება სამონიტორინგო სისტემაზე. უნიფორმის ერთერთი უნიკალური ფუნქცია არის სიარულისას ელექტროენერგიის გამომუშვება რაც  ზოგავს მაღაროს ელექტროენერგიის მოხმარებას. აქედან გამომდიანარე უნიფორმას შეუძლია თავისი თავი ამარაგოს უწყვეტი ელექტროენერგიით რაც მაღაროელებს შეუმსუბექბს თავიანთ სამუშაოს.
            </p>
          </div>
          <iframe width="95%" height="280" src="https://www.youtube.com/embed/uTkR5ew8-ZE?si=-_mohGnqP0g-VdC2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <hr />
        <div className="block">
          <h4>ჭკვიანი სავენტილაცო სისტემა</h4>
          <div className="text_wrap">
            <p>
              წარმოგიდგენთ ჭკვიან სავენტილაციო სისტემას, რომელიც არის ინოვაციური გადაწყვეტა, მაღაროელების ჯანმრთელობაზე. მოწინავე სენსორებისა და რეალურ დროში ანალიტიკის გამოყენებით, ჩვენი სისტემა არეგულირებს ჰაერის ნაკადს, უზრუნველყოფს ჰაერის ოპტიმალურ ხარისხს და ამცირებს საფრთხეებს. ტრადიციული მეთოდებისგან განსხვავებით, ის ადაპტირდება მაღაროს მრავალფეროვან გარემოსთან, ამცირებს ენერგიის მოხმარებას და გარემოზე ზემოქმედებას. გარდა ამისა, ის ითვალისწინებს მაღალ ხარჯებს, რომლებიც დაკავშირებულია ჩვეულებრივი ვენტილაციის გამოყენებით. აღსანიშნავია, რომ სავენტილაციო სისტემის მართვა შესაძლეელია დისტანციურად, ადამიანის საფრთხეში ჩარევის გარეშე აძლიერებს ოპერაციულ ზედამხედველობას, სამუშაო გარემოს და ადამიანის უსაფრთხოებას.
            </p>
          </div>
          <iframe width="95%" height="280" src="https://www.youtube.com/embed/eIrF_UXHd9o?si=XWYKCZgwjsW0Slxm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <hr />
        <div className="block">
          <h4>მონიტორინგის სისტემა</h4>
          <div className="text_wrap">
            <p>
              წარმოგიდგენთ ჩვენს სამონიტორინგო სისტემას, რომლის მთავარი მიზანია მაღაროში დაამყაროს უსაფრთხოება და ეფექტურობა. ეს ინოვაციური გადაწყვეტა სცილდება ტრადიციულ მონიტორინგს და გთავაზობთ რეალურ დროში, მაღაროში ყველა მაღაროელის სიას მათი უნიფორმიდან მოწოდებული სასიცოცხლო მაჩვენებლებით, როგორიცაა პულსი, წნევა, ტემპერატურა და მათ გარშემო ჰაერის ხარისხს. სამონიტორინგო სისტემის საშუალებით შესაძლებელია მაღაროს მთლიანი სავენტილაციო სისტემის მართვა, ის ავტომატურად  უზრუნველყოფს მაღაროში ჰაერის ხარისხის მონიტორინგს, თუმცა საჭიროებიდან გამომდინარე შესაძლებელია მისი ხელით მართვა. სისტემას ასევე გააჩნია რუკა, სადაც ნაჩვენებია თითოეული მაღაროელის მდებარეობა, დავალებული სამუშაო და სავენტილაციო წერტლების ძირითადი ადგილები. კრიტიკულ სიტუაციებში, ყოველ წამს აქვს მნიშვნელობა და ეს ყოვლისმომცველი სამონიტორინგო სისტემა, ქმნის ერთგვაირ სიმბიოზს სხვა კომპონენტებთან ერთად, იგი წარმოადგენს სიცოცხლის გადარჩენის ძალას, რომელიც ხაზს უსვამს ერთიანი, მოწინავე ტექნოლოგიების განვითარებას ქართულ და უცხოურ სამთო ინდუსტრიაში.
            </p>
          </div>
          <iframe width="95%" height="280" src="https://www.youtube.com/embed/L29cO-R52pY?si=_fSVD4e50daT7P_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Scroll.Element>
      <Scroll.Element name="projectInfo" className="about" style={{ backgroundColor: 'antiquewhite' }}>
        <div className="img_wrap">
          <div className="graph">
            <div style={{ marginTop: '30%', position: 'absolute', zIndex: 101, textAlign: 'center', fontSize: 'smaller', color: '#fff' }}>
              <i class="fa-solid fa-rotate-right fa-xl"></i>
              <h5>შეეხეთ!</h5>
            </div>
            <img style={{ zIndex: 100, cursor: 'pointer' }} onClick={() => setDegrees()} className="btnImg" src={buttonImg} alt="..." />
            <img style={{ transform: `rotate(${deg}deg)`, zIndex: '2' }} className="circleImg" src={circleImg} alt="..." />
          </div>
        </div>
      </Scroll.Element>
      <Scroll.Element name="components" className="partners">
        <h1>გამოყენებული კომპონენტები</h1>
        <hr style={{ width: '100%' }} />
        {comps.map((e) => (
          <div key={e} className="partner">
            <p>{e.name}</p>
            <img style={{ borderRadius: '50%', width: 100, height: 100 }} src={e.img} alt="..." />
          </div>
        ))}
      </Scroll.Element>

      <Scroll.Element name="minerConsultation" className="about minerConsultation">
        <div className="text_wrap">
          <h2 className="about-header">კონსულტაცია</h2>
          <ul style={{ listStyle: 'none' }}>
            <li><i className="fa-solid fa-location-dot" style={{ color: "blue" }}></i> ტექნიკური უნივერსიტეტის სამთო გეოლოგიური შახტა ლაბორატორია</li>
            <li><i className="fa-solid fa-user" style={{ color: "blue" }}></i> დავით კუპატაძე</li>
            <li><i className="fa-solid fa-user" style={{ color: "blue" }}></i> ავტანდილ კუპატაძე</li>
            <li><i className="fa-solid fa-user" style={{ color: "blue" }}></i> მერაბ მეგრელიძე</li>
          </ul>
        </div>
        <div className="img_wrap">
          <Carousel interval={1000} style={{ width: '100%' }}>
            {consultion.map((member) => (
              <Carousel.Item>
                <img style={{ width: '100%', height: 300 }} src={member} alt="..." />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Scroll.Element>
      <Scroll.Element name="specialThanks" className="partners specialThanks">
        <h1 className="text-center">განსაკუთრებული მადლობა</h1>
        <hr />
        <ul id="achievements">
          <li>უტა კილასონია</li>
          <li>ალექსანდრე ჯელია</li>
          <li>გიორგი გობაძე</li>
          <li>დავით კუპატაძე</li>
          <li>ზუგდიდის და ბათუმის ტექნოპარკი</li>
          <li>გიგა ფარულავა</li>
        </ul>
      </Scroll.Element>
      <Scroll.Element name="team" className="team">
        <h2 className="mb-4 text-center">{t('team')}</h2>
        <Carousel style={{ width: '100%' }}>
          {teamMembers.map((member) => (
            <Carousel.Item>
              <div style={{ width: '100%', height: 400 }}></div>
              <Carousel.Caption>
                <img alt="..." src={member.img} style={{ borderRadius: '50%' }} />
                <h3>{member.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Scroll.Element>
      <footer>
        <div>
          <a href="https://www.instagram.com/terra_tech2023?igsh=ODA1NTc5OTg5Nw==" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UCkuOnabYNc5SYthvKRmewNA" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
        <div>
          <a href="mailto:terratech2024@gmail.com">terratech2024@gmail.com</a>
        </div>
        <div>
          <span>მობილური: 595 90 00 56</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
