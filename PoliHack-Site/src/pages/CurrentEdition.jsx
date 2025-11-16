// CurrentEdition.jsx

"use client";

import Footer from "../components/Footer";
import styles from "./CurrentEdition.module.scss";
import { Flex, Layout, Row, Col } from "antd";
import Slider from "../components/Slider";
import Document from "../components/Document";

import DocumentBanner from "/src/assets/DocumentBanner.jpg";

// Sponnsors
import Sponsor1 from "/src/assets/Sponsors/Cloudflight.png";
import Sponsor2 from "/src/assets/Sponsors/Aqirys.png";
import Sponsor3 from "/src/assets/Sponsors/Arobs.png";
import Sponsor4 from "/src/assets/Sponsors/Bigbelly.png";
import Sponsor5 from "/src/assets/Sponsors/Csi.png";
import Sponsor6 from "/src/assets/Sponsors/Finshape.png";
import Sponsor7 from "/src/assets/Sponsors/DejInvest.png";
import Sponsor8 from "/src/assets/Sponsors/Marvo.png";
import Sponsor9 from "/src/assets/Sponsors/Upevent.jpg";
import Sponsor10 from "/src/assets/Sponsors/Qiagen.png";
import Sponsor11 from "/src/assets/Sponsors/Zerotak.jpeg";

// Judges
import DumitruDanAlexandru from "/src/assets/Judges/DumitruDanAlexandru.jpg";
import EnyediRobert from "/src/assets/Judges/EnyediRobert.jpg";
import GramaAlin from "/src/assets/Judges/GramaAlin.jpeg";
import HelmerPaul from "/src/assets/Judges/HelmerPaul.jpg";
import IliesAdelinaIoana from "/src/assets/Judges/IliesAdelinaIoana.jpeg";
import LutasLucian from "/src/assets/Judges/LuțașLucian.png";
import MocaEmanuel from "/src/assets/Judges/MocaEmanuel.png";
import MoldovanCadmiel from "/src/assets/Judges/MoldovanCadmiel.jpg";
import MuresanCezara from "/src/assets/Judges/MuresanCezara.jpg";
import NutAndrei from "/src/assets/Judges/NutAndrei.jpeg";
import PopescuDorin from "/src/assets/Judges/PopescuDorin.jpg";
import SabouAdrian from "/src/assets/Judges/SabouAdrian.png";
import SzekelyBianca from "/src/assets/Judges/SzekelyBianca.jpeg";

// Mentors
import AndreiAlexsson from "/src/assets/Mentors/Andrei Alexsson.jpeg";
import AndruhAndrei from "/src/assets/Mentors/Andruh Andrei.jpeg";
import AntonIon from "/src/assets/Mentors/Anton Ion.jpg";
import CorneaCristian from "/src/assets/Mentors/Cornea Cristian.jpeg";
import DanToderici from "/src/assets/Mentors/Dan Toderici.png";
import DanielTodasca from "/src/assets/Mentors/Daniel Todasca.jpg";
import DoncaAdrian from "/src/assets/Mentors/Donca Adrian.jpeg";
import DumitruDanAlexandruMentor from "/src/assets/Mentors/DumitruDanAlexandru.jpg";
import GramaAlinMentor from "/src/assets/Mentors/GramaAlin.jpeg";
import IliesAdelinaIoanaMentor from "/src/assets/Mentors/IliesAdelinaIoana.jpeg";
import IustinianAndrioaie from "/src/assets/Mentors/Iustinian Andrioaie.jpg";
import LutasLucianMentor from "/src/assets/Mentors/LuțașLucian.png";
import MihneaMihailescu from "/src/assets/Mentors/Mihnea Mihailescu.jpeg";
import MocaEmanuelMentor from "/src/assets/Mentors/MocaEmanuel.png";
import MoghiroiuBogdan from "/src/assets/Mentors/Moghiroiu Bogdan.jpeg";
import NutAndreiMentor from "/src/assets/Mentors/NutAndrei.jpeg";
import PopescuDorinMentor from "/src/assets/Mentors/PopescuDorin.jpg";
import SzekelyBiancaMentor from "/src/assets/Mentors/SzekelyBianca.jpeg";

