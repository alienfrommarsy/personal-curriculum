import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StreakState {
    currentStreak: number;
    bestStreak: number;
    lastActivityDate: string;
}

const initialState: StreakState = {
    currentStreak: 0,
    bestStreak: 0,
    lastActivityDate: '',
};

const streakSlice = createSlice({
    name: 'streak',
    initialState,
    reducers: {
        increaseStreak(state) {
            state.currentStreak += 1;
            if (state.currentStreak > state.bestStreak) {
                state.bestStreak = state.currentStreak;
            }
            state.lastActivityDate = new Date().toISOString();
        },
        resetStreak(state) {
            state.currentStreak = 0;
        },
        setLastActivityDate(state, action: PayloadAction<string>) {
            state.lastActivityDate = action.payload;
        },
    },
});

export const { increaseStreak, resetStreak, setLastActivityDate } = streakSlice.actions;
export default streakSlice.reducer;
