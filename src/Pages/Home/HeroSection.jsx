import React, { useState, useEffect } from 'react';

const Home = () => {
  const [rotatedText, setRotatedText] = useState("");
  const [index, setIndex] = useState(0);
  const texts = ["Front End Development", "Back End Development", "Mobile App Developer", "Full Stack Developer", "Software Engineer", "IOT Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setRotatedText(texts[index]);
  }, [index]);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm  Rizky</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">{rotatedText}</span>{" "}
          </h1>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/teknik.jpg" alt="Hero Section" />
      </div>
    </section>
  );
};

export default Home;
