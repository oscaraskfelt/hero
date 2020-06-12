import React, { useContext } from 'react'
import { Card, CardFront, CardBack} from './cardStyle'
import cardContextInterface from '../../context/cardContextInterface'
import {Context} from '../../context/context'
import { getSvg } from '../../icons/all'

export default ({id, nr}) => {
    const [state] = useContext(Context) 
    const {incrementActiveCards, setActive, checkMatch} = cardContextInterface();
    const {active} = state.cards.hand[id]
    const matched = state.cards.completed.includes(nr)
    const Icon = getSvg(nr)

    const onClickHandler = () => {
        if(state.activeCards <= 1 && !active){
            if(!active){
                setActive(id)
                incrementActiveCards()
                if(state.activeCards === 1){
                    checkMatch()
                }
            }
        }
    }
    

    return (
        <Card onClick={onClickHandler} id={id}>
            <CardFront active={active}>
            </CardFront>
            <CardBack active={active} matched={matched}>
                <Icon />
            </CardBack>
        </Card>
    )
}