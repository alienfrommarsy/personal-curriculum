import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DailyGoal {
    id: string;
    definition: string;
    progress: number;
    isCompleted: boolean;
}

interface DailyGoalsState {
    goals: DailyGoal[];
}

const initialState: DailyGoalsState = {
    goals: [],
};

const dailyGoalSlice = createSlice({
    name: 'dailyGoals',
    initialState,
    reducers: {
        addGoal: (state, action: PayloadAction<DailyGoal>) => {
            state.goals.push(action.payload);
        },
        updateProgress: (state, action: PayloadAction<{ id: string; progress: number }>) => {
            const goal = state.goals.find(g => g.id === action.payload.id);
            if (goal) {
                goal.progress = action.payload.progress;
            }
        },
        completeGoal: (state, action: PayloadAction<string>) => {
            const goal = state.goals.find(g => g.id === action.payload);
            if (goal) {
                goal.isCompleted = true;
            }
        },
    },
});

export const { addGoal, updateProgress, completeGoal } = dailyGoalSlice.actions;
export default dailyGoalSlice.reducer;
