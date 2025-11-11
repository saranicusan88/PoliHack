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
  var countDownDate = new Date("Nov 20, 2025 23:59:59").getTime();

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
          timerElement.innerHTML = "Hackaton Has" + "\n" + "Ended!";
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
            <h1 className={styles.heading}>#Engineering the future!</h1>
            <img className={styles.logo} src={Logo} alt="Logo PoliHack" />
            <h1 className={styles.heading}>Registration ends in:</h1>
            <p
              className={styles.timer}
              id="timer"
              role="timer"
              aria-live="polite"
            ></p>
          </div>
        </section>
        <div className={styles.descriptionSection}>
          <h1 className={styles.headingHover}>What Is PoliHack?</h1>
          <p className={styles.description}>
            PoliHack is a 48-hour hackathon that brings together high school and
            university students for an unforgettable experience of innovation,
            teamwork, and creativity.
            <br />
            Now reaching its 18th edition, the event unfolds over three intense
            days filled with learning, collaboration, and opportunities to turn
            ideas into reality.
            <br />
            Organized by the Student Organization of the Technical University of
            Cluj-Napoca (OSUT Cluj), PoliHack encourages participants to
            collaborate with esteemed mentors from both industry and academia,
            offering an authentic experience similar to what they would
            encounter in big companies.
            <br />
            Whether you’re an experienced coder or just taking your first steps
            into tech, all you need is a team of 3–5 passionate minds. Our
            mentors will be there to guide, inspire, and support you as you
            bring your ideas to life.
          </p>
        </div>

        {/* Sponsor section */}
        <Sponsors />

        <Stats />

        {/* Page integration */}
        <About />
        <CurrentEdition />
      </Content>
      <Footer />
    </>
  );
}

export default Home;
