import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    data:[
            {color1:'#FF2D00',color2:'#3DFF00',color3:'#0017FF'},
                {color1:'#FF4800',color2:'#4DAE13',color3:'#5A6CD1'},
                    {color1:'#DB4D15',color2:'#2C610C',color3:'#04115A'} 
        ]
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