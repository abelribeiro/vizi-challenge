import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import styled from 'styled-components'

const ProductsList = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 4rem 1rem;

    header{
      margin-bottom:2rem;
      h1{
        text-transform: uppercase;
      }
      p{
        font-size: 1.4rem;
      }
    }

    ul{
      background:var(--fridge-bg);
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      li{
        display:flex;
        align-items: center;
        padding:1rem 0.5rem 0;
        border-bottom:1rem solid var(--white);
        img{
          width:50%;
        }
        button{
          background:var(--green);
          border-radius:2rem;
          color:var(--blue);
          border:none;
          padding:0.5rem 1rem;
          margin:1rem 0;
          transition: all linear 0.2s;

          :hover{
            filter: brightness(110%);
          }
        }
        div{
          margin-bottom: 1.4rem;
          
          h2{
            font-size:1.4rem;
            font-weight: 100;
            margin-bottom: 1rem;
          }
          p{
            font-size:1.4rem;
            font-weight: 900;
          }
        }
      }
    }
    
`

interface products{
  name:string,
  price:string,
  thumb:string,
}


function App() {
  const [products, setProducts] = useState<products[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
        <Header/>
        <ProductsList>
            <header>
              <h1>Condomínio Jardim América II</h1>
              <p>Condomínio JD. América, Bloco B 02</p>
            </header>
            <ul>
              {products.map(product => {
                  return (
                      <li>
                          <img src={product.thumb} alt={product.name}/>
                          <div>
                            <h2>{product.name}</h2>
                            <p>R$ {product.price}</p>
                            <button>Selecionar</button>
                          </div>
                      </li>
                  )
              })} 
            </ul>       
        </ProductsList>
        <GlobalStyle />
        </>
        
    )
}

export default App
