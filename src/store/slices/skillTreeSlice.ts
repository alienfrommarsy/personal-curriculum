import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SkillNode {
    id: string;
    name: string;
    unlocked: boolean;
    progress: number;
}

interface Connection {
    from: string;
    to: string;
}

interface SkillTreeState {
    nodes: SkillNode[];
    connections: Connection[];
}

const initialState: SkillTreeState = {
    nodes: [],
    connections: [],
};

const skillTreeSlice = createSlice({
    name: 'skillTree',
    initialState,
    reducers: {
        addNode(state, action: PayloadAction<SkillNode>) {
            state.nodes.push(action.payload);
        },
        unlockNode(state, action: PayloadAction<string>) {
            const node = state.nodes.find(n => n.id === action.payload);
            if (node) {
                node.unlocked = true;
            }
        },
        updateProgress(state, action: PayloadAction<{ id: string; progress: number }>) {
            const node = state.nodes.find(n => n.id === action.payload.id);
            if (node) {
                node.progress = action.payload.progress;
            }
        },
        addConnection(state, action: PayloadAction<Connection>) {
            state.connections.push(action.payload);
        },
    },
});

export const { addNode, unlockNode, updateProgress, addConnection } = skillTreeSlice.actions;
export default skillTreeSlice.reducer;