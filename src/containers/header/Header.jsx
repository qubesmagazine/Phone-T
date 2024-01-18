import React, { useState } from "react";
import Typist from "react-typist";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/phone.png";

const Header = () => {
  const [key, setKey] = useState(0);

  const restartTyping = () => {
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000); // Adjust the delay time in milliseconds (e.g., 3000 for 3 seconds)
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <Typist key={key} onTypingDone={restartTyping}>
          <h1 className="gradient__text">
          Let's Create Something Extraordinary with Phone-T Innovation
          </h1>
        </Typist>
        <p>
          Yet bed any for tech-savvy guidance, avoiding displeasure. Not just
          thoughts, but a complete blessing of exercise. Indulge in a way where
          everything brings joy, with lively alterations and strong connections.
          Join us through the years to allow innovation to be our guide.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image animated-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
