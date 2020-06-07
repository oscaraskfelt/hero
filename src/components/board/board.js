import React, { useEffect, useState, useContext } from 'react'
import Card from '../card/card'
import { Board } from './boardStyle'
import cardContextInterface from '../../context/cardContextInterface'
import { Context } from '../../context/context'

export default () => {
    const {setCards} = cardContextInterface();
    const [context] = useContext(Context)
    const {hand} = context.cards
    
    useEffect(()=>{
        const cards = [{nr: 1, active: false}, {nr: 2, active: false}, {nr: 3, active: false},{nr: 1, active: false}, {nr: 2, active: false}, {nr: 3, active: false}]
        //cards.push(...cards)
        
        //Fisher-Yates shuffle
        for(let i = cards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp
        }

        setCards(cards)
    }, [])

    return (
        <Board>
            {hand.map((item, i) => {
                return(
                    <Card nr={item.nr} id={i} key={i}/>
                )}
            )}
        </Board>
    )
}
