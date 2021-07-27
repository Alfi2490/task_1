import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    data:[
            {color1:'#FF2D00',color2:'#3DFF00',color3:'#0017FF'},
                {color1:'#FF4800',color2:'#4DAE13',color3:'#5A6CD1'},
                    {color1:'#DB4D15',color2:'#2C610C',color3:'#04115A'} 
        ],
    dragSquare:{},
    dropSquare:{}
};

const slice = createSlice({
    name:'app',
    initialState:initState,
    reducers:{
        setDragSquare:(state,{payload}) => {
            state.dragSquare = payload
        },
        setDropSquare:(state,{payload}) => {
            state.dropSquare = payload
        },
        switchColor:(state,{payload}) => {

        },
    }
});

export default slice.reducer;

export const {
   switchColor,
   setDragSquare,
   setDropSquare
} = slice.actions;

export const appSelector = state => state.app