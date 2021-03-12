import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import { Credentials } from '../pages/Login'
import { selectAuth, signInAsync, signOut } from '../store/authSlice'

export default function useAuth(){
  const auth = useSelector(selectAuth)
  const dispath = useDispatch()
  const history = useHistory()

  function login(credentials: Credentials){
    dispath(signInAsync(credentials))
  }

  function logout(){
    dispath(signOut())
    history.push('/login')
  }

  return {auth, login, logout}
}

