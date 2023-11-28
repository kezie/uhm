import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postItems: [],
  isLoading: true,
}

const url = process.env.REACT_APP_WORDPRESS_POST_URL;

export const getPosts = createAsyncThunk('posts/getPosts', async () =>{
  try{
    const res = await axios(url);
    return res.data;
  }catch(error){

  }
})

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
      
    },
    extraReducers:{
      [getPosts.pending]:(state)=>{
        state.isLoading = true
      },
      [getPosts.fulfilled]:(state, action)=>{
        state.isLoading = false
        state.postItems = action.payload
      },
      [getPosts.rejected]:(state, action)=>{
        state.isLoading = false
      }
    }
  }
)

export default postSlice.reducer