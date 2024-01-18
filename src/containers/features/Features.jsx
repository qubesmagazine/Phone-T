import React from 'react'
import './features.css'
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Embrace the Revolution',
    text: 'Witness the transformation. They find, Okwy, generously contributing his richness. They age, drawing admiration like Mrs. Improving.',
  },
  {
    title: 'Pioneer Ahead',
    text: 'Consider and sympathize with ten uncommonly occasional assistance, which is more than sufficient',
  },
  {
    title: 'Innovate Phone-T',
    text: 'Lead by asking. Possible relationships are discussed with elegance, eating, and debating..',
  },
  {
    title: 'Phone-T for Tomorrow',
    text: 'Truly, a boy of the tech law county, she, unable, her sister. Feet off its like, like six. leave law built now.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into the Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;