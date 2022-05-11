import styled from 'styled-components';



export const Img = styled.img`
    

@media screen and (max-width: 600px){
  width: 120px;
  height: 100px;
  border-radius: 5px;
} 
`; 

export const Container = styled.div`
@media screen and (max-width: 600px){
 display: flex;
 flex-direction: row;
 border: 1px solid black;
 padding: 10px 2rem 10px 2rem;
 border-radius: 5px;
 align-items: center;
 
}
`;

export const ContainerProduct = styled.div`
@media screen and (max-width: 600px){
 display: flex;
 flex-direction: column;
 margin-left: 1rem;

}
`;