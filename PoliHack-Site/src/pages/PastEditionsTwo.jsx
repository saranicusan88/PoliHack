// PastEdition.jsx

"use client";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Layout } from "antd";
import styles from "./PastEditionsTwo.module.scss";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";

const { Header, Content } = Layout;

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
import v15App from "/src/assets/Images/v15App.jpg";
import v15Embedded from "/src/assets/Images/v15Embedded.jpg";
import v15Junior from "/src/assets/Images/v15Junior.jpg";
import v15Web from "/src/assets/Images/v15Web.jpg";
import v16App from "/src/assets/Images/v16App.jpg";
import v16Embedded from "/src/assets/Images/v16Embedded.jpg";
import v16Junior from "/src/assets/Images/v16Junior.jpg";
import v16Web from "/src/assets/Images/v16Web.jpg";
import v16Originalitate from "/src/assets/Images/v16Originalitate.jpg";
import v17App from "/src/assets/Images/v17App.jpg";
import v17Embedded from "/src/assets/Images/v17Embedded.jpg";
import v17Junior from "/src/assets/Images/v17Junior.jpg";
import v17Web from "/src/assets/Images/v17Web.jpg";
import v17Cyber from "/src/assets/Images/v17Cyber.jpg";

function AnimatedStat({ label, value, triggerKey }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const target = Number(value);
    if (Number.isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const duration = 900;
    const frameRate = 1000 / 60;
    const increment = Math.max(1, Math.ceil((target * frameRate) / duration));
    let current = 0;

    setDisplayValue(0);
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setDisplayValue(current);
    }, frameRate);

    return () => clearInterval(interval);
  }, [value, triggerKey]);

  return (
    <div className={styles.stat}>
      <span>{label}</span>
      <strong>{displayValue}</strong>
    </div>
  );
}

function PastEditionsTwo() {
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

  const editionDetails = {
    v15: {
      label: "V.15",
      year: "2023",
      title: "PoliHack V.15",
      heroText: "Va pupa Josan nu stiu ce sa scriu aici va pwp <3",
      dates: "12-14 April, 2023",
      location: "Cluj Bussiness Campus, Cloudflight Office",
      stats: [
        { label: "Participants", value: 420 },
        { label: "Teams", value: 420 },
        { label: "Mentors", value: 420 },
      ],
      winnerCategories: [
        { category: "App", team: "Arsenal", image: v15App },
        { category: "Embedded", team: "PussInBoots", image: v15Embedded },
        { category: "Junior", team: "Pulsar", image: v15Junior },
        { category: "Web", team: "Fly Projecta", image: v15Web },
      ],
    },
    v16: {
      label: "V.16",
      year: "2024",
      title: "PoliHack V.16",
      heroText: "Va pupa Josan nu stiu ce sa scriu aici va pwp <3",
      dates: "5-8 December, 2024",
      location: "Cluj Bussiness Campus, Cloudflight Office",
      stats: [
        { label: "Participants", value: 420 },
        { label: "Teams", value: 420 },
        { label: "Mentors", value: 420 },
      ],
      winnerCategories: [
        { category: "AppDev", team: "StackBytes", image: v16App },
        { category: "Web", team: "${team}", image: v16Web },
        { category: "Embedded", team: "Arrow", image: v16Embedded },
        { category: "Junior", team: "CaffeineOverflow", image: v16Junior },
        { category: "Originalitate", team: "main.c", image: v16Originalitate },
      ],
    },
    v17: {
      label: "V.17",
      year: "2025",
      title: "PoliHack V.17",
      heroText: "Va pupa Josan nu stiu ce sa scriu aici va pwp <3",
      dates: "12-14 April, 2025",
      location: "Cluj Bussiness Campus, Cloudflight Office",
      stats: [
        { label: "Participants", value: 420 },
        { label: "Teams", value: 420 },
        { label: "Mentors", value: 420 },
      ],
      winnerCategories: [
        { category: "AppDev", team: "Shift_Happens", image: v17App },
        { category: "Embedded", team: "HalfAByteParty", image: v17Embedded },
        { category: "Junior", team: "TechTornado", image: v17Junior },
        { category: "Web", team: "LTCode", image: v17Web },
        { category: "Cybersecurity", team: "Cyberbyte", image: v17Cyber },
      ],
    },
  };

  const [activeEdition, setActiveEdition] = useState("v17");
  const activeEditionDetails = editionDetails[activeEdition];
  const editionOrder = ["v15", "v16", "v17"];

  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content}>
        {/* Top Banner */}
        <div className={styles.bannerContainer}>
          <img className={styles.bannerImage} src={Banner} alt="Past Editions 2" />
          <div className={styles.typewriter}>
            <h1>POLIHACK PAST EDITIONS 2</h1>
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
            Following this, PoliHack v.16 was held from December 5–8, 2024,
            welcoming creative teams who brought their ideas to life as real
            prototypes. Participants again worked on their own projects,
            benefited from mentor support, and presented their work to an
            experienced jury. This edition also included a Networking Night,
            offering valuable opportunities to meet fellow innovators, sponsors,
            and tech professionals.
          </p>
          <Carousel images={carouselImages} />
        </div>

        {/* Past Editions 2 */}
        <section className={styles.pastEditionTwoSection}>
          <div className={styles.pastEditionTwoHeader}>
            <h1 className={styles.headingHover}>Relive the last editions</h1>
            <p className={styles.sectionIntro}>
              Toggle between V.15 - V.17 to see the winning teams, core metrics,
              and standout learnings. Update the copy anytime straight from this
              data block.
            </p>
          </div>
          <nav
            className={styles.editionTabs}
            aria-label="Past edition selector"
          >
            {editionOrder.map((editionKey) => {
              const edition = editionDetails[editionKey];
              const isActive = activeEdition === editionKey;
              return (
                <button
                  type="button"
                  key={editionKey}
                  className={`${styles.editionTab} ${
                    isActive ? styles.editionTabActive : ""
                  }`}
                  onClick={() => setActiveEdition(editionKey)}
                >
                  {edition.label}
                </button>
              );
            })}
          </nav>
          <div className={styles.editionPanel}>
            <div className={styles.editionSummaryCard}>
              <span className={styles.editionBadge}>
                {activeEditionDetails.year}
              </span>
              <h2>{activeEditionDetails.title}</h2>
              <p className={styles.editionHeroText}>
                {activeEditionDetails.heroText}
              </p>
              <div className={styles.editionMeta}>
                <div>
                  <span>Dates</span>
                  <strong>{activeEditionDetails.dates}</strong>
                </div>
                <div>
                  <span>Location</span>
                  <strong>{activeEditionDetails.location}</strong>
                </div>
              </div>
            </div>
            <div className={styles.quickStatsCard}>
              <h3>Quick Stats</h3>
              <div className={styles.statsRow}>
                {activeEditionDetails.stats.map((stat) => (
                  <AnimatedStat
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    triggerKey={activeEdition}
                  />
                ))}
              </div>
            </div>
            <div className={styles.winnersSection}>
              <h2>Winners</h2>
              <div className={styles.winnerCategories}>
                {activeEditionDetails.winnerCategories.map((winner) => (
                  <article
                    key={winner.category}
                    className={styles.winnerCategory}
                  >
                    {winner.image && (
                      <div className={styles.winnerImageWrapper}>
                        <img src={winner.image} alt={`${winner.team} team`} />
                      </div>
                    )}
                    <span>{winner.category}</span>
                    <strong>{winner.team}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Web Winners Section */}
        <div className={styles.webWinnersSection}>
          <h1 className={styles.headingHover}>Web Winners</h1>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default PastEditionsTwo;
