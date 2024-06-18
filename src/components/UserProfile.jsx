// src/components/UserProfile.js
import React from 'react';
import userData from '../userData';


const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={userData.image} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h2>{userData.name}</h2>
          <p>{userData.gender}/1234567890</p>
          <p>Joined: 2022-02-03</p>
          <button>Edit Profile</button>
        </div>
      </div>
      <div className="profile-details">
        <h3>Details</h3>
        <div className="details-section">
          <h4>About</h4>
          <p>{userData.about}</p>
          
          </div>
        <div className="looking-for">
          <h3>I'm looking for</h3>
          <p>Wish to meet: Men, Women</p>
          <p>Preferred Age: 18-20, 21-25, 26-30, 31-35</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
