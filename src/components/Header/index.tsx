import Modal from 'react-modal';
import logo from '../../images/vizi-logotipo.png';
import { Container, InnerContent } from './style'



export function Header() {
    const handleTransaction = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:3333/transactions', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <Container>
            <InnerContent>
               <img src={logo} alt="Vizi"/>
               <button onClick={handleTransaction}>Destrancar Geladeira</button>
            </InnerContent> 
        </Container>
    )
}