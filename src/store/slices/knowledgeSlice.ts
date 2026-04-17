import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface KnowledgeItem {
    id: string;
    title: string;
    resources: string[];
    categories: string[];
    tags: string[];
    links: string[];
}

interface KnowledgeState {
    knowledgeItems: KnowledgeItem[];
}

const initialState: KnowledgeState = {
    knowledgeItems: [],
};

const knowledgeSlice = createSlice({
    name: 'knowledge',
    initialState,
    reducers: {
        addKnowledgeItem(state, action: PayloadAction<KnowledgeItem>) {
            state.knowledgeItems.push(action.payload);
        },
        removeKnowledgeItem(state, action: PayloadAction<string>) {
            state.knowledgeItems = state.knowledgeItems.filter(item => item.id !== action.payload);
        },
        updateKnowledgeItem(state, action: PayloadAction<KnowledgeItem>) {
            const index = state.knowledgeItems.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.knowledgeItems[index] = action.payload;
            }
        },
    },
});

export const { addKnowledgeItem, removeKnowledgeItem, updateKnowledgeItem } = knowledgeSlice.actions;
export default knowledgeSlice.reducer;