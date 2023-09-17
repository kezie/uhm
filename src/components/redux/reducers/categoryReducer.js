import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categoryItems: [],
  isLoading: true,
}

const url = 'https://ultimatehealthhmo.com/wp-json/wp/v2/categories'

export const getCategories = createAsyncThunk('categories/getCategories', async () =>{
  try{
    const res = await axios(url);
    return res.data;
  }catch(error){

  }
})

const categoryslice = createSlice({
  name: "categories",
  initialState,
  reducers: {
      
    },
    extraReducers:{
      [getCategories.pending]:(state)=>{
        state.isLoading = true
      },
      [getCategories.fulfilled]:(state, action)=>{
        state.isLoading = false
        state.categoryItems = action.payload
      },
      [getCategories.rejected]:(state, action)=>{
        state.isLoading = false
      }
    }
  }
)

export default categoryslice.reducer