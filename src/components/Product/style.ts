import styled from 'styled-components';

export const ProductStyle = styled.li`
    display:flex;
    align-items: center;
    padding:1rem 0.5rem 0;
    border-bottom:1rem solid var(--white);
    img{
        width:50%;
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
`