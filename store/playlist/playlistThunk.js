import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://103.174.114.51:4000';

export const GetPlaylist = createAsyncThunk('playlist/getall', async (payload, {rejectWithValue}) => {
  try {
    const {data}=  await axios({
      method: "GET",
      baseURL: baseUrl,
      url: '/playlist',
    })
    return data.data
  } catch(err) {
    return rejectWithValue({
      code: 400,
      message: "gagal get playlist",
    })
  }
});
