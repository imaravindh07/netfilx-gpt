import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVedio:null,
        popularMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVedio:(state,action)=>{
            state.trailerVedio=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVedio,addPopularMovies}=movieSlice.actions;
export default movieSlice.reducer;