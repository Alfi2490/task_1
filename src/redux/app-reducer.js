import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    
};

const slice = createSlice({
    name:'app',
    initialState:initState,
    reducers:{
        
    }
});

export default slice.reducer;

export const {
   
} = slice.actions;

export const appSelector = state => state.app