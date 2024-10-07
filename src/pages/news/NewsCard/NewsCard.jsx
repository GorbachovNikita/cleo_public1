import React from 'react';
import './NewsCard.page.css'

const NewsCard = ({ title, description, image, createdAt }) => {
    return (
      <article className="card">

        <div>
          {/* <img src={image} alt={title} className="card-image" /> */}
          <div className="card-image"></div> {/* Черный квадрат */}
          <time className="card-date">{createdAt}</time>
        </div>

      <div className="card-content">
          <h2 className="card-title">
            {title}
          </h2>
          <p className="card-description">
            {description}
          </p>
      </div>
     </article>
    );
};

export default NewsCard;