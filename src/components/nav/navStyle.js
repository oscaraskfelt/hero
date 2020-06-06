import styled from 'styled-components'

export const Nav = styled.nav`
height: 6em;
background: ${props => props.theme.colors.blue};
`

export const Ul = styled.ul`
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

export const Li = styled.li`
list-style-type: none;
font-size: 2em;

a {
    padding: 1em;
    text-decoration: none;
    color: ${props => props.theme.colors.onyx};
}

a.active{
    color: ${props => props.theme.colors.activeNav};
}
`