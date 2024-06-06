import React, { useState, useEffect } from 'react';


const Home = () => {
  const [rotatedText, setRotatedText] = useState("");
  const [index, setIndex] = useState(0);
  const texts = ["IOT Development", "IOT Security", "IOT Network", "Mechine Learning"];

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
            <br />
            
          </h1>
          <p className="hero--section-description">
           I' am a student of Engginering
            <br /> in CCIT FTUI
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/teknomen.jpg" alt="Hero Section" />
      </div>
    </section>
  );
};

export default Home;
