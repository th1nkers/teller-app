import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {

  const USERS = [
    {
      id: 'u1',
      name: 'thinkers',
      image:
        'https://d35hnlqsfbl0b5.cloudfront.net/j-media/5fe5acb39f5fcfdadcc468b.jpg',
      blogs: 3
    }
  ];

  return <UsersList items={USERS}/>
}

export default Users