import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    level: number;
    experiencePoints: number;
    preferences: {
        [key: string]: any;
    };
}

const initialState: UserState = {
    level: 1,
    experiencePoints: 0,
    preferences: {},
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLevel: (state, action: PayloadAction<number>) => {
            state.level = action.payload;
        },
        addExperiencePoints: (state, action: PayloadAction<number>) => {
            state.experiencePoints += action.payload;
        },
        setPreferences: (state, action: PayloadAction<{ [key: string]: any }>) => {
            state.preferences = {...state.preferences, ...action.payload};
        },
    },
});

export const { setLevel, addExperiencePoints, setPreferences } = userSlice.actions;
export default userSlice.reducer;
