import styled from 'styled-components';

export const MenuWrapp = styled.div`

  display: grid;
  grid-template-columns : 180px auto 180px 40px ;
  grid-template-rows: 40px 100px 300px auto;
  grid-row-gap: 18px;  
  grid-column-gap: 8px;
  grid-template-areas: 
    'link top top cross'
    'log log log log ' 
    'nav nav nav nav '
    'bot bot bot bot' ;

  position: fixed;
  top: 0;
  left: -100%;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: var(--fone-color);
  transition: left 1s;
  padding: 25px;

  &.active {
    left: 0;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }

  &>.AuthNav{
    grid-area: log;
}
&>.NavWrap{
    grid-area: nav;
}
  &>.logo{
    grid-area: link;
}


&>.AuthNav,
&>.UserNav{
        display: flex;
        /* display: flex;
        flex-direction: column;
        gap: 12px;
        justify-self: center;
        align-items: center;
       */
    }

    &>.NavWrap{
        display: grid;
        gap: 20px;
        place-items: center;
   
        &>a{
            font-size: 32px;
            font-weight: 500;
            @media screen and (min-width: 768px) {
                font-size: 48px;
            }

            &:hover{
                color: var(--yellow);
                font-weight: 700px;
            }
        }
    }


`
export const MenuHeader = styled.div`


    @media screen and (min-width: 768px) {
     
    }

`

export const MenuContent = styled.div`







    @media screen and (min-width: 768px) {
        grid-template-rows: 300px 100px ;

    &>.AuthNav,
    &>.UserNav{
  
    }
    
  } 



`

export const CloseButton = styled.button`
 grid-area: cross;
  background-color: transparent;
  border: none;
  cursor: pointer;
  

  &>svg{
    color:#222;
    scale: 2;

    &:hover {
        color: var(--yellow);
    }

  }

`

