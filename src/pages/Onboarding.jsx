import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const questions = [
  "How do you spend most of your days?",
  "What languages do you speak?",
  "How would you describe yourself as a person?",
  "People refer to you as...",
  "Which Pets do you prefer?",
  "Rate Your Cleanliness",
  "Music So Loud...",
  "Describe Yourself in a few Sentences",
];

const options = [
  ["Studying", "Working", "Both studying & working"],
  ["English", "Romanian", "Hungarian", "Italian", "French", "Spanish", "German", "Other"],
  ["Active", "Calm", "Introvert", "Flexible", "Friendly", "Fun", "Honest", "Sociable", "Tolerant", "Extrovert", "Relaxed"],
  ["Adventurer", "Early bird", "Night owl", "Gamer", "Foodie", "Handyman", "Musician", "Creative", "Movie goer", "Binge watcher", "Gym addict", "Party head", "Tree hugger", "Smoker", "Non-smoker", "Animal lover"],
  ["Birds", "Cats", "Fish", "Reptiles", "No pets"],
  ["Tidy", "Average", "Messy"],
  ["Neighbours Can hear it", "Sometimes my ear hurts", "No one is ever bothered"],
  ["By Adding A few Short sentences about Your Self,You increase your chances of finding a roommate"]
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill([]));
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    gender: '',
    age: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
  const navigate = useNavigate();

  const handleOptionChange = (index, value) => {
    const newAnswers = [...answers];
    if (index === 5 || index === 6) {
      newAnswers[index] = [value];
    } else {
      if (newAnswers[index].includes(value)) {
        newAnswers[index] = newAnswers[index].filter((item) => item !== value);
      } else if (newAnswers[index].length < 8) {
        newAnswers[index].push(value);
      }
    }
    setAnswers(newAnswers);
  };

  const handleTextareaChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = [value];
    setAnswers(newAnswers);
  };

  const handleNext = async () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle submission
      const user = auth.currentUser;
      if (user) {
        try {
          let imageUrl = '';
          if (basicInfo.image) {
            const imageRef = ref(storage, `profileImages/${user.uid}`);
            await uploadBytes(imageRef, basicInfo.image);
            imageUrl = await getDownloadURL(imageRef);
          }
          
          const flattenedAnswers = [];
          for (const answer of answers) {
            flattenedAnswers.push(...answer);
          }
          await setDoc(doc(db, 'users', user.uid), {
            basicInfo: {
              ...basicInfo,
              image: imageUrl,
            },
            answers: flattenedAnswers,
          });

          toast.success("Thank you for successfully onboarding!");
          navigate('/user-dashboard');
        } catch (error) {
          console.error("Error saving user data: ", error);
          toast.error("Error saving user data!");
        }
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setBasicInfo({ ...basicInfo, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-white-400">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {currentStep === 0 ? (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={basicInfo.name}
              onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })}
              className="w-full p-2 border rounded-lg"
            />
            <select
              name="gender"
              className="w-full p-2 mb-4 border rounded-lg"
              value={basicInfo.gender}
              onChange={(e) => setBasicInfo({ ...basicInfo, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input
              type="number"
              placeholder="Age"
              value={basicInfo.age}
              onChange={(e) => setBasicInfo({ ...basicInfo, age: e.target.value })}
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-lg"
            />
            {imagePreview && <img src={imagePreview} alt="Profile Preview" className="w-32 h-32 rounded-full mx-auto mt-4" />}
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <button
                className={`text-xl ${currentStep === 0 ? 'invisible' : ''}`}
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                &larr;
              </button>
              <span>{currentStep + 1} — {questions.length}</span>
            </div>
            <h2 className="text-2xl font-semibold mb-4">{questions[currentStep]}</h2>
            <div className="flex flex-wrap gap-2">
              {currentStep === 7 ? (
                <textarea
                  className="w-full p-2 border rounded-lg"
                  placeholder={options[currentStep][0]}
                  value={answers[currentStep][0] || ''}
                  maxLength={450}
                  onChange={(e) => handleTextareaChange(currentStep, e.target.value)}
                />
              ) : (
                options[currentStep].map((option, index) => (
                  currentStep === 5 || currentStep === 6 ? (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={currentStep === 5 ? "cleanliness" : "music"}
                        value={option}
                        checked={answers[currentStep][0] === option}
                        onChange={() => handleOptionChange(currentStep, option)}
                      />
                      <span>{option}</span>
                    </label>
                  ) : (
                    <button
                      key={index}
                      onClick={() => handleOptionChange(currentStep, option)}
                      className={`p-2 rounded-full border-2 ${answers[currentStep].includes(option) ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300'}`}
                    >
                      {option}
                    </button>
                  )
                ))
              )}
            </div>
          </>
        )}
        <button
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={handleNext}
        >
          {currentStep === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Onboarding;
