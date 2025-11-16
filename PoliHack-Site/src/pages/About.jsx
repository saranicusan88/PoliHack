// About.jsx

"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./About.module.scss";
import { Flex, Layout, Row, Col } from "antd";
import CategoryCard from "../components/CategoryCard";
import Carousel from "../components/Carousel";
import TeamCard from "../components/TeamCard";

// Team data

import OrmindeanVlad from "/src/assets/Team/OrmindeanVlad.jpeg";
import ClimDiana from "/src/assets/Team/ClimDiana.jpg";
import CordeaMaria from "/src/assets/Team/CordeaMaria.jpg";
import DolcaDiana from "/src/assets/Team/DolcaDianaAlina.jpg";
import ConstandacheIonela from "/src/assets/Team/ConstandacheIonela.jpg";
import ChirilaIulian from "/src/assets/Team/ChirilaIulian.jpg";
import NebuneliAlessandro from "/src/assets/Team/NebuneliAlessandro.jpg";

// Networking data

import Networking1 from "/src/assets/Images/Networking1.jpg";
import Networking2 from "/src/assets/Images/Networking2.jpg";
import Networking3 from "/src/assets/Images/Networking3.jpg";
import Networking4 from "/src/assets/Images/Networking4.jpg";

const { Header, Sider, Content } = Layout;

function About() {
  const imageObjects = [
    {
      src: Networking3,
      alt: "Networking",
      title: "PoliHack V.16 Networking",
      caption:
        "Come and meet at a talk with our mentorss and other participants!",
    },
    {
      src: Networking4,
      alt: "Second slide",
      title: "PoliHack V.16 Networking",
      caption: "Get to know the other participants and make new friends!",
    },
  ];

  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
        <div className={styles.textSection}>
          {/* Text Section */}
          <h1 className={styles.headingHover}>Here is what we do</h1>
          <p className={styles.text}>
            Are you a high school or university student passionate about coding
            or innovation? Get ready to turn your ideas into reality at
            PoliHack!
          </p>
          <p className={styles.text}>
            This hackathon is an unforgettable experience full of coding
            challenges, trainings, and teamwork. Build your project from scratch
            with your team, and make the most of the guidance provided by expert
            mentors whenever you need it. When it’s time to take a break, our
            chill zones give you the perfect space to recharge.
          </p>
          <p className={styles.text}>
            With five exciting categories, there’s a challenge for everyone:
            whether you’re into web design, app development, embedded systems,
            cybersecurity, or just starting your tech journey, you’ll find your
            place at PoliHack!
          </p>
        </div>
        <div className={styles.categoriesSection}>
          <h1 className={styles.headingHover}>Categories</h1>

          {/* App Category */}
          <CategoryCard
            title="App Development"
            icon="MobileOutlined"
            description="Redefine mobile interaction by transforming your ideas into functional, cutting-edge applications. Whether targeting iOS, Android, or cross-platform environments, this category lets you showcase coding skills while thinking about real-world user needs."
          />

          {/* Cybersecurity Category */}
          <CategoryCard
            title="Cybersecurity"
            icon="SafetyCertificateOutlined"
            description="Embrace the digital frontier by protecting digital assets and networks from threats. Explore the world of cybersecurity, develop robust defense mechanisms, and implement smart security solutions to safeguard the digital realm. You’ll learn to think like both a defender and a problem-solver, understanding real-world challenges in digital security."
          />

          {/* Embedded Category */}
          <CategoryCard
            title="Embedded Systems"
            icon="AlertOutlined"
            description="Dive into the world of smart devices and advanced hardware solutions. Create projects that demonstrate creativity, technical skill, and innovation in shaping technology for everyday life. This category is perfect for exploring sensors, microcontrollers, and IoT concepts, turning ambitious ideas into tangible devices."
          />

          {/* Web Category */}
          <CategoryCard
            title="Web Development"
            icon="MenuUnfoldOutlined"
            description="Build captivating digital experiences by designing and developing innovative, browser-friendly websites.This category encourages creativity, problem-solving, and exploring the latest web technologies to craft something truly memorable."
          />

          {/* Junior Category */}
          <CategoryCard
            title="Junior"
            icon="UserOutlined"
            description="Designed for high school students, this category is a launchpad to explore web development, app development, embedded systems, and cybersecurity. Gain real-world experience, showcase creativity, and discover your passion for technology. Junior participants will get guidance tailored to their level, making it a perfect start for their journey into tech."
          />
          
        </div>
        <div className={styles.networkingSection}>
          <h1 className={styles.headingHover}>Networking</h1>
          <p className={styles.text}>
            Meet mentors, participants, and tech professionals, share
            experiences, and build connections that last long after the event.
            Whether you arrive with a concrete idea or just the desire to learn,
            networking expands your horizons and makes you part of a passionate
            innovation community.
          </p>
          <Carousel images={imageObjects} autoplay={false} />
          <p className={styles.text}>
            At PoliHack, every conversation could be the start of a new
            adventure. Connect, collaborate, and leave your mark.
          </p>
        </div>
        <div className={styles.teamSection}>
  <h1 className={styles.headingHover}>Meet the team</h1>

  {/* FIRST ROW — 3 people */}
  <Row className={styles.teamRow} justify="center" gutter={[32, 32]}>
    <Col span={8} md={8} sm={24} xs={24}>
      <TeamCard name="Vlad Ormindean" role="BC Responsible" image={OrmindeanVlad}
        instagram="https://www.instagram.com/__vld._/" facebook="https://www.facebook.com/vlad.ormindean.1" />
    </Col>

    <Col span={8} md={8} sm={24} xs={24}>
      <TeamCard name="Diana Clim" role="Coordinator" image={ClimDiana}
        instagram="https://www.instagram.com/dianaa_clim/" facebook="https://www.facebook.com/diana.clim.1/" />
    </Col>

    <Col span={8} md={8} sm={24} xs={24}>
      <TeamCard name="Cordea Maria" role="Secretary" image={CordeaMaria}
        instagram="https://www.instagram.com/cordea_maria/" facebook="https://web.facebook.com/profile.php?id=100014599725620" />
    </Col>
  </Row>

  {/* SECOND ROW — 4 people */}
  <Row className={styles.teamRow} justify="center" gutter={[32, 32]}>
    <Col span={6} md={6} sm={12} xs={24}>
      <TeamCard name="Constandache Ionela" role="Co-coordinator" image={ConstandacheIonela}
        instagram="https://www.instagram.com/ionellaa__/" facebook="https://www.facebook.com/profile.php?id=100005939417604" />
    </Col>

    <Col span={6} md={6} sm={12} xs={24}>
      <TeamCard name="Dolca Diana Alina" role="Co-coordinator" image={DolcaDiana}
        instagram="https://www.instagram.com/ddiana.alina/" facebook="https://www.facebook.com/dianaalina.dolca" />
    </Col>

    <Col span={6} md={6} sm={12} xs={24}>
      <TeamCard name="Nebuneli Alessandro" role="Co-coordinator" image={NebuneliAlessandro}
        instagram="https://www.instagram.com/__alejrn3bu__/" facebook="https://www.facebook.com/alessandro.junior2005" />
    </Col>

    <Col span={6} md={6} sm={12} xs={24}>
      <TeamCard name="Chirila Iulian" role="Co-coordinator" image={ChirilaIulian}
        instagram="https://www.instagram.com/c.iulian08/" facebook="https://www.facebook.com/profile.php?id=100084863419146" />
    </Col>
  </Row>
</div>

      </Content>
    </>
  );
}

export default About;
