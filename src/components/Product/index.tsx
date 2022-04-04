import { ProductStyle } from './style';

interface ProductProps{
    product: {
        id:number,
        name:string,
        thumb:string,
        price:string;
    }
}


export function Product(props:ProductProps){

    return (
        <ProductStyle>
            <img src={props.product.thumb} alt={props.product.name}/>
            <div>
            <h2>{props.product.name}</h2>
            <p>R$ {props.product.price}</p>
            </div>
        </ProductStyle>
    )
}