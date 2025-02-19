import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Experience.css";

import WorkImg1 from "../assets/images//bqt.jpeg";
import OrgHim1 from "../assets/images/OrgHim.jpg";
import OrgHim2 from "../assets/images/OrgHim2.jpg";
import kkn1 from "../assets/images/kkn/kkn1.jpg"
import kkn2 from "../assets/images/kkn/kkn2.jpg"
import kkn3 from "../assets/images/kkn/kkn3.jpg"
import kkn4 from "../assets/images/kkn/kkn4.jpg"
import kkn5 from "../assets/images/kkn/kkn5.jpg"
import kkn6 from "../assets/images/kkn/kkn6.jpg"
import gdsc from "../assets/images/gdsc.png"

const experiencesData = [
  {
    id: 1,
    type: "work",
    title: "Banquet Worker",
    company: "Swissotel PIK Avenue",
    duration: "Jun 2021 - August 2022",
    description: [
      "As a Banquet Worker, my responsibilities involved planning and coordinating various events, ensuring everything ran smoothly from start to finish. I assisted in organizing and preparing for occasions such as weddings, corporate gatherings, and banquets by collaborating with event planners, catering teams, and other staff members. I was responsible for setting up event venues, including arranging tables, chairs, decorations, and necessary equipment to create a welcoming and well-organized atmosphere. Additionally, I ensured that sound systems, lighting, and other technical equipment were properly prepared.",
      "During events, I oversaw operations to maintain smooth execution, monitored staff performance, and managed last-minute adjustments when needed. Handling guest complaints and resolving any issues related to food, service, or event setup was also a key part of my role, requiring effective communication and problem-solving skills. Furthermore, I worked as a food runner and server, ensuring timely and efficient food and beverage delivery while maintaining cleanliness and proper table settings. Providing excellent customer service was a priority, ensuring that guests had a pleasant and satisfying experience. This role required strong organizational skills, attention to detail, teamwork, and the ability to work under pressure in a fast-paced environment.",
    ],
    images: [WorkImg1],
  },
  {
    id: 2,
    type: "org",
    title: "Foreign Affairs Department Staff",
    company: "Himpunan Jurusan Teknik Informatika Universitas Trisakti",
    duration: "August 2024 - Present",
    description: [
      "1. Comparative Study Event Division for HMTIF (Trisakti University) X HUMANIS (Esa Unggul University : As a member of the Comparative Study Event Division for HMTIF (Trisakti University) X HUMANIS (Esa Unggul University), I was responsible for planning, organizing, and executing the event to facilitate knowledge exchange between both student organizations. My role involved coordinating logistics, managing the event schedule, arranging venues, handling technical requirements, and ensuring smooth communication between participants. I also oversaw discussions, networking sessions, and problem resolution to enhance the event experience. This position required strong event planning, teamwork, and problem-solving skills to ensure a successful and impactful comparative study session.",
      "",
    ],
    images: [OrgHim2, OrgHim1],
  },
  {
    id: 4,
    type: "org",
    title: "Ministry of Advocacy and Community Welfare Staff",
    company: "Kepresidenan Mahasiswa Universitas Trisakti",
    duration: "Mei 2024 - Present",
    description: [
      "1. Community Service Logistics Coordinator (Kepresma Kerja Nyata) : As a Community Service Logistics Coordinator, I was responsible for managing the logistics of the Kepresma Kerja Nyata program, ensuring that all necessary materials, equipment, and resources were available to support community service activities. My role involved coordinating transportation, budgeting, and scheduling while maintaining effective communication with team members and external partners to ensure smooth program execution.",
      "2. Accommodating the Aspirations of Trisakti Students and the Outside Community and Finding Solutions : In this role, I served as a bridge between Trisakti University students and the broader community, gathering aspirations, concerns, and suggestions to identify effective solutions. I facilitated discussions, coordinated with relevant stakeholders, and implemented initiatives that addressed academic, social, and organizational issues, ensuring positive outcomes for students and the community.",
    ],
    images: [kkn1,kkn2,kkn3,kkn4,kkn5,kkn6],
  },
  {
    id: 6,
    type: "org",
    title: "Core Member",
    company: "Google Developer Student Club Trisakti University",
    duration: "Okt 2023 - Mei 2024",
    description: [
      "1. Conducting Discussion Groups About All Halls in the Field of Technology : I was responsible for organizing and leading discussion groups focused on various aspects of technology, providing a platform for knowledge sharing and critical discussions. This role involved researching relevant topics, preparing discussion materials, facilitating interactive sessions, and encouraging participants to explore emerging trends and innovations in the tech industry.",
      "2. Logistics Division Study Jam Basic Python Programming : As part of the Logistics Division for the Study Jam Basic Python Programming, I managed the preparation and distribution of necessary resources, such as venue arrangements, technical equipment, and learning materials. I ensured that all logistical aspects were well-coordinated, allowing the event to run smoothly and efficiently.",
      "3. Secretary Study Jam Essential GSheets : As the Secretary for the Study Jam Essential GSheets, I was responsible for handling administrative tasks, including documentation, meeting minutes, and participant coordination. I managed event records, ensured clear communication among team members, and assisted in organizing learning materials to support an effective study session.",
    ],
    images: [gdsc],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedExperience) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }
  }, [selectedExperience]);

  const filteredExperiences = experiencesData.filter(
    (exp) => exp.type === activeTab
  );

  const openDetails = (exp) => {
    setSelectedExperience(exp);
    setCurrentImageIndex(0);
  };

  const closeDetails = () => {
    setSelectedExperience(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 === selectedExperience.images.length ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedExperience.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="experience-section">
      <h2 className="experience-title">My Experiences</h2>
      <div className="tabs-container">
        <button
          className={`tab-btn ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          Work Experience
        </button>
        <button
          className={`tab-btn ${activeTab === "org" ? "active" : ""}`}
          onClick={() => setActiveTab("org")}
        >
          Organization Experience
        </button>
      </div>

      <div className="experience-container">
        {filteredExperiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            onClick={() => openDetails(exp)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={exp.images[0]}
              alt={exp.title}
              className="experience-card-image"
            />
            <h3 className="exp-title">{exp.title}</h3>
            <p className="exp-company">{exp.company}</p>
            <p className="exp-duration">{exp.duration}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="experience-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="experience-details"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button className="close-btn" onClick={closeDetails}>
                ✖
              </button>

              <div className="details-content">
                <h2 className="details-title">{selectedExperience.title}</h2>
                <p className="details-company">{selectedExperience.company}</p>

                <div className="image-slider">
                  {selectedExperience.images.length > 1 && (
                    <button className="prev-btn" onClick={prevImage}>
                      ◀
                    </button>
                  )}
                  <img
                    src={selectedExperience.images[currentImageIndex]}
                    alt={selectedExperience.title}
                    className="slider-image"
                  />
                  {selectedExperience.images.length > 1 && (
                    <button className="next-btn" onClick={nextImage}>
                      ▶
                    </button>
                  )}
                </div>

                <div className="details-description">
                  {selectedExperience.description.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>

                <p className="details-duration">{selectedExperience.duration}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
