import { createSlice } from '@reduxjs/toolkit';

const monthArr = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let d = new Date();


export const calandarDataSlice = createSlice({
    name: 'calandarData',
    initialState: {
        date: d.getDate(),
        day: d.getDay(),
        month: d.getMonth(),
        year: d.getFullYear(),
    },
    reducers: {
        nextWeek: (state) => {
            state.day += 7
        },
        startingDate: (state) => {
            new Date(state.year, state.month, 1)
        },
        
    },
});

export const { nextWeek, startingDate } = calandarDataSlice.actions;

export default calandarDataSlice.reducer;