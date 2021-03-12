import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Credentials } from '../pages/Login';
import { AppThunk, RootState } from './index';
import { toast } from "react-toastify";

interface AuthState {
  loggedIn: boolean
  isLoading: boolean
  token: string
  email: string
}

const initialState: AuthState = {
  email: '',
  isLoading: false,
  loggedIn: false,
  token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInRequest: state => {
      state.isLoading = true
    },
    signInSuccess: (state, action: PayloadAction<Credentials>) => {
      state.email = action.payload.email
      state.isLoading = false
      state.loggedIn = true
      state.token = 'Bearer asdf1234526898s4ad5as654dfas'
    },
    signOut: state => {
      state.email = ''
      state.loggedIn = false
      state.token = ''
    },
  },
})

export const { signInRequest, signInSuccess, signOut } = authSlice.actions

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const signInAsync = (credentials: Credentials): AppThunk => async dispatch => {
  dispatch(signInRequest())
  await sleep(2000)
  dispatch(signInSuccess(credentials))
  toast.success('Bem Vindo!')
};

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
