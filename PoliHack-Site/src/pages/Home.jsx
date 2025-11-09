// Home.jsx

"use client";

import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import About from "./About";
import CurrentEdition from "./CurrentEdition";
import { Flex, Layout } from "antd";
const { Header, Sider, Content } = Layout;

import Banner from "/src/assets/MainBanner.gif";
import Logo from "/src/assets/Logos/LogoWhite.png";

function Home() {
  var countDownDate = new Date("Nov 20, 2025 17:00:00").getTime();

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

        <Stats />
        {/* Page integration */}
        <About />
        <CurrentEdition />

        {/* Sponsor section */}
        <Sponsors />
      </Content>
      <Footer />
    </>
  );
}

export default Home;
