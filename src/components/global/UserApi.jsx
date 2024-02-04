import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../redux/actions/AbonneAction'

export default function UserApi(token) {
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, SetIsAdmin] = useState(0)
  const dispatch = useDispatch()
//   const [callback, setCallback] = useState(false)
const [abonnes, setAbonnes] = useState([])

// const {cart} = useSelector(state => state)

const [cart, setCart] = useState([])
  const [uid, setUid] = useState()
  const [userLikes, setUserLikes] = useState([])
//   const [history, setHistory] = useState([])
  const [user, setUser] = useState({})
//   const [command, setCommand] = useState([])


  useEffect(()=>{
    if(token){
       const getUser = async ()=>{
         try {
           const res = await axios.get(`/user/infor`,{
             headers: {Authorization: token}
           })

          res.data.role === 0 && SetIsAdmin(0)   
          res.data.role === 1 && SetIsAdmin(1) 
          res.data.role === 2 && SetIsAdmin(2) 
          res.data.role === 3 && SetIsAdmin(3) 
          setIsLogged(true)     
        setUid(res?.data?._id)
        setUser(res?.data)
        setCart(res?.data?.cart)
        console.log(res?.data?._id);
        console.log("role: ",res.data.role);
        // localStorage.setItem('id', res?.data?._id)
        // localStorage.setItem('user', JSON.stringify(res?.data?.cart))
         


          // res.data.role === 2 ? SetIsAdmin(2) : SetIsAdmin(3)

        
          // setCart(res.data.cart)
      
          // setUserLikes(res.data.likes)
          // setUser(res.data)   
          } catch (err) {
            alert(err.response.data.msg)
          }
        }
        getUser()
      } 
    },[token])

    const addCart = async (product) =>{
      if(!isLogged) return alert("Veuillez vous connectez ou enregistez vous pour acheter")
  
        setCart([...cart, {...product}])
        await axios.patch(`${process.env.REACT_APP_API_URL}user/addCart/`,{cart: [...cart, {...product}]},{
          headers: {Authorization: token}
        })
    }


    // useEffect(()=>{
    //   if(token){
    //     const getHistory = async()=>{
    //       if(isAdmin){
    //         const res = await axios.get('/api/payment', {
    //           headers: {Authorization: token}
    //         })
    //         setHistory(res.data);
    //       }else{
    //         const res = await axios.get('/user/history', {
    //           headers: {Authorization: token}
    //         })
    //         setHistory(res.data);
    //       }
       
    //     }
    //     getHistory()
    //   }
    // },[token, isAdmin, callback])

    // useEffect(()=>{
    //   if(token){
    //     const getCommand = async()=>{
    //       if(isAdmin){
    //         const res = await axios.get('/api/command', {
    //           headers: {Authorization: token}
    //         })
    //         setCommand(res.data);
    //       }else{
    //         const res = await axios.get('/user/listes', {
    //           headers: {Authorization: token}
    //         })
    //         setCommand(res.data);
    //       }
       
    //     }
    //     getCommand()
    //   }
    // },[token, isAdmin, callback])


    


  return {
    uid: uid,
    isAdmin: isAdmin,
    abonnes: [abonnes, setAbonnes],
    cart: cart,
    user: user,
    isLogged: isLogged,
    // callback: [callback, setCallback],
    // command: [command, setCommand],
    // history: [history, setHistory],
    // userLikes: [userLikes, setUserLikes],
    addCart: addCart
  }
}














// const addAbonne = async (ramassage) =>{
//   if(!isLogged) return alert("Veuillez vous connectez ou enregistez vous pour acheter")
 
//   try {
//     const abonne = await axios.get('user/infor',{
//       headers: {Authorization: token}
//     })

//     // setUid(abonne?.data?._id)
  
//     console.log("user: ", abonne?.data?._id);

//     console.log('pme: ', ramassage?.abonnes);

// const check = ramassage?.abonnes?.every(data => {
//   return data?._id !== abonne?.data?._id 
// })

// console.log(check);

// if(check === true){
// setAbonnes([...abonnes,{...abonne?.data}])
// await axios.patch(`/user/abonne/${ramassage._id}`,{abonnes: [...abonnes,{...abonne?.data}]},{
// headers: {Authorization: token}
// })
// }else{
// alert("ce produit a été ajouté au panier")
// }

//   } catch (error) {
    
//   }

// }

