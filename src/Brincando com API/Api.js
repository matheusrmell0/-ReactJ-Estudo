import React from 'react';
import PhotoGet from './endpoints/PhotoGet';
import PhotoPost from './endpoints/PhotoPost';
import TokenPost from './endpoints/TokenPost';
import UserPost from './endpoints/UserPost';

const Api = () => {
  return (
    <>
      <div className="body">
        <div style={{ gridColumn: '1' }}>
          <UserPost />
          <TokenPost />
          <PhotoPost />
        </div>
        <div style={{ gridColumn: '2' }}>
          <PhotoGet />
        </div>
      </div>
    </>
  );
};

export default Api;
