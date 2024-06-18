// src/components/UserProfile.js
import React, { useEffect, useState} from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db } from '../firebase';
import { questions } from '../pages/Onboarding';


const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          toast.error("User not found");
        }
      
    }
   
} catch (error) {
  console.error("Error fetching user data: ", error);
  toast.error("Error fetching user data");
}
};
fetchUserData();
}, [auth, db]);

if (!userData) {
  return <div>Loading...</div>;
}

const {basicInfo, answers} = userData;

const userAnswers = {};
questions.forEach((question, index) => {
  userAnswers[question] = answers[index];
});


return (
  <div className="user-profile">
      <div className="profile-card">
        <div className="profile-image-container">
          {basicInfo.image && (
            <img
              src={basicInfo.image}
              alt="Profile"
              className="profile-image"
            />
          )}
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{basicInfo.name}</h2>
          <p className="profile-detail">Gender: {basicInfo.gender}</p>
          <p className="profile-detail">Age: {basicInfo.age}</p>
        </div>
      </div>
      <div className="answers-container">
        <h3 className="answers-title">About Me</h3>
        <ul className="answers-list">
          {Object.keys(userAnswers).map((question, index) => (
            <li key={index} className="answer-item">
              <h4 className="answer-question">{question}</h4>
              <p className="answer-text">{userAnswers[question]}</p>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};
export default UserProfile;
