import React, { useState, useContext } from 'react'
import { Card, CardFront, CardBack} from './cardStyle'
import counterInterface from '../../context/counterInterface'
import {Context} from '../../context/context'

export default (props) => {
    const [state] = useContext(Context) 
    const [active, setActive] = useState(false)
    const {incrementActiveCards, decrementActiveCards} = counterInterface();

    const onClickHandler = () => {
            if(state.activeCards <= 1 && !active){
                if(!active){
                    incrementActiveCards()
                    setActive(true)
                }
            }
            else{
                if(active){
                    setActive(false)
                    decrementActiveCards()
                }
            }
    }

    return (
        <Card onClick={onClickHandler}>
            <CardFront active={active}>
                <h1>Flip</h1>
            </CardFront>
            <CardBack active={active}>
                <h2>Back</h2>
                <p>{props.item}</p>
            </CardBack>
        </Card>
    )
}