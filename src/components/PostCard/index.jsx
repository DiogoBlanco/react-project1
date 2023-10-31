import P from 'prop-types';
import React from 'react';
import './styles.css';

export const PostCard = ({ cover, title, body }) => (
  <div className="post">
    <img src={cover} alt={title}></img>
    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);
PostCard.propTypes = {
  cover: P.string.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
