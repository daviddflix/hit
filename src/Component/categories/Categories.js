import { useCallback, useState } from "react";
import Drinks from "./bebidas";
import Dessert from "./dessert";
import Pastas from "./pastas";
import { BtnGeneral, Li, Menu, Ul } from "./styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";


export default function Categories () {

    const {isAuthenticated , loginWithRedirect,  } = useAuth0();

    const history = useHistory()

    const verCarrito = () => {
      
        if(isAuthenticated){
            history.push('/carrito')
        } else{
          loginWithRedirect()
        }
       
      }
     


    const [product, setProduct] = useState('pastas')
    
     const color = product === 'pastas'? '#ffd803' : product === 'postres'? '#d9376e' : '#ff595a' 

     const handleProducts = (e) => {
        
         setProduct(e.target.id)
     }

    return(
        <div style={{marginBottom: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
       <Menu style={{background: color}}>
        <Ul>
          <Li type='button' id='pastas' value='Pastas' placeholder="Pastas"  onClick={handleProducts}/>
          <Li  type='button'  id='postres' value='Postres' placeholder="Postres"  onClick={handleProducts}/>
          <Li type='button' id='bebidas' value='Bebidas' placeholder="Bebidas"  onClick={handleProducts}/>
        </Ul>        
      </Menu>
        {
            product === 'pastas' && <Pastas/>
        }
        {
            product === 'postres' && <Dessert/>
        }
        {
            product === 'bebidas' && <Drinks/>
        }
        <BtnGeneral onClick={verCarrito} style={{background: color}}>VER CARRITO</BtnGeneral>
        </div>
    )
}