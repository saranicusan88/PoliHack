// Home.jsx

"use client";

import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Flex, Layout } from "antd";
const { Header, Sider, Content } = Layout;

import Banner from "/src/assets/MainBanner.gif";
import Logo from "/src/assets/Logos/LogoRed.png";

// Sponnsors
import Sponsor1 from "/src/assets/Sponsors/Cloudflight.png";
import Sponsor2 from "/src/assets/Sponsors/Aqirys.png";
import Sponsor3 from "/src/assets/Sponsors/Arobs.png";
import Sponsor4 from "/src/assets/Sponsors/Bigbelly.png";
import Sponsor5 from "/src/assets/Sponsors/Csi.png";
import Sponsor6 from "/src/assets/Sponsors/Finshape.png";
import Sponsor7 from "/src/assets/Sponsors/Linnify.svg";
import Sponsor8 from "/src/assets/Sponsors/Transilvanianuts.png";
import Sponsor9 from "/src/assets/Sponsors/Upevent.jpg";
import Sponsor10 from "/src/assets/Sponsors/Netmatch.png";
import Sponsor11 from "/src/assets/Sponsors/Zerotak.jpeg";

function Home() {
  var countDownDate = new Date("Apr 4, 2025 17:00:00").getTime();

  useEffect(() => {
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const timerElement = document.getElementById("timer");
      if (timerElement) {
        timerElement.innerHTML =
          days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
          clearInterval(x);
          timerElement.innerHTML = "Hackaton Has" + '\n' + "Ended!";
        }
      }
    }, 1000);

    return () => clearInterval(x);
  }, []);

  const sponsors = [
    { id: 1,   name: "Sponsor 1",   logo: Sponsor1, url: "https://www.cloudflight.io/en/" },
    { id: 2,   name: "Sponsor 2",   logo: Sponsor2, url: "https://www.aqirys.com/"  },
    { id: 3,   name: "Sponsor 3",   logo: Sponsor3, url: "https://arobs.com/"  },
    { id: 4,   name: "Sponsor 4",   logo: Sponsor4, url: "https://www.bigbelly-cluj.ro/"  },
    { id: 5,   name: "Sponsor 5",   logo: Sponsor5, url: "https://csiromania.ro/"  },
    { id: 6,   name: "Sponsor 6",   logo: Sponsor6, url: "https://finshape.com/"  },
    { id: 7,   name: "Sponsor 7",   logo: Sponsor7, url: "https://www.linnify.com/"  },
    { id: 8,   name: "Sponsor 8",   logo: Sponsor8, url: "https://www.transilvanianuts.ro/"  },
    { id: 9,   name: "Sponsor 9",   logo: Sponsor9, url: "https://upevent.ro/"  },
    { id: 10,  name: "Sponsor 10",  logo: Sponsor10, url: "https://www.netmatch.nl/"  },
    { id: 11,  name: "Sponsor 11",  logo: Sponsor11, url: "https://zerotak.com/"  },
  ];

  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
        <section className={styles.hero}>
          <img className={styles.imageFluid} src={Banner} alt="Main Banner" />
          <div className={styles.heroContent}>
            <h1 className={styles.heading}>#The Future Is Now!</h1>
            <img className={styles.logo} src={Logo} alt="Logo PoliHack" />
            <p
              className={styles.subHeading}
              id="timer"
              role="timer"
              aria-live="polite"
            ></p>
          </div>
        </section>
        <div className={styles.descriptionSection}>
          <h1 className={styles.headingHover}>What Is PoliHack?</h1>
          <p className={styles.description}>
            Now at its 17th edition, PoliHack is a bi-annual hackathon that
            challenges university and high school students to push the limits of
            their creativity and technical skills by developing innovative
            solutions in one of four categories: Embedded, Cybersecurity, AppDev, Web, and
            Junior.
          </p>
          <p className={styles.description}>
            Organized by the Student Organization of the Technical University of
            Cluj-Napoca, PoliHack aims to encourage participants to collaborate
            with esteemed mentors from both industry and academia, offering them
            an authentic experience similar to what they would encounter in big
            companies.
          </p>
        </div>
        <div className={styles.sponsorsSection}>
          <h1 className={styles.headingHover}>Our Sponsors</h1>
          <p className={styles.sponsorIntro}>
            Powered by partners that keep the hackathon moving forward.
          </p>
          <div className={styles.sponsorGrid} role="table" aria-label="Sponsors">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                className={styles.sponsorCard}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                role="row"
              >
                <div role="cell">
                  <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default Home;
