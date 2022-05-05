import styled from 'styled-components';
import {AiFillCloseCircle} from 'react-icons/ai';

export const Item = styled.div`
  

    @media screen and (max-width: 600px){
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      right: 1rem; 
      height: 100vh;
      overflow-y: auto;
     
   } 
`; 


export const Button = styled.button`
    

    @media screen and (max-width: 600px){
     padding: 10px;
     color: #fff;
     background-color: #e63946;
     border: none;
    
   } 
`; 


export const ButtonClose = styled(AiFillCloseCircle)`
    

    @media screen and (max-width: 600px){
     position: absolute;
     top: 10px;
     right: 5px;
     color: #e63946;
     height: 20px;
     width: 20px


    
   } 
`; 