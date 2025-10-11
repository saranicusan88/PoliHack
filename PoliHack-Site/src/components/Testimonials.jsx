import React, { useState } from "react";
import { Carousel, Modal, Avatar } from "antd";
import "./Testimonials.scss";

// Testimonials pictures
import OanaDurcau from "/src/assets/Testimonials/OanaDurcau.jpg";
import LeonardMihalcea from "/src/assets/Testimonials/LeonardMihalcea.jpg";
import TitusMaghiar from "/src/assets/Testimonials/TitusMaghiar.jpg";
import TeodoraNemes from "/src/assets/Testimonials/TeodoraNemes.jpg";
import MateiMihut from "/src/assets/Testimonials/MateiMihut.jpg";
import RhythmTouch from "/src/assets/Testimonials/RhythmTouch.jpg";

function Testimonials() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Oana Durcău",
      image: OanaDurcau,
      testimonial:
        "PoliHack is an excellent opportunity to turn the knowledge gained in university into a practical experience of learning, discovery, and perhaps even self-discovery. My recommendation is for participants to stay open-minded, seek help from mentors and peers, and think outside the box. They should explore ideas with real-world applications that solve concrete problems. PoliHack isn’t just about writing code; it’s about experiencing an intense journey that pushes them out of their comfort zones and provides valuable lessons for both their careers and personal growth. PoliHack is not only a competition but also a place where participants can learn from one another.",
      status: "JURAT V.14",
      company: "Linnify",
    },
    {
      id: 2,
      name: "Leonard Mihalcea",
      image: LeonardMihalcea,
      testimonial:
        "Being a mentor at the PoliHack V.14 was a lot of fun. I met many curious and motivated hackers with great ideas. The atmosphere was full of energy and keyboard sounds. It was a great chance to share knowledge and see some cool projects come to life. I even got the chance to showcase my FIFA skills with some of the hackers! If future participants are reading this, I recommend choosing a fun idea that you believe in, and remember that you're here for a great experience, enjoy it!",
      status: "MENTOR V.14",
      company: "CloudFlight",
    },
    {
      id: 3,
      name: "Titus Maghiar",
      image: TitusMaghiar,
      testimonial:
        "For me, PoliHack is one of those rare opportunities to contribute to the community, share your knowledge, and leave a meaningful mark on the development of a new generation of programmers, innovators, and entrepreneurs. Being a mentor at this hackathon is one of the most valuable and unique experiences you can have as a software developer and OSUT Cluj alumnus. It’s a unique feeling to help passionate young people bring their best ideas to life, provide them with guidance, and witness their tremendous growth in just 48 hours. This experience reminds you why you chose this career and why you continue to love what you do.",
      status: "MENTOR V.14",
      company: "P3",
    },
    {
      id: 4,
      name: "Teodora Nemeș",
      image: TeodoraNemes,
      testimonial:
        "The PoliHack experience showed me how powerful an idea can become when you have the right people by your side. In just 48 hours, we turned a simple concept into a real product, enhancing not only our technical skills but also essential communication, collaboration, and adaptability skills. The hackathon helps you discover the career path that suits you, giving you a clear perspective on what you want to build in the future. PoliHack is not just about technology and pitches; it’s about people who put passion into what they do and about experiences that contribute to both your personal and professional growth.",
      status: "PARTICIPANT V.14",
      company: "Fly Projecta",
    },
    {
        id: 5,
        name: "Matei Mihuț",
        image: MateiMihut,
        testimonial:
          "The excellent communication with the organizing team, the enjoyable and informative workshops, mentors ready to help anytime with any technical or non-technical issue, and the friendly participants all contributed to an amazing experience. I highly recommend participating, even if you don’t have extraordinary technical knowledge. I feel like I learned a lot from PoliHack!",
        status: "PARTICIPANT V.14",
        company: "CNDRobotics",
      },
      {
        id: 6,
        name: "Rhythm Touch",
        image: RhythmTouch,
        testimonial:
          "It was our first experience at a hackathon as a team, and it made us wonder why we hadn’t taken part in more of these competitions. Stress, lots of emotions, little sleep - but still, some of the most successful and special days we’ve experienced during university. You shouldn’t let the fear of stepping out of your comfort zone stand between you and your achievements. It’s an experience where you have only things to gain; it might be the one that opens up new perspectives, motivating you to be the best version of yourself. We know it’s only 48 hours and time flies, but it’s more important that the idea reflects who you are and that you’re passionate about it - everything will flow smoothly from there.",
        status: "PARTICIPANT V.14",
        company: "SpiC",
      }
  ];

  const showModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <Carousel autoplay className="testimonials-carousel">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                <div
                  className="testimonial-image-container"
                  onClick={() => showModal(testimonial)}
                >
                  <Avatar
                    src={testimonial.image}
                    size={150}
                    className="testimonial-image"
                  />
                  <div className="image-overlay">
                    <span>Click to view</span>
                  </div>
                </div>
                <div className="testimonial-content">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-text">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="testimonial-info">
                    <p className="testimonial-status">{testimonial.status}</p>
                    <p className="testimonial-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <Modal
        title={selectedTestimonial?.name}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="testimonial-modal"
      >
        {selectedTestimonial && (
          <div className="modal-content">
            <div className="modal-image-container">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="modal-image"
              />
            </div>
            <div className="modal-testimonial-content">
              <h2>{selectedTestimonial.name}</h2>
              <p className="modal-testimonial">
                "{selectedTestimonial.testimonial}"
              </p>
              <div className="modal-info">
                <p className="modal-status">
                  <strong>Role </strong> {selectedTestimonial.status}
                </p>
                <p className="modal-company">
                  <strong>Company or team </strong> {selectedTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Testimonials;
