import React from 'react'
import Card from '../card/card'
import { Board } from './boardStyle'

export default () => {
 
    const cards = [{id: 1}, {id: 2}, {id: 3}]
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
                    <Card item={item.id} key={i}/>
                )}
            )}
        </Board>
    )
}
