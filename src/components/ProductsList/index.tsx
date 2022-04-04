import { useState, useEffect } from 'react'
import { ProductsListStyle } from './style'
import { Product } from '../Product'
import { NewTransactionModal } from '../NewTransactionModal'



interface products{
    id:number,
    name:string,
    price:string,
    thumb:string,
  }


 


export function ProductsList(){
    const [products, setProducts] = useState<products[]>([])

    

    useEffect(() => {
        fetch('http://localhost:3333/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    

    return(
        <ProductsListStyle>
            <header>
                <div>
                    <h1>Condomínio Jardim América II</h1>
                    <p>Condomínio JD. América, Bloco B 02</p>
                </div>
              
              
            </header>
            <ul>
              {products.map(product => {
                  return <Product key={product.id} product={product} />
                  
              })} 
            </ul> 
            
        </ProductsListStyle>
        
    )
}