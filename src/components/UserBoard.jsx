import React from 'react';
// import UserProfile (optional) from './UserProfile';

const UserBoard = ({ userData }) =>{
  return (
    <div className='dashboardContainer'>
      <h1>Welcome, {userData.name}!</h1>
      {/* Display user picture (replace with your logic) */}
      <img src={userData.image} alt="Profile Picture" className={'profilePicture'} />

      {/* Option 1: Display user information directly in UserDashboard */}
      <ul className={'userInfoList'}>
        <li>Interests: {userData.interests.join(', ')}</li>
        <li>Looking for roommate: {userData.lookingForRoommate ? 'Yes' : 'No'}</li>
      </ul>

      {/* Option 2: Use a reusable UserProfile component */}
      {/* <UserProfile userData={userData} /> */}

      {/* Additional dashboard features can go here */}
    </div>
  );
}

export default UserBoard;
