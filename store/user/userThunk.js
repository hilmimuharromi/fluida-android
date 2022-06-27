import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://103.174.114.51:4000';

export const Login = createAsyncThunk('user/login', async (payload,  {rejectWithValue}) => {
  console.log("payload ====>", payload)
  try {
    const {data}=  await axios({
      method: "POST",
      baseURL: baseUrl,
      url: '/login',
      data: payload
    })
    return data.data
  } catch(err) {
    return rejectWithValue({
      code: 400,
      message: "gagal login",
    })
  }
});

export const Register= createAsyncThunk('user/register', async (payload,  {rejectWithValue}) => {
  console.log("payload ====>", payload)
  try {
    const {data}=  await axios({
      method: "POST",
      baseURL: baseUrl,
      url: '/register',
      data: payload
    })
    return data.data
  } catch(err) {
    return rejectWithValue({
      code: 400,
      message: "gagal register",
    })
  }
});
