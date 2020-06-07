import React, { useContext } from 'react'
import { Card, CardFront, CardBack} from './cardStyle'
import cardContextInterface from '../../context/cardContextInterface'
import {Context} from '../../context/context'

export default (props) => {
    const [state] = useContext(Context) 
    const {active} = state.cards.hand[props.id]
    const {incrementActiveCards, setActive, checkMatch} = cardContextInterface();

    const onClickHandler = () => {
        if(state.activeCards <= 1 && !active){
            if(!active){
                setActive(props.id)
                incrementActiveCards()
                if(state.activeCards === 1){
                    checkMatch()
                }
            }
        }
    }

    return (
        <Card onClick={onClickHandler} id={props.id}>
            <CardFront active={active}>
                <h1>Flip</h1>
                <p>{props.nr}</p>
            </CardFront>
            <CardBack active={active}>
                <p style={{fontSize: '3em'}}>{props.nr}</p>
            </CardBack>
        </Card>
    )
}