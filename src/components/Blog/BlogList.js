import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogForm from './BlogForm';
import BlogItem from './BlogItem';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/blogposts');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <BlogForm fetchBlogs={fetchBlogs} />
      {blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} />
      ))}
    </div>
  );
};

export default BlogList;
