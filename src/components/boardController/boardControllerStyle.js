import styled from 'styled-components'

export const BoardController = styled.div`
${'' /* background: ${props => props.theme.colors.green}; */}
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 5em; 
`

export const StatDiv = styled.div`
font-size: 1.2em;
font-weight: 600;
`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 20em;
`

export const Button = styled.button`
font-size: 1.2em;
font-weight: 600;
width: 4em;
height: 3em;
color: ${props => props.theme.colors.onyx};
background: ${props => props.theme.colors.white};
border-radius: 20%;
border: 2px solid ${props => props.theme.colors.onyx}; 
box-shadow: 2px 2px #2a2a2a;
`