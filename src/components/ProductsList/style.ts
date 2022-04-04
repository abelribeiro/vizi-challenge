import styled from 'styled-components';

export const ProductsListStyle = styled.div`

max-width: 1120px;
    margin: 0 auto;
    padding: 4rem 1rem;

    header{
      margin-bottom:2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1{
        text-transform: uppercase;
      }
      p{
        font-size: 1.4rem;
      }
      button{
        background:var(--green);
        border-radius:2rem;
        color:var(--blue);
        border:none;
        padding:1rem 2rem;
        margin:1rem 0;
        transition: all linear 0.2s;
        font-size:1.4rem;

            :hover{
            filter: brightness(110%);
            }
        }
    }

    ul{
      background:var(--fridge-bg);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

`