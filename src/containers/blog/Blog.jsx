import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Stay Updated - Explore<br /> the Latest in Phone-T</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 2, 2024" text="Phone-T and Future Tech is the future. Let us explore how it is?" />
        <Article imgUrl={blog03} date="Jan 2, 2024" text="Phone-T and Future Tech is the future. Let us explore how it is?" />
        <Article imgUrl={blog04} date="Jan 2, 2024" text="Phone-T and Future Tech is the future. Let us explore how it is?" />
        <Article imgUrl={blog05} date="Jan 2, 2024" text="Phone-T and Future Tech is the future. Let us explore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;