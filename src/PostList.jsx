import React, { useState, useEffect } from 'react';

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
      xhr.onload = () => {
        if (xhr.status === 200) {
          setPosts(JSON.parse(xhr.responseText));
          setLoading(false);
        } else {
          setError('Failed to fetch posts');
          setLoading(false);
        }
      };
      xhr.onerror = () => {
        setError('Failed to fetch posts');
        setLoading(false);
      };
      xhr.send();
    }, []);
  
    if (loading) {
      return <div className="loading">Loading...</div>; 
    }
  
    if (error) {
      return <div className="error">Error: {error}</div>; 
    }
  
    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id} className="post">
            {post.title}
          </div>
        ))}
      </div>
    );
  }