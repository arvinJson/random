import React, { useState } from 'react';

export default function ValentineProposal() {
  const [stage, setStage] = useState('question');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleFirstAnswer = () => {
    setStage('activities');
  };

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
  };

  if (stage === 'question') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 flex flex-col items-center justify-between p-8">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-red-400 to-pink-400 rounded-3xl shadow-2xl flex items-center justify-center">
            <img src="./GoldenRetrieverValentine.png" alt="Valentine" className="w-64 h-64 rounded-3xl shadow-2xl object-cover" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 text-center px-4">
            🍒 Would you like to be my valentine? 🍒
          </h1>
        </div>
        
        <div className="w-full max-w-4xl grid grid-cols-2 gap-4 pb-8">
          <button
            onClick={handleFirstAnswer}
            className="bg-red-500 hover:bg-red-600 text-white text-2xl font-bold py-20 rounded-2xl shadow-lg transform transition hover:scale-105"
          >
            A. Yes
          </button>
          <button
            onClick={handleFirstAnswer}
            className="bg-red-500 hover:bg-red-600 text-white text-2xl font-bold py-20 rounded-2xl shadow-lg transform transition hover:scale-105"
          >
            B. A
          </button>
          <button
            onClick={handleFirstAnswer}
            className="bg-red-500 hover:bg-red-600 text-white text-2xl font-bold py-20 rounded-2xl shadow-lg transform transition hover:scale-105"
          >
            C. B
          </button>
          <button
            onClick={handleFirstAnswer}
            className="bg-red-500 hover:bg-red-600 text-white text-2xl font-bold py-20 rounded-2xl shadow-lg transform transition hover:scale-105"
          >
            D. C
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 flex flex-col items-center justify-between p-8">
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center px-4">
          What should we do for our date?
        </h2>
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-2 gap-4 pb-8">
        <button
          onClick={() => handleActivitySelect('two')}
          className={`${
            selectedActivity === 'two' ? 'bg-pink-600' : 'bg-red-500 hover:bg-red-600'
          } text-white text-xl font-bold py-20 rounded-2xl shadow-lg transform transition hover:scale-105`}
        >
          A. It takes two
        </button>
        <button
          onClick={() => handleActivitySelect('yoga')}
          className={`${
            selectedActivity === 'yoga' ? 'bg-pink-600' : 'bg-red-500 hover:bg-red-600'
          } text-white text-xl font-bold py-20 rounded-2xl shadow-lg transform transition hover:scale-105`}
        >
          B. Puppy Yoga
        </button>
        <button
          onClick={() => handleActivitySelect('pizza')}
          className={`${
            selectedActivity === 'pizza' ? 'bg-pink-600' : 'bg-red-500 hover:bg-red-600'
          } text-white text-xl font-bold py-20 rounded-2xl shadow-lg transform transition hover:scale-105`}
        >
          C. Making heart-shaped pizzas
        </button>
        <button
          onClick={() => handleActivitySelect('surprise')}
          className={`${
            selectedActivity === 'surprise' ? 'bg-pink-600' : 'bg-red-500 hover:bg-red-600'
          } text-white text-xl font-bold py-20 rounded-2xl shadow-lg transform transition hover:scale-105`}
        >
          <span className="text-4xl">D. 😏</span>
        </button>
      </div>
    </div>
  );
}