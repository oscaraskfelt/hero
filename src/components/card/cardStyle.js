import styled from 'styled-components'

export const Card = styled.div`
position: relative;
display: inline-block;
margin-right: 2px;
margin-bottom: 1em;
border-radius: 5%;
width: 30%;
min-width: 200px;
max-width: 300px;
height: 200px;
cursor: pointer;
`

export const CardFront = styled.div`
background: ${props => props.theme.colors.blue};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;    
height: 100%;
border-radius: 5%;
transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
transition-duration: .5s;
transition-property: transform, opacity;
transform: ${props => props.active ? 'rotateX(180deg)' : 'rotateX(0deg)'};
opacity: ${props => props.active ? '0' : '1'};

background-size: cover !important;
background-position: center !important;


h1 {
    margin: 0; 
    padding: 0;
}
`

export const CardBack = styled.div`
background: ${props => props.theme.colors.green};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
transition-duration: .5s;
transition-property: transform, opacity, border-radius;
position: absolute;
opacity: 0;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
background-size: cover !important;
background-position: center !important;
border-radius: ${props => props.matched ? '20%' : '5%'};
transform: ${props => props.active ? 'rotateX(0deg)' : 'rotateX(-180deg)'};
opacity: ${props => props.active ? props.matched ? '0.7' : '1' : '0'};
animation: ${props => props.matched ? 'jump .4s linear alternate 1' : 'none'};


@keyframes jump {
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  40%  {transform: translate3d(0,0%,0) scale3d(.93,.93,.93);}
  100% {transform: translate3d(0,0%,0) scale3d(1,1,1);}
}
`