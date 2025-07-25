import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
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
      img: "https://firebasestorage.googleapis.com/v0/b/smartfarming-b9715.firebasestorage.app/o/Harsha.png?alt=media&token=4959f47d-5f5d-4e8c-81be-69b9a87b3b1f",
      role: "Team Lead",
      linkedin: "https://www.linkedin.com/in/hpdjoy",
    },
    {
      name: "Abinash M.",
      img: "https://firebasestorage.googleapis.com/v0/b/smartfarming-b9715.firebasestorage.app/o/CaptionAbhi.png?alt=media&token=05e869ea-0f44-4196-a0db-1b4b8c283e5b",
      role: "Frontend Dev",
      linkedin: "https://www.linkedin.com/in/abinash-mohapatra-167278297/",
    },
    {
      name: "S. Nirlipta",
      img: "https://firebasestorage.googleapis.com/v0/b/smartfarming-b9715.firebasestorage.app/o/Nirlipta.png?alt=media&token=f83ed14d-976b-4e20-84ec-4c6bb0935eff",
      role: "Backend Dev",
      linkedin: "https://www.linkedin.com/in/snirliptanitinimagna/",
    },
    {
      name: "Abinash N.",
      img: "https://firebasestorage.googleapis.com/v0/b/smartfarming-b9715.firebasestorage.app/o/Abinash.png?alt=media&token=a1da14a7-6aa0-4ff1-932d-d608e9f9a0f4",
      role: "ML Engineer",
      linkedin: "https://www.linkedin.com/in/abinash-nanda-2207232a9/",
    },
    {
      name: "Chinmay S.",
      img: "Chinmay.png",
      role: "ML Engineer",
      linkedin: "https://www.linkedin.com/in/amit-profile",
    },
    {
      name: "Amit K. Sharma",
      img: "https://firebasestorage.googleapis.com/v0/b/smartfarming-b9715.firebasestorage.app/o/Amit.png?alt=media&token=87eff528-07a4-41db-b338-2f1d547ededc",
      role: "Hardware Engineer",
      linkedin:
        "https://www.linkedin.com/in/amit-kumar-sharma-8a79b4222/",
    },
    {
      name: "Smurti R. Rout",
      img: "https://firebasestorage.googleapis.com/v0/b/smartfarming-b9715.firebasestorage.app/o/Smurti.png?alt=media&token=641fb9c0-aa02-4403-b9b6-43cebd57a82c",
      role: "Hardware Engineer",
      linkedin: "https://www.linkedin.com/in/smrutranjan2004/",
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
          Welcome to AGRiON
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience the future of agriculture with our Automated Adaptive
          Greenhouse technology — boosting plant growth and maximizing yield.
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

      {/* Team Section */}
      <section id="team" className="bg-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4 shadow"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-[#5fa437] hover:text-[#4e852e] transition"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
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
              src="https://firebasestorage.googleapis.com/v0/b/smartfarming-b9715.firebasestorage.app/o/Satish.png?alt=media&token=acad868a-5b3d-4eb9-b4b6-ddc6f6868487"
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
                src="https://firebasestorage.googleapis.com/v0/b/smartfarming-b9715.firebasestorage.app/o/Silicon.jpg?alt=media&token=37ac5627-a539-4db9-b3d9-2c0119b9379d"
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
                src="https://firebasestorage.googleapis.com/v0/b/smartfarming-b9715.firebasestorage.app/o/Sipc.png?alt=media&token=2a910137-8884-42d8-ab17-c702dafd2d88"
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
      <footer className="bg-[#5fa437] text-white py-6 text-center">
        <p className="text-lg font-semibold">
          AGRiON © {new Date().getFullYear()}
        </p>
        <p className="text-sm">Designed for smart and sustainable agriculture</p>
      </footer>
    </div>
  );
}

export default MainPage;
