// src/components/UserProfile.js
import React from 'react';
import UserProfile from './UserProfile';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <UserProfile />
    </div>
  );
}



export default Dashboard;






































// import React from 'react';
// // import UserProfile (optional) from './UserProfile';

// const UserBoard = ({ userData }) =>{
//   return (
//     <div className='dashboard'>
//       <div className="dashboard__profilePic">
//       <img src={userData.image} alt="Profile Picture"/>
//       </div>

//       <div className="dashboard__info">
           
//       {/* Option 1: Display user information directly in UserDashboard */}
//       <ul>
//       <h2>Welcome, {userData.name}</h2>
//       <p>{userData.gender}, {userData.age}</p>
//         <p><strong>About:</strong><br/> {userData.about}</p>
//         <p><strong>Course of Study:</strong><br/> {userData.course}</p>
//         <p><strong>Language:</strong><br/>{userData.language}</p>
//         <p><strong>Interests:</strong><br/> {userData.interests.join(', ')}</p>
//         <p><strong>Looking for roommate:</strong> <br/ > {userData.lookingForRoommate ? 'Yes' : 'No'}</p>
//       </ul>

//       {/* Option 2: Use a reusable UserProfile component */}
//       {/* <UserProfile userData={userData} /> */}

//       {/* Additional dashboard features can go here */}
//       </div>
//     </div>
//   );
// }

// export default UserBoard;
