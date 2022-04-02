import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
       --background:#F9F0E8;
       --blue: #0912C9;
       --green:#00ed8c;
    }
    
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
   html{
        @media (max-width: 1080px){
            font-size:93.75%; //15px
        }

        @media (max-width: 768px){
            font-size: 87.5%; //14px
        }
    }
   
   body{
       background:var(--background);
       -webkit-font-smoothing: antialiased;
   }

   body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight:400;
   }
   h1, h2, h3, h4, h6, h6, strong{
        font-weight: 600;
   }

   button{
       cursor: pointer;
   }

   [disable]{
        opacity: 0.6;
        cursor: not-allowed;
   }




`
    
    