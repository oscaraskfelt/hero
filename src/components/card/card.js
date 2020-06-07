import React, { useState, useContext } from 'react'
import { Card, CardFront, CardBack} from './cardStyle'
import counterInterface from '../../context/counterInterface'
import idCheckInterface from '../../context/idCheckInterface'
import {Context} from '../../context/context'

export default (props) => {
    const [state] = useContext(Context) 
    const [active, setActive] = useState(false)
    const {incrementActiveCards, decrementActiveCards} = counterInterface();
    const {setId, removeId, checkId} = idCheckInterface();

    const onClickHandler = () => {
        if(state.activeCards <= 1 && !active){
            if(!active){
                incrementActiveCards()
                setActive(true)
                state.activeCards >= 1 
                ? checkId(props.nr)
                : setId(props.nr)
            }
        }
        /* else{
            if(active){
                decrementActiveCards()
                setActive(false)
                removeId(props.nr)
            }
        } */
    }

    return (
        <Card onClick={onClickHandler} id={props.id}>
            <CardFront active={active}>
                <h1>Flip</h1>
            </CardFront>
            <CardBack active={active}>
                <h2>Back</h2>
                <p>{props.nr}</p>
            </CardBack>
        </Card>
    )
}