const axios = require('axios').default;

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const NOT_FOUND = 'NOT_FOUND'
export const GET_DETAILS = 'GET_DETAILS'
export const GET_USER = 'GET_USER'

const url = 'https://hit-pasta.herokuapp.com'


export function getProduct (){   
       return async function (dispatch){
          try {                            
               const res = await axios.get(url); 
               console.log('ree', res)
               if(res.data.status === 404){
                 dispatch({ type: NOT_FOUND, payload: true });
               } else {
                 dispatch({ type: GET_PRODUCTS, payload: res.data });
               }
           } catch (err) {
                dispatch({ type: NOT_FOUND, payload: true });
           }
               
       } 
    
    
 }

 export function getDetail(id){
    return async function (dispatch){ 
       const data = await fetch(`${url}/detail/${id}`)
       const info = await data.json()
       return dispatch({ type: GET_DETAILS, payload: info })
    }        
 }

 export function postUser (payload){
  return async function (dispatch){
         try {                          
              const res = await axios.post(`${url}/user`, payload);
              return res
          } catch (err) {
              return console.error('algo paso',err);
          }
              
      } 
   
   
} 

 

 export function getUser  (){
 return async function (dispatch){
    try {                       
        const res =  await  axios.get(`${url}/getUser`);
        console.log('getUser', res)
        return dispatch({ type: GET_USER, payload: res })
    } catch (err) {
        return console.error(err);
    }
 }
    
 } 

//  export function  getActs(){
//     return async function(dispatch){
//        try {                            //https://countriesa-d.herokuapp.com/activities
//            const res = await axios.get("https://countriesa-d.herokuapp.com/activities")
//            return dispatch({ type: GET_ACTS, payload: res.data })
//        } catch (error) {
//            console.log(error)
//        }
//     }
// }





//  export function filterByContinent(value){
//      return{
//          type:FILTER_CONTINENT,
//          payload: value
//      }
//  }
 
//  export function filterByPopulation(value){
//      return{
//        type: FILTER_POPULATION,
//        payload: value
//      }
//  }

//  export function filterAz(value){
//      return{
//          type: FILTERAZ,
//          payload: value
//      }
       
//  }

//  export function filterActivity(value){
//     return{
//         type: FILTER_ACT,
//         payload: value
//     }

// }



