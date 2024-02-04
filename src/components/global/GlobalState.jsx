import {createContext, useEffect, useState} from 'react';
import axios from 'axios'
import UserApi from './UserApi';
// import CategoriesApi from '../api/CategoryApi';

export const GlobalState = createContext()

const GlobalStateProvider = ({children}) =>{ 

  const [token, setToken] = useState()
  const [uid, setUid] = useState()


  useEffect(()=>{
    const fristLogin = localStorage.getItem('fristLogin')
    const refreshToken = async() =>{
      if(fristLogin){
        const res = await axios.get(`/user/refresh_token`)
        console.log(res);

        setToken(res.data.accessToken)

        setTimeout(()=>{
          refreshToken()
        },10 * 60 * 1000)
  
      }                                                                                                                                           
    }                                                                               
    refreshToken()
  },[])

  // useEffect(async()=>{
  //    const re = await axios.get('/user/infor',{
  //               headers: {Authorization: token}
  //             })

  //         console.log();
        
  // },[uid])



  const state = {
    // uid: uid,
    token: token,
    userApi: UserApi(token),
  }
  return(
    <GlobalState.Provider value={state}>
      {children}
  </GlobalState.Provider>
  ) 
}

export default GlobalStateProvider
