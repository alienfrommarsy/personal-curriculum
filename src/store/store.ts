import { configureStore } from '@reduxjs/toolkit';
import userProgressReducer from './slices/userProgressSlice';
import learningStreakReducer from './slices/learningStreakSlice';
import dailyGoalsReducer from './slices/dailyGoalsSlice';
import skillTreeReducer from './slices/skillTreeSlice';

const store = configureStore({
  reducer: {
    userProgress: userProgressReducer,
    learningStreak: learningStreakReducer,
    dailyGoals: dailyGoalsReducer,
    skillTree: skillTreeReducer,
  },
});

export default store;