// Volunteers
import MariaZamfir from "/src/assets/Volunteers/Maria Zamfir.jpg";
import MarianIauta from "/src/assets/Volunteers/Marian Iauta.jpg";
import MateiAntohi from "/src/assets/Volunteers/Matei Antohi.jpg";
import Pali from "/src/assets/Volunteers/Pali.jpg";
import PatrickSofineti from "/src/assets/Volunteers/Patrick Sofineti.jpg";
import RaisaButuza from "/src/assets/Volunteers/Raisa Butuza.jpg";
import RaresMiclea from "/src/assets/Volunteers/Rares Miclea.jpg";
import ReliDutulescu from "/src/assets/Volunteers/Reli Dutulescu.jpg";
import RobertoSpuma from "/src/assets/Volunteers/Roberto Spuma.jpg";
import SebastianRazesu from "/src/assets/Volunteers/Sebastian Razesu.jpg";
import VladCampean from "/src/assets/Volunteers/Vlad Campean.jpg";
import AlexandraHomiuc from "/src/assets/Volunteers/Alexandra Homiuc.jpg";
import AlexandroNebuneli from "/src/assets/Volunteers/Alexandro Nebuneli.jpg";
import AlexandruGhemes from "/src/assets/Volunteers/Alexandru Ghemes.jpg";
import AndreiGanea from "/src/assets/Volunteers/Andrei Ganea.jpg";
import AndreiSzakacs from "/src/assets/Volunteers/Andrei Szakacs.jpg";
import BeniBob from "/src/assets/Volunteers/Beni Bob.jpg";
import BiancaChirita from "/src/assets/Volunteers/Bianca Chirita.jpg";
import BiancaCosmuta from "/src/assets/Volunteers/Bianca Cosmuta.jpg";
import BiancaToader from "/src/assets/Volunteers/Bianca Toader.jpg";
import CalinSecara from "/src/assets/Volunteers/Calin Secara.jpg";
import CatalinHunea from "/src/assets/Volunteers/Catalin Hunea.jpg";
import CatalinOltean from "/src/assets/Volunteers/Catalin Oltean.jpg";
import CiorneiIoana from "/src/assets/Volunteers/Ciornei Ioana.jpg";
import HoratiuBulucz from "/src/assets/Volunteers/Horatiu Bulucz.jpg";
import IoanaRata from "/src/assets/Volunteers/Ioana Rata.jpg";
import IonelaConstandache from "/src/assets/Volunteers/Ionela Constandache.jpg";
import MaraTurc from "/src/assets/Volunteers/Mara Turc.jpg";

const { Header, Sider, Content } = Layout;

