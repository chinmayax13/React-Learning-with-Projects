import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState:{
    currentlyFetch : false,
    fetchDone: false,
  },
  reducers:{
    markFetchDone : (state)=>{

      state.fetchDone = true;
    },
     markFetchingStarted : (state)=>{

       state.currentlyFetch = true;
    },
     markFetchingFinished : (state)=>{
        state.currentlyFetch = false;
    },
    
  }
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
