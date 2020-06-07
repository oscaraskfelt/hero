import React from 'react'
import Card from '../card/card'
import { Board } from './boardStyle'

export default () => {
 
    const cards = [{nr: 1}, {nr: 2}, {nr: 3}]
    cards.push(...cards)
    for(let i = cards.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp
      }

    return (
        <Board>
            {cards.map((item, i) => {
                return(
                    <Card nr={item.nr} id={i} key={i}/>
                )}
            )}
        </Board>
    )
}
