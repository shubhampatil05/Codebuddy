import React, { useState, useEffect } from "react";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://codebuddy.review/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="posts-container">
      <h2>Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="post-image">
              <img src={post.image} alt="Post" />
            </div>
            <div className="post-details">
              <h3>
                {post.firstName} {post.lastName}
              </h3>
              <p>{post.writeup}</p>
              <div className="post-author">
                <img src={post.avatar} alt="Author" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
