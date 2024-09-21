import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your background?",
      answer:
        "I’m Muhammad Rizky, a Bachelor of Information Engineering student at CCITFTUI, Depok, Indonesia. I know javascript, python, go, c++, java, dart, and other programming languages.",
    },
    {
      question: "What are your skill?",
      answer:
        "I have strong skills in problem-solving, teamwork, and project management. Additionally, I am fluent in English and Indonesian, which aids my excellent communication and interpersonal skills.",
    },
    {
      question: "What projects have been created?",
      answer:
        "Donation Web, Media Social, Netflix Clone, QR Code Generator, Gedget Shop, BestPoin, Dashboard Student Information, and other projects",
    },
  ];

  return (
    <section id="FAQ" className="faq--section">
      <div className="faq--section--box">
        <h1 className="faq--section--heading">Frequently Asked Questions</h1>
        <div className="faq--items">
          {faqs.map((faq, index) => (
            <div key={index} className="faq--item">
              <h2
                className="faq--question"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="faq--toggle">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </h2>
              <div
                className={`faq--answer ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
