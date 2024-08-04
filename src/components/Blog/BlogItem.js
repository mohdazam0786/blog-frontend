import React from 'react';
import axios from 'axios';

const BlogItem = ({ blog, fetchBlogs }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/blogposts/${blog._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogItem;
