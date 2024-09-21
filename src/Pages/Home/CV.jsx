import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CV() {
  const [currentCV, setCurrentCV] = useState(0);
  const cvData = [
    {
      image: "/img/cv_frontend.png",
      pdf: "/cv/cv_frontend.pdf",
      title: "Frontend Developer CV",
    },
    {
      image: "/img/cv_backend.png",
      pdf: "/cv/cv_backend.pdf",
      title: "Backend Developer CV",
    },
    {
      image: "/img/cv_fullstack.png",
      pdf: "/cv/cv_fullstack.pdf",
      title: "Fullstack Developer CV",
    },
    {
      image: "/img/cv_software_eng.png",
      pdf: "/cv/cv_software_eng.pdf",
      title: "Software Engineer CV",
    },
  ];

  const settings = {
    dots: true, // Enable dot indicators
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentCV(current),
  };

  const downloadCV = () => {
    const cv = cvData[currentCV];
    const link = document.createElement("a");
    link.href = cv.pdf;
    link.download = `${cv.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cv-container"  id="CV">
      <Slider {...settings} className="cv-slider">
        {cvData.map((cv, index) => (
          <div key={index} className="cv-slide">
            <img src={cv.image} alt={cv.title} />
          </div>
        ))}
      </Slider>
      <div className="cv-content">
        <p className="cv-title">Curriculum Vitae</p>
        <h1>Muhammad Rizky</h1>
        <p>I’m Muhammad Rizky, a Bachelor of Information Engineering student at CCITFTUI, Depok, Indonesia. I’m Muhammad Rizky, a Bachelor of Information Engineering student at CCITFTUI, Depok, Indonesia. I mastering javascript, python, go, c++, java, dart, and other programming languages. I have strong skills in problem-solving, teamwork, and project management. Additionally, I am fluent in English and Indonesian, which aids my excellent communication and interpersonal skills.
</p>
        <button onClick={downloadCV}>Download CV (FULLSTACK)</button>
      </div>
    </div>
  );
}
