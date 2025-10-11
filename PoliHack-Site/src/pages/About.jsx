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

import FilipCristian from "/src/assets/Team/FilipCristian.png";
import ArimiaAndreea from "/src/assets/Team/ArimiaAndreea.png";
import IonutDomniteanu from "/src/assets/Team/IonutDomniteanu.jpg";
import CordeaMaria from "/src/assets/Team/CordeaMaria.jpg";
import IarinaBasa from "/src/assets/Team/IarinaBasa.jpg";
import ZahariaAlina from "/src/assets/Team/ZahariaAlina.jpg";
import IoanaAsandei from "/src/assets/Team/IoanaAsandei.jpg";
import ClimDiana from "/src/assets/Team/ClimDiana.png";
import ChirilaIulian from "/src/assets/Team/ChirilaIulian.png";

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
      caption: "Come and meet at a talk with our mentorss and other participants!",
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
            Are you ready for 48 hours of non-stop innovation, creativity, and
            coding challenges? Grab your laptop, bring your ideas, and join us
            for an unforgettable hackathon experience! Whether you’re an
            experienced coder, a talented designer or simply looking for some
            fun, PoliHack is the perfect place for you.
          </p>
          <p className={styles.text}>
            Get involved in two intense days of hacking and networking. Form
            teams of 3 to 5 friends, make new connections on the spot and
            collaborate to build something amazing from scratch. Participate in
            workshops led by industry professionals, receive valuable advice and
            guidance from experienced mentors, but don’t forget to take a
            breather—the chill zone awaits.
          </p>
          <p className={styles.text}>
            Specifically designed for high school and university students eager
            to showcase their talents and explore the fascinating world of
            technology, PoliHack features several categories. Whether you’re
            passionate about web design, mobile app development, embedded
            systems, or just starting your tech journey, you’ll surely find a
            place in one of our five categories:
          </p>
        </div>
        <div className={styles.categoriesSection}>
          <h1 className={styles.headingHover}>Categories</h1>
          {/* Web Category */}
          <CategoryCard
            title="Web Development"
            icon="MenuUnfoldOutlined"
            description="Unleash your creativity in the digital realm by designing captivating websites or browser-friendly applications that push the boundaries of user experience. This category invites you to craft engaging interfaces and explore innovative design concepts that leave a lasting impact."
          />

          {/* App Category */}
          <CategoryCard
            title="App Development"
            icon="MobileOutlined"
            description="Dive into the mobile world and bring your ideas to life with cutting-edge applications. Whether you’re developing for iOS, Android or cross-platform environments, showcase your coding skills and redefine how users interact with technology. Transform your visions into functional and user-friendly apps!"
          />

          {/* Embedded Category */}
          <CategoryCard
            title="Embedded Systems"
            icon="AlertOutlined"
            description="Explore the intriguing world of embedded systems, where you can create smart devices and pioneer advanced hardware solutions. This category empowers you to innovate and develop projects that play a vital role in shaping the ever-evolving landscape of technology. Your creations could revolutionize everyday experiences!"
          />

          {/* Cybersecurity Category */}
          <CategoryCard
            title="Cybersecurity"
            icon="SafetyCertificateOutlined"
            description="Embrace the digital frontier and protect the digital realm from threats. This category invites you to delve into the intricate world of cybersecurity, where you can develop robust defense mechanisms and implement advanced security measures to safeguard digital assets and networks."
          />

          {/* Junior Category */}
          <CategoryCard
            title="Junior"
            icon="UserOutlined"
            description="For high school students, this category offers a unique opportunity to showcase their skills and creativity. Participants in this category can explore various domains, including web development, app development, embedded systems and cybersecurity. They can work on projects that align with their interests and passions, while also gaining valuable experience and exposure to the world of technology."
          />
        </div>
        <div className={styles.networkingSection}>
          <h1 className={styles.headingHover}>Networking</h1>
          <p className={styles.text}>
            The networking night is the perfect opportunity to meet other
            participants, mentors and volunteers in a friendly and relaxed
            atmosphere. During this special event, you'll have the chance to
            build lasting connections, expand your professional network and
            explore new collaboration opportunities. We encourage open
            discussions and the exchange of innovative ideas in an environment
            that inspires creativity and growth.
          </p>
          <Carousel images={imageObjects} interval={5000} />
          <p className={styles.text}>
            Whether you're an experienced professional or an enthusiastic
            newcomer, we invite you to join a community dedicated to technology
            and innovative solutions. Come connect with passionate people, learn
            and explore new perspectives while building impactful relationships!
            Join us in shaping a dynamic environment where ideas turn into
            reality and innovation knows no limits.
          </p>
        </div>
        <div className={styles.teamSection}>
          <h1 className={styles.headingHover}>Meet the team</h1>
          {/* First Row */}
          <Row className={styles.teamRow}>
            <Col span={7} lg={8} md={12} sm={24} xs={24}>
              <TeamCard
                name="Filip Cristian"
                role="BC Responsible"
                image={FilipCristian}
                instagram="https://www.instagram.com/filip_cristi/"
                facebook="https://www.facebook.com/filip.cristi.37"
              />
            </Col>
            <Col span={7}  lg={8} md={12} sm={24} xs={24}>
              <TeamCard
                name="Arimia Andreea"
                role="Coordinator"
                image={ArimiaAndreea}
                instagram="https://www.instagram.com/andreeaa_stefaniaa/"
                facebook="https://www.facebook.com/andreea.arimia"
              />
            </Col>
            <Col span={7}  lg={8} md={12} sm={24} xs={24}>
              <TeamCard
                name="Cordea Maria"
                role="Secretary"
                image={CordeaMaria}
                instagram="https://www.instagram.com/cordea_maria/"
                facebook="https://web.facebook.com/profile.php?id=100014599725620"
              />
            </Col>
          </Row>
          {/* Middle Row */}
          <Row className={styles.teamRow}>
            <Col span={7}  lg={8} md={12} sm={24} xs={24}>
              <TeamCard
                name="Clim Diana"
                role="Co-coordinator"
                image={ClimDiana}
                instagram="https://www.instagram.com/dianaa_clim/"
                facebook="https://www.facebook.com/diana.clim.1"
              />
            </Col>
            <Col span={7}  lg={8} md={12} sm={24} xs={24}>
              <TeamCard
                name="Asandei Ioana"
                role="Co-coordinator"
                image={IoanaAsandei}
                instagram="https://www.instagram.com/ioana._.as?igsh=MTRjdDRweTJrejdldg%3D%3D&utm_source=qr"
                facebook="https://www.facebook.com/share/18pTFEi3K7/?mibextid=wwXIfr"
              />
            </Col>
            <Col span={7}  lg={8} md={12} sm={24} xs={24}>
              <TeamCard
                name="Bașa Iarina"
                role="Co-coordinator"
                image={IarinaBasa}
                instagram="https://www.instagram.com/iarinabasa?igsh=MXF3MnBtb2VscXd2dQ%3D%3D&utm_source=qr"
                facebook="https://www.facebook.com/iarinamaria.basa?mibextid=wwXIfr"
              />
            </Col>
          </Row>
          {/* Last Row */}
          <Row className={styles.teamRow}>
            <Col span={7}  lg={8} md={12} sm={24} xs={24}>
              <TeamCard
                name="Zaharia Alina"
                role="Co-coordinator"
                image={ZahariaAlina}
                instagram="https://www.instagram.com/alinaazaharia/"
                facebook="https://www.facebook.com/zaharia.alina13"
              />
            </Col>
            <Col span={7}  lg={8} md={12} sm={24} xs={24}>
              <TeamCard
                name="Chirila Iulian"
                role="Tehnical Responsable"
                image={ChirilaIulian}
                instagram="https://www.instagram.com/c.iulian08/"
                facebook="https://www.facebook.com/profile.php?id=100084863419146"
              />
            </Col>
            <Col span={7} lg={8} md={12} sm={24} xs={24}>
              <TeamCard
                name="Domniteanu John"
                role="PR Responsable"
                image={IonutDomniteanu}
                instagram="https://www.instagram.com/ionut.dom/"
                facebook="https://www.facebook.com/ionut.domniteanu.583"
              />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default About;
