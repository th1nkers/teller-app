import React from 'react';
import { useParams } from 'react-router-dom';
import BlogList from '../components/BlogList';

const DUMMY_BLOGS = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'thinkers State Building',
      description: 'One of the most famous sky scrapers in the world!',
      creator: 'u2'
    }
  ];

const UserBlogs = () => {
   const userId = useParams().userId;
   const loadedBlogs = DUMMY_BLOGS.filter(place=>place.creator === userId); 
  return <BlogList items={loadedBlogs}></BlogList>
}

export default UserBlogs