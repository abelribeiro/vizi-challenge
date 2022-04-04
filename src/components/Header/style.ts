import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
    padding:1rem 0;

    img{
        width:6.5rem;
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

`

export const InnerContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding:1rem 2rem;
    display:flex;
    justify-content:space-between;

`