function CurrentEdition() {
  const judgesObjects = [
    {
      id: 1,
      image: DumitruDanAlexandru,
      text: "Dumitru Dan Alexandru",
    },
    {
      id: 2,
      image: EnyediRobert,
      text: "Enyedi Robert",
    },
    {
      id: 3,
      image: GramaAlin,
      text: "Grama Alin",
    },
    {
      id: 4,
      image: HelmerPaul,
      text: "Helmer Paul",
    },
    {
      id: 5,
      image: IliesAdelinaIoana,
      text: "Ilies Adelina Ioana",
    },
    {
      id: 6,
      image: LutasLucian,
      text: "Lutas Lucian",
    },
    {
      id: 7,
      image: MocaEmanuel,
      text: "Moca Emanuel",
    },
    {
      id: 8,
      image: MoldovanCadmiel,
      text: "Moldovan Cadmiel",
    },
    {
      id: 9,
      image: MuresanCezara,
      text: "Muresan Cezara",
    },
    {
      id: 10,
      image: NutAndrei,
      text: "Nut Andrei",
    },
    {
      id: 11,
      image: PopescuDorin,
      text: "Popescu Dorin",
    },
    {
      id: 12,
      image: SabouAdrian,
      text: "Sabou Adrian",
    },
    {
      id: 13,
      image: SzekelyBianca,
      text: "Szekely Bianca",
    },
  ];

  const mentorsObjects = [
    {
      id: 1,
      image: AndreiAlexsson,
      text: "Andrei Alexsson",
    },
    {
      id: 2,
      image: AndruhAndrei,
      text: "Andruh Andrei",
    },
    {
      id: 3,
      image: AntonIon,
      text: "Anton Ion",
    },
    {
      id: 4,
      image: CorneaCristian,
      text: "Cornea Cristian",
    },
    {
      id: 5,
      image: DanToderici,
      text: "Dan Toderici",
    },
    {
      id: 6,
      image: DanielTodasca,
      text: "Daniel Todasca",
    },
    {
      id: 7,
      image: DoncaAdrian,
      text: "Donca Adrian",
    },
    {
      id: 8,
      image: DumitruDanAlexandruMentor,
      text: "Dumitru Dan Alexandru",
    },
    {
      id: 9,
      image: GramaAlinMentor,
      text: "Grama Alin",
    },
    {
      id: 10,
      image: IliesAdelinaIoanaMentor,
      text: "Ilies Adelina Ioana",
    },
    {
      id: 11,
      image: IustinianAndrioaie,
      text: "Iustinian Andrioaie",
    },
    {
      id: 12,
      image: LutasLucianMentor,
      text: "Lutas Lucian",
    },
    {
      id: 13,
      image: MihneaMihailescu,
      text: "Mihnea Mihailescu",
    },
    {
      id: 14,
      image: MocaEmanuelMentor,
      text: "Moca Emanuel",
    },
    {
      id: 15,
      image: MoghiroiuBogdan,
      text: "Moghiroiu Bogdan",
    },
    {
      id: 16,
      image: NutAndreiMentor,
      text: "Nut Andrei",
    },
    {
      id: 17,
      image: PopescuDorinMentor,
      text: "Popescu Dorin",
    },
    {
      id: 18,
      image: SzekelyBiancaMentor,
      text: "Szekely Bianca",
    },
  ];

  const volunteersObjects = [
    { id: 1, image: MariaZamfir, text: "Maria Zamfir" },
    { id: 2, image: MarianIauta, text: "Marian Iauta" },
    { id: 3, image: MateiAntohi, text: "Matei Antohi" },
    { id: 4, image: Pali, text: "Pali" },
    { id: 5, image: PatrickSofineti, text: "Patrick Sofineti" },
    { id: 6, image: RaisaButuza, text: "Raisa Butuza" },
    { id: 7, image: RaresMiclea, text: "Rares Miclea" },
    { id: 8, image: ReliDutulescu, text: "Reli Dutulescu" },
    { id: 9, image: RobertoSpuma, text: "Roberto Spuma" },
    { id: 10, image: SebastianRazesu, text: "Sebastian Razesu" },
    { id: 11, image: VladCampean, text: "Vlad Campean" },
    { id: 12, image: AlexandraHomiuc, text: "Alexandra Homiuc" },
    { id: 13, image: AlexandroNebuneli, text: "Alexandro Nebuneli" },
    { id: 14, image: AlexandruGhemes, text: "Alexandru Ghemes" },
    { id: 15, image: AndreiGanea, text: "Andrei Ganea" },
    { id: 16, image: AndreiSzakacs, text: "Andrei Szakacs" },
    { id: 17, image: BeniBob, text: "Beni Bob" },
    { id: 18, image: BiancaChirita, text: "Bianca Chirita" },
    { id: 19, image: BiancaCosmuta, text: "Bianca Cosmuta" },
    { id: 20, image: BiancaToader, text: "Bianca Toader" },
    { id: 21, image: CalinSecara, text: "Calin Secara" },
    { id: 22, image: CatalinHunea, text: "Catalin Hunea" },
    { id: 23, image: CatalinOltean, text: "Catalin Oltean" },
    { id: 24, image: CiorneiIoana, text: "Ciornei Ioana" },
    { id: 25, image: HoratiuBulucz, text: "Horatiu Bulucz" },
    { id: 26, image: IoanaRata, text: "Ioana Rata" },
    { id: 27, image: IonelaConstandache, text: "Ionela Constandache" },
    { id: 28, image: MaraTurc, text: "Mara Turc" },
  ];

  const programImage = DocumentBanner;
  const regulationsLink = "https://drive.google.com/file/d/1wqj7VHUeTztDJjUdvJdGxabbkIwPVLq6/view?usp=sharing";
  const regulations_singleLink = "https://drive.google.com/file/d/1IAN5pqH9IF4U9JD9cqrdvB5L_4lHXWN7/view?usp=sharing";
  const acordLink = "https://drive.google.com/file/d/1P9vFJ2lGB1nn8PFTF4MSTn7IbJfchNmm/view?usp=sharing";
  const programLink = "https://drive.google.com/file/d/1wqj7VHUeTztDJjUdvJdGxabbkIwPVLq6/view?usp=sharing";

  const themeImage = DocumentBanner;

  const regulationsImage = DocumentBanner;

  const termsImage = DocumentBanner;

  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
        {/* Judges Section */}
        
        {/* <div className={styles.judgesSection}>
          <h1 className={styles.headingHover}>Judges</h1>
          <Slider
            slides={judgesObjects}
            displayCount={3}
            autoplay={true}
            displayTime={4000}
          />
        </div> */}

        {/* Mentors Section */}

        {/* <div className={styles.mentorsSection}>
          <h1 className={styles.headingHover}>Mentors</h1>
          <Slider
            slides={mentorsObjects}
            displayCount={3}
            autoplay={true}
            displayTime={4500}
            div
          />
        </div> */}

        {/* Volunteers Section */}

        {/* <div className={styles.volunteersSection}>
          <h1 className={styles.headingHover}>Volunteers</h1>
          <Slider
            slides={volunteersObjects}
            displayCount={3}
            autoplay={true}
            displayTime={5000}
            div
          />
        </div> */}

        {/* Documents Section */}
        <div className={styles.documentsSection}>
          <h1 className={styles.headingHover}>You should read</h1>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Document
                title="REGULATIONS"
                source={regulationsLink}
                image={programImage}
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Document
                title="REGULATIONS (INDIVIDUAL PARTICIPANT)"
                source={regulations_singleLink}
                image={themeImage}
              />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Document
                title="PARENTAL CONSENT"
                source={acordLink}
                image={regulationsImage}
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Document 
                title="PROGRAM (COMING SOON)" 
                /*source={programLink}*/ 
                image={termsImage} 
              />
            </Col>
          </Row>
        </div>
      </Content>
      {/* <Footer /> */}
    </>
  );
}

export default CurrentEdition;

