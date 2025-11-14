// PastEdition.jsx

"use client";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Flex, Layout, Row, Col } from "antd";
import styles from "./PastEdition.module.scss";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";

const { Header, Sider, Content } = Layout;

import Banner from "/src/assets/Images/PastEditionBanner.png";

// Carousel images
import carousel1 from "/src/assets/Images/PoliHackV14_1.jpg";
import carousel2 from "/src/assets/Images/PoliHackV14_2.jpg";
import carousel3 from "/src/assets/Images/PoliHackV14_3.jpg";
import carousel4 from "/src/assets/Images/PoliHackV14_4.jpg";
import carousel5 from "/src/assets/Images/PoliHackV14_5.jpg";
import carousel6 from "/src/assets/Images/PoliHackV14_6.jpg";

import carousel7 from "/src/assets/Images/PoliHackV15_1.jpg";
import carousel8 from "/src/assets/Images/PoliHackV15_2.jpg";
import carousel9 from "/src/assets/Images/PoliHackV15_3.jpg";
import carousel10 from "/src/assets/Images/PoliHackV15_4.jpg";
import carousel11 from "/src/assets/Images/PoliHackV15_5.jpg";
import carousel12 from "/src/assets/Images/PoliHackV15_6.jpg";
import carousel13 from "/src/assets/Images/PoliHackV15_7.png";

function PastEdition() {
  const carouselImages = [
    {
      src: carousel1,
    },
    {
      src: carousel2,
    },
    {
      src: carousel3,
    },
    {
      src: carousel4,
    },
    {
      src: carousel5,
    },
    {
      src: carousel6,
    },
    {
      src: carousel7,
    },
    {
      src: carousel8,
    },
    {
      src: carousel9,
    },
    {
      src: carousel10,
    },
    {
      src: carousel11,
    },
    {
      src: carousel12,
    },
    {
      src: carousel13,
    },
  ];

  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
        {/* Top Banner */}
        <div className={styles.bannerContainer}>
          <img className={styles.bannerImage} src={Banner} alt="V17 EDITION" />
          <div className={styles.typewriter}>
            <h1>POLHACK V.17 EDITION!</h1>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className={styles.testimonialsSection}>
          <h1 className={styles.headingHover}>Testimonials</h1>
          <p className={styles.testimonialsText}>
            Join the excitement of our hackathon! A dynamic event where
            innovators, developers, and creatives collaborate to build
            groundbreaking solutions. See what past participants, mentors and
            judges have to say about their experience!
          </p>
          <Testimonials />
        </div>
        {/* Carousel Pictures */}
        <div className={styles.carouselContainer}>
          <h1 className={styles.headingHover}>See how is like</h1>
          <p className={styles.carouselText}>
            Every edition of PoliHack brings something new! Our goal is to
            innovate, create and redefine the future, all while having fun in
            the process. Join us for this exciting new edition and be part of
            the next big breakthrough!
            <br />
            Following this, PoliHack v.16 was held from December 5-8, 2024,
            welcoming creative teams who brought their ideas to life as real
            prototypes. Participants again worked on their own projects,
            benefited from mentor support, and presented their work to an
            experienced jury. This edition also included a Networking Night,
            offering valuable opportunities to meet fellow innovators, sponsors,
            and tech professionals.
          </p>
          <Carousel images={carouselImages} />
        </div>

        {/* Web Winners Section */}
        <div className={styles.webWinnersSection}>
          <h1 className={styles.headingHover}>Web Winners</h1>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default PastEdition;
