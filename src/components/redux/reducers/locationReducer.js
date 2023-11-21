import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userLocation: 'NG',
  isLoading: true,
}

const token = '39e93a01118816';
const apiUrl = `https://ipinfo.io/102.91.5.235?token=${token}`

export const getLocation = createAsyncThunk('userLocation/getLocation', async () =>{
    try{
      const res = await axios(apiUrl);
      return res.data.country;
    }catch(error){
        console.log(error);
    }
  })

  const locationSlice = createSlice({
    name: "userLocation",
    initialState,
    
    reducers: {
          setLocation: (state, action) => {
          state.userLocation = action.payload;
          console.log(action);
        }
      },
      extraReducers:{
        [getLocation.pending]:(state)=>{
          state.isLoading = true
        },
        [getLocation.fulfilled]:(state, action)=>{
          state.isLoading = false
          state.userLocation = action.payload
        },
        [getLocation.rejected]:(state, action)=>{
          state.isLoading = false
        }
      }
    }
  )

  export const { setLocation } = locationSlice.actions;
  export default locationSlice.reducer