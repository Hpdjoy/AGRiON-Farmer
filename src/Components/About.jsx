import { useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaRobot,
  FaLeaf,
  FaChartLine,
  FaTachometerAlt,
  FaGithub
} from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import { useState, useEffect, useRef, useCallback } from "react";

function MainPage() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const touchStartX = useRef(null);

  const galleryImages = [
    { src: "certificate.jfif", alt: "Gallery 1" },
    { src: "img1.jfif", alt: "Gallery 2" },
    { src: "img2.jfif", alt: "Gallery 3" },
    { src: "img3.jfif", alt: "Gallery 4" },
    { src: "img4.jpg", alt: "Gallery 5" },
    { src: "img6.jpg", alt: "Gallery 6" },
    { src: "img7.jpg", alt: "Gallery 7" },
    { src: "img8.jpg", alt: "Gallery 8" },
  ];

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowRight") {
          setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
        } else if (e.key === "ArrowLeft") {
          setSelectedIndex((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
          );
        } else if (e.key === "Escape") {
          setSelectedIndex(null);
        }
      }
    },
    [selectedIndex]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (diff > 50) {
        // swipe left
        setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
      } else if (diff < -50) {
        // swipe right
        setSelectedIndex((prev) =>
          prev === 0 ? galleryImages.length - 1 : prev - 1
        );
      }

      touchStartX.current = null;
    }
  };

  const team = [
    {
      name: "Harsha",
      img: "https://media.licdn.com/dms/image/v2/D5603AQEuaew4D5e81w/profile-displayphoto-scale_400_400/B56Zk6B1O9G0Ag-/0/1757615185439?e=1768435200&v=beta&t=O_SjxXFT-y9ArEeirVc4LaTrrCNehdB28EwVXTKDYLU",
      role: "Project Lead",
      linkedin: "https://www.linkedin.com/in/hpdjoy",
      github: "https://www.github.com/hpdjoy",
      portfolio: "https://hpdjoy.tech",
    },
    {
      name: "Abinash M.",
      img: "https://media.licdn.com/dms/image/v2/D5603AQFWS67ODHR89g/profile-displayphoto-scale_400_400/B56ZtSTm5SJ8Ag-/0/1766612431225?e=1768435200&v=beta&t=pggdIevaBX_6cXBqwLlWT5lJiwjbyNUo9qTZQOZNjuQ",
      role: "Funds & PR",
      linkedin: "https://www.linkedin.com/in/abinash-mohapatra-167278297/",
    },
    {
      name: "S. Nirlipta",
      img: "https://media.licdn.com/dms/image/v2/D5603AQFGGxDHw29LDA/profile-displayphoto-scale_400_400/B56ZjqD4irHcAk-/0/1756273547448?e=1768435200&v=beta&t=QpboPYCZYjZNc9IwPQsiXBztnJBYZzEAtWN8f4RidMg",
      role: "Technical Lead",
      linkedin: "https://www.linkedin.com/in/snirliptanitinimagna/",
    },
    {
      name: "Abinash N.",
      img: "https://media.licdn.com/dms/image/v2/D5603AQHD-L-Hc0IOhw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704914333388?e=1768435200&v=beta&t=bPYwXoy98VVDo5tO8coLE36SGgiU-i_fdvL9lCyd1Vw",
      linkedin: "https://www.linkedin.com/in/abinash-nanda-2207232a9/",
    },
    {
      name: "Chinmay S.",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQGZ7mBgnLb0_w/profile-displayphoto-shrink_400_400/B4EZdiRIGRGwAk-/0/1749700347425?e=1768435200&v=beta&t=Ttp_DrQ2y4gTfU7wmam83YbzOMdNMuqyJXgscDC1Jbo",
      role: "Android Developer",
      linkedin: "https://www.linkedin.com/in/chinmaya-sahoo-b41903307/",
    },
    {
      name: "Amit K. Sharma",
      img: "https://media.licdn.com/dms/image/v2/D5603AQFct6UVErRtwQ/profile-displayphoto-shrink_400_400/B56ZZwng0BHUAg-/0/1745646129403?e=1768435200&v=beta&t=bkI3uMikgqhCI6Afgan9Mgw-vqikgRnU57ayTGKGHXQ",
      role: "Hardware Engineer",
      linkedin:
        "https://www.linkedin.com/in/amit-kumar-sharma-8a79b4222/",
      github: "https://github.com/amitops2103"
    }
  ];

  const featureList = [
    {
      icon: FaRobot,
      title: "AI Crop Solution Bot",
      description: "Get instant, crop-specific advice and solutions for farming challenges powered by an intelligent AI assistant."
    },
    {
      icon: FaTachometerAlt,
      title: "Live Environmental Monitoring",
      description: "Real-time data streams for climate, soil health, temperature, and water levels to ensure optimal growing conditions."
    },
    {
      icon: FaLeaf,
      title: "Automated Climate Control",
      description: "The system automatically adjusts greenhouse climate factors (humidity, ventilation, light) based on crop needs."
    },
    {
      icon: FaChartLine,
      title: "Soil Moisture Trends",
      description: "View historical data and predictive trends for soil moisture, enabling precise and efficient watering schedules."
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen w-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen pt-20 px-6 bg-gradient-to-b from-green-100 to-white overflow-hidden">
        <span className="absolute text-5xl bottom-4 sm:bottom-2">
          <iframe src="https://lottie.host/embed/f248728f-2a56-4fbd-b502-6ff7128e1594/HJoJB97V6D.lottie" />
        </span>

        <motion.h1
          className="text-6xl font-extrabold text-[#5fa437] mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WELCOME TO <span className="text-black">AGRi</span>ON
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience the future of agriculture with our <strong>Automated Adaptive
            Greenhouse technology</strong> — boosting plant growth and maximizing yield.
        </motion.p>

        <motion.button
          className="bg-[#5fa437] text-white font-bold py-3 px-8 rounded-md hover:bg-[#4e852e] text-lg"
          onClick={() => navigate("./login")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* --- New Features Section --- */}
      <section id="features" className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <feature.icon className="text-5xl text-[#5fa437] mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            className="bg-transparent border-2 border-[#5fa437] text-[#5fa437] font-bold py-3 px-8 rounded-md hover:bg-[#5fa437] hover:text-white transition text-lg"
            onClick={() => navigate("./login")}
          >
            Explore the Dashboard
          </button>
        </div>
      </section>
      {/* --------------------------- */}

      {/* Team Section */}
      <section id="team" className="bg-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex items-center hover:shadow-xl transition"
            >
              {/* Left Side - Photo */}
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full shadow-md mr-6"
              />

              {/* Right Side - Info */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{member.role}</p>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#5fa437] hover:text-[#4e852e] transition"
                  >
                    <FaLinkedin className="mr-1" /> LinkedIn
                  </a>

                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#5fa437] hover:text-[#4e852e] transition"
                    >
                      <FaGithub className="mr-1" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Special Thanks Section */}
      <section className="bg-gradient-to-r from-green-50 to-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10 tracking-tight">
            Special Thanks & Guidance
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-white shadow-lg rounded-2xl p-8 transition-all duration-300">
            <img
              src="https://silicon.ac.in/wp-content/uploads/2025/09/1.-Internal-Hackathon.jpg"
              alt="Satish Kumar Das"
              className="w-36 h-36 rounded-full object-cover border-4 border-[#5fa437] shadow-md"
            />
            <div className="text-left sm:text-justify text-gray-700 text-lg leading-relaxed">
              <p>
                We extend our heartfelt gratitude to{" "}
                <span className="font-semibold text-[#5fa437]">
                  Satish Kumar Das
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#5fa437]">
                  Debi Prasad Pradhan
                </span>{" "}
                for their constant support, mentorship, and insightful guidance
                throughout the AGRiON journey. Their dedication to promoting
                innovation in smart agriculture has been instrumental in our
                growth.
              </p>
            </div>
          </div>
          <div className="mt-12 space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-8 bg-white shadow-lg rounded-2xl p-8 transition-all duration-300">
              <img
                src="https://silicon.ac.in/wp-content/uploads/2025/02/8.jpg"
                alt="Silicon University"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#5fa437] shadow-md"
              />
              <div className="text-left sm:text-justify text-gray-700 text-lg leading-relaxed">
                <p>
                  We sincerely thank{" "}
                  <span className="font-semibold text-[#5fa437]">
                    Silicon University
                  </span>{" "}
                  for providing the platform and resources that enabled the
                  development of AGRiON. Their commitment to fostering
                  innovation in technology and education has been a cornerstone
                  of our success.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-8 bg-white shadow-lg rounded-2xl p-8 transition-all duration-300">
              <img
                src="https://silicon.ac.in/wp-content/uploads/2024/01/5.-Techtronics.jpg"
                alt="SIPC"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#5fa437] shadow-md"
              />
              <div className="text-left sm:text-justify text-gray-700 text-lg leading-relaxed">
                <p>
                  Our sincere thanks to{" "}
                  <span className="font-semibold text-[#5fa437]">SIPC</span> for
                  their unwavering support and guidance in the development of
                  AGRiON. Their expertise and commitment to excellence have been
                  invaluable in shaping our project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#5fa437]">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black/70 z-50 flex items-center justify-center px-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-3xl hover:text-red-400 transition"
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>

            {/* Prev */}
            <button
              className="absolute left-5 text-white text-4xl hover:text-green-400 transition select-none"
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === 0
                    ? galleryImages.length - 1
                    : selectedIndex - 1
                )
              }
            >
              &#8592;
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />

            {/* Next */}
            <button
              className="absolute right-5 text-white text-4xl hover:text-green-400 transition select-none"
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % galleryImages.length)
              }
            >
              &#8594;
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#5fa437] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {/* Left Section - Branding / Description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">AGRiON</h2>
            <p className="text-sm opacity-90">
              Smart & Sustainable Agriculture Solutions for the Future.
            </p>
            <p className="mt-4 text-sm">
              © {new Date().getFullYear()} AGRiON. All rights reserved.
            </p>
          </div>

          {/* Right Section - Contact & Social */}
          <div id="contact" className="text-sm">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-lg" />
                <a href="mailto:hpdjoy@gmail.com" className="hover:underline">
                  hpdjoy@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-lg" />
                <a href="tel:+919708128569" className="hover:underline">
                  +91 9708128569
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg" />
                <span>Bhubaneswar, Odisha, India</span>
              </li>
              <li className="flex items-center gap-2">
                <FaGlobe className="text-lg" />
                <a
                  href="http://hpdjoy.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  hpdjoy.tech
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="flex gap-5 mt-5 text-2xl">
              <a
                href="https://www.linkedin.com/in/hpdjoy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/hpdjoy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;