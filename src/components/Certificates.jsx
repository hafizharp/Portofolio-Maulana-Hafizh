import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Certificates.css";

import sertiNetwork1 from "../assets/images/sertifikat/sertif network engineer1.jpg";
import sertiNetwork2 from "../assets/images/sertifikat/sertif network engineer2.jpg";
import sertifgdsc from "../assets/images/sertifikat/sertif gdsc.png";
import sertifsemnaas from "../assets/images/sertifikat/sertif semnas call paper.png"
import sertifdegifest from "../assets/images/sertifikat/serti digifest.png"


const certificatesData = [
  {
    id: 1,
    name: "Junior Network Administrator Certificate",
    year: "2022",
    description: "The certification I got in the competency exam was to configure routing on a network using a router.",
    images: [sertiNetwork1, sertiNetwork2],
  },
  {
    id: 2,
    name: "Facilitation Team Study Jam",
    year: "2023",
    description: "The certificate I got after participating as a facilitator team in the event STUDY JAM: PYTHON PRELUDE.",
    images: [sertifgdsc],
  },
  {
    id: 3,
    name: "National Seminar Participation",
    year: "2023",
    description: "certificate that I got after attending a national seminar on how to make papers and scientific papers.",
    images: [sertifsemnaas],
  },  
  {
    id: 4,
    name: "DigiFest Event Participation",
    year: "2022",
    description: "the certificate that I got after participating in the digifest event is about understanding the world of technology that continues to advance.",
    images: [sertifdegifest],
  },
];


const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 
  useEffect(() => {
    if (selectedCertificate) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }
  }, [selectedCertificate]);

  const openDetails = (certificate) => {
    setSelectedCertificate(certificate);
    setCurrentImageIndex(0);
  };

  const closeDetails = () => {
    setSelectedCertificate(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 === selectedCertificate.images.length ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedCertificate.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div className="certificates-section">
      <h1 className="section-title">My Certificates</h1>
      <motion.div className="certificates-grid">
        {certificatesData.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className="certificate-card"
            onClick={() => openDetails(certificate)}
            whileHover={{ scale: 1.04, boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4, ease: "easeOut" }}
          >
            <img src={certificate.images[0]} alt={certificate.name} className="certificate-image" />
            <h3 className="certificate-name">{certificate.name}</h3>
            <p className="certificate-year">{certificate.year}</p>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-details-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="certificate-details">
              <button className="close-btn" onClick={closeDetails}>
                ✖
              </button>
              <h2 className="details-name">{selectedCertificate.name}</h2>

              <div className="details-images">
                <div className="image-slider">
                  {selectedCertificate.images.length > 1 && (
                    <button className="prev-btn" onClick={prevImage}>
                      <i className="fas fa-chevron-left"></i>
                    </button>
                  )}
                  <img 
                    src={selectedCertificate.images[currentImageIndex]} 
                    alt={selectedCertificate.name} 
                    className="slider-image" 
                  />
                  {selectedCertificate.images.length > 1 && (
                    <button className="next-btn" onClick={nextImage}>
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  )}
                </div>
              </div>

              <div className="details-content">
                <p className="details-description">{selectedCertificate.description}</p>
                <p className="details-year">{selectedCertificate.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Certificates;
