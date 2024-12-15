import React, { useState } from "react";
import "../css/Faq.css"; 
import Sidebar from "./Sidebar";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I create a new note?",
      answer: "To create a new note, click the 'Add Note' button on the homepage and fill out the required details, then save your note."
    },
    {
      question: "Can I edit or delete a note?",
      answer: "Yes, you can edit or delete any note by clicking the 'Edit' or 'Delete' button next to the respective note in your notes list."
    },
    {
      question: "How are my notes saved?",
      answer: "Your notes are automatically saved to the database and can be accessed at any time by logging into your account."
    },
    {
      question: "Is there a way to categorize my notes?",
      answer: "Currently, there is no option for categorizing notes, but you can use the search function to quickly find specific notes."
    },
    {
      question: "How do I recover deleted notes?",
      answer: "Once a note is deleted, it cannot be recovered. Be cautious before deleting any important notes."
    },
  ];
  

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-header" onClick={() => toggleQuestion(index)}>
                <div className="blue-bar"></div> {/* Blue bar */}
                <h2 className="faq-question">{faq.question}</h2>
                <button className="faq-toggle-btn">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
