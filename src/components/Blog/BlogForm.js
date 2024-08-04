import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = ({ fetchBlogs }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/blogposts', { title, content }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchBlogs();
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  return (
    <div>
      <h2>Create Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
