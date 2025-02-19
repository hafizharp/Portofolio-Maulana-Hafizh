import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

// Import gambar 
import AcneInsight1 from "../assets/images/AcneInsightB.png";
import AcneInsight2 from "../assets/images/AcneInsightA.png";
import AcneInsight3 from "../assets/images/AcneInsightC.png";
import Realestate from "../assets/images/Realestate.png";
import golf1 from "../assets/images/golf1.png"
import golf2 from "../assets/images/golf2.png"
import golf3 from "../assets/images/golf3.png"
import golf4 from "../assets/images/golf4.png"
import csize1 from "../assets/images/clothsize1.png"
import csize2 from "../assets/images/clothsize2.png"
import csize3 from "../assets/images/clothsize3.png"
import titanic1 from "../assets/images/titanic1.png"
import titanic2 from "../assets/images/titanic2.png"
import titanic3 from "../assets/images/titanic3.png"
import titanic4 from "../assets/images/titanic4.png"
import titanic5 from "../assets/images/titanic5.png"
import indowonder1 from "../assets/images/indowonder1.png"
import indowonder2 from "../assets/images/indowonder2.png"
import indowonder3 from "../assets/images/indowonder3.png"



const projectsData = [
  {
    id: 1,
    name: "AcneInsight",
    year: 2023,
    images: [AcneInsight1, AcneInsight2, AcneInsight3],
    description: [
      "The AcneInsight project is a machine learning initiative aimed at predicting acne severity levels and classifying acne types using image-based inputs. This project employs advanced deep learning techniques, including ResNet-18 for severity prediction and Convolutional Neural Networks (CNN) for acne type classification. By leveraging robust image preprocessing and augmentation techniques, the project achieves high accuracy rates, making it applicable in dermatological diagnosis and patient care.",
      "AcneInsight addresses two key tasks: 1.Severity Prediction: Categorizing acne severity into levels (Normal, Level 0, Level 1, Level 2, Level 3). 2.Type Classification: Identifying the type of acne (Blackhead, Nodules, Papule, Pustules, Whitehead).",
    ],
    tools: ["Machine Learning", "Python", "Pandas & NumPy", "Matplotlib & Seaborn", "Torchvision", "PyTorch"],
    links: [
      {
        name: "GitHub Repository",
        url: "https://github.com/2AM-Labs/AcneInsight",
        icon: "fab fa-github",
      },
    ],
  },
  {
    id: 2,
    name: "Realestate-Prediction",
    year: 2023,
    images: [Realestate],
    description: [
      "This project focuses on the development of a machine learning pipeline to predict property prices based on diverse features such as geographical location, property size, number of rooms, and other significant attributes. Through systematic data preprocessing, exploratory data analysis (EDA), and robust modeling techniques, this study aims to deliver an academically rigorous and technically sound approach to real estate price prediction. By employing industry-standard tools and methodologies, the project not only enhances predictive accuracy but also contributes to understanding the underlying trends in the real estate market.",
      "This project provides detailed documentation for replicability and transparency, ensuring it can serve as a reference for both academic and practical applications in predictive modeling.",
    ],
    tools: ["Machine Learning", "Python", "Pandas", "NumPy", "Matplotlib & Seaborn", "Scikit-learn"],
    links: [
      {
        name: "GitHub Repository",
        url: "https://github.com/2AM-Labs/Realestate-Prediction",
        icon: "fab fa-github",
      }
    ],
  },
  {
    id: 3,
    name: "Cloth-Size-Prediction",
    year: 2023,
    images: [csize1, csize2, csize3],
    description: [
      "The Cloth Size Prediction project focuses on predicting the appropriate clothing size for individuals based on features such as height, weight, age, and other relevant attributes. Leveraging advanced machine learning techniques, this project provides a systematic approach to improving size recommendations, enhancing customer satisfaction, and reducing the rate of size-related returns in the clothing industry.",
      "Through rigorous data preprocessing, exploratory data analysis (EDA), and model evaluation, the project bridges theoretical concepts with practical implementations to address challenges in the retail and fashion sectors.",
    ],
    tools: ["Machine Learning", "Python", "Pandas", "NumPy", "Matplotlib & Seaborn", "Scikit-learn", "XGBoost"],
    links: [
      {
        name: "GitHub Repository",
        url: "https://github.com/2AM-Labs/Cloth-Size-Prediction?tab=readme-ov-file",
        icon: "fab fa-github",
      }
    ],
  },
  {
    id: 4,
    name: "Play-Golf-Prediction",
    year: 2023,
    images: [golf1,golf2,golf3,golf4],
    description: [
      "The Play Golf Prediction project aims to predict whether it is suitable to play golf based on weather conditions, such as outlook, temperature, humidity, and wind. Using machine learning classification techniques, this project models the decision-making process to determine 'Play' or 'Don't Play' scenarios. The project emphasizes systematic data preprocessing, exploratory data analysis (EDA), and model evaluation to deliver robust predictions.",
      "By leveraging these techniques, the project contributes to understanding environmental factors influencing human decision-making, while also providing a practical implementation of machine learning concepts.",
    ],
    tools: ["Machine Learning", "Python", "Pandas", "NumPy", "Matplotlib & Seaborn", "Scikit-learn",],
    links: [
      {
        name: "GitHub Repository",
        url: "https://github.com/2AM-Labs/Play-Golf-Prediction",
        icon: "fab fa-github",
      }
    ],
  },
  {
    id: 5,
    name: "Titanic-Survival-Prediction",
    year: 2023,
    images: [titanic1,titanic2,titanic3,titanic4,titanic5],
    description: [
      "The Titanic Survival Prediction project focuses on predicting the survival outcomes of passengers aboard the Titanic using machine learning techniques. This project leverages passenger data, such as age, gender, class, and other attributes, to build classification models capable of identifying survival probabilities. By employing systematic data preprocessing, exploratory data analysis (EDA), and robust machine learning pipelines, the project aims to provide a comprehensive approach to understanding survival factors and enhancing predictive accuracy.",
      "This project serves as an academic exploration of predictive modeling, with detailed documentation, reproducible workflows, and insights that bridge theoretical concepts and practical applications in the field of data science.",
    ],
    tools: ["Machine Learning", "Python", "Pandas", "NumPy", "Matplotlib & Seaborn", "Scikit-learn", "XGBoost",],
    links: [
      {
        name: "GitHub Repository",
        url: "https://github.com/2AM-Labs/Titanic-Survival-Prediction?tab=readme-ov-file",
        icon: "fab fa-github",
      }
    ],
  },
  {
    id: 6,
    name: "IndoWonder UI/UX Design",
    year: 2023,
    images: [indowonder1,indowonder2,indowonder3],
    description: [
      "Indowonder is a travel booking application designed to help users easily find and purchase tickets for tourist attractions, transportation, and accommodations. Created for an inter-university UI/UX competition, this project aimed to deliver an intuitive and visually appealing design that enhances the travel planning experience. Using the Design Thinking methodology, the design process involved user research, problem identification, ideation, prototyping, and testing to ensure a seamless and efficient user experience.",
      "The UI/UX design, developed using Figma, features a clean and modern interface with intuitive navigation, personalized recommendations for hidden tourist destinations, and a seamless booking flow. The design prioritizes accessibility, responsiveness, and ease of use, making travel planning more convenient for users. This project showcases my ability to create user-centered designs that balance aesthetics and functionality while addressing real-world user needs.",
    ],
    tools: ["UI/UX Design", "Figma"],
    links: [
      {
        name: "Figma Prototype",
        url: "https://www.figma.com/design/de9uW8aKmTug8rthaN01uO/Untitled?node-id=0-1&t=6WvEaQsmHPDM2V39-0",
        icon: "fab fa-figma",
      }
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }
  }, [selectedProject]);

  const openDetails = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 === selectedProject.images.length ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };


  const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.10, duration: 0.4 },
    }),
  };

  return (
    <motion.div className="projects-section">
      <h1 className="section-title">My Projects</h1>
      <motion.div 
        className="projects-grid"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            onClick={() => openDetails(project)}
            whileHover={{ scale: 1.05 }}
            variants={projectCardVariants}
            custom={index}
          >
            <img src={project.images[0]} alt={project.name} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-year">{project.year}</p> {/* Tahun hanya di project card */}
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="project-details-overlay">
            <motion.div className="project-details">
              <button className="close-btn" onClick={closeDetails}>✖</button>
              <h2 className="details-name">{selectedProject.name}</h2>

              <div className="details-images">
                <div className="image-slider">
                  {selectedProject.images.length > 1 && (
                    <button className="prev-btn" onClick={prevImage}>
                      <i className="fas fa-chevron-left"></i>
                    </button>
                  )}
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={selectedProject.name} 
                    className="slider-image" 
                  />
                  {selectedProject.images.length > 1 && (
                    <button className="next-btn" onClick={nextImage}>
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  )}
                </div>
              </div>

              <div className="details-content">
                <div className="details-description">
                  {selectedProject.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="details-tools">
                  {selectedProject.tools.map((tool, index) => (
                    <span key={index} className="tool-badge">{tool}</span>
                  ))}
                </div>

                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="details-links">
                    <h3 className="links-title">Related Links</h3>
                    <div className="links-container">
                      {selectedProject.links.map((link, index) => (
                        <a 
                          key={index} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="link-card"
                        >
                          <i className={link.icon}></i>
                          <span>{link.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
