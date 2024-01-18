import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Unlock the Unimaginable <br /> with Phone-T</h1>
      <p>Yet, make any bed a haven for tech-savvy travelers seeking assistance, avoiding displeasure. 
        Not just thoughts but a complete exercise blessing. Indulgence transforms everything into joy,</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;