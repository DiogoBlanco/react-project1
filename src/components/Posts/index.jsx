import P from 'prop-types';
import React from 'react';
import './styles.css';
import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} id={post.id} cover={post.cover} title={post.title} body={post.body} />
    ))}
  </div>
);
Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.array,
};
