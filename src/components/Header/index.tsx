 import logo from '../../images/vizi-logotipo.png';
 import { Container, InnerContent } from './style'
 
 export function Header(){
     return (
         <Container>
             <InnerContent>
                <img src={logo} alt="Vizi"/>
             </InnerContent>
             
         </Container>
     )
 }