import { useState, useEffect } from 'react'
import { GlobalStyle } from './styles/global'

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
        <section className="repository-list">
            <h1>Lista de Produtos</h1>
            <ul>
                {products.map(product => {
                    return (
                        <li>
                            <img src={product.thumb} alt={product.name}/>
                            <h1>{product.name}</h1>
                            <h2>{product.price}</h2>
                        </li>
                    )
                })}        
            </ul>
        </section>
        <GlobalStyle />
        </>
        
    )
}

export default App
