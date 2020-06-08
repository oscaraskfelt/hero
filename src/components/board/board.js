import React, { useEffect, useContext } from 'react'
import Card from '../card/card'
import { Board } from './boardStyle'
import cardContextInterface from '../../context/cardContextInterface'
import { Context } from '../../context/context'

export default () => {
    const {setCards} = cardContextInterface();
    const [context] = useContext(Context)
    const {hand} = context.cards
    
    useEffect(()=>{
        const cards = generateCards()
        
        //Fisher-Yates shuffle
        for(let i = cards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp
        }

        setCards(cards)
    }, [])

    const generateCards = () =>{
        let number = [];
        while(number.length < 4){
            let r = Math.floor(Math.random() * Math.floor(29))
            if(number.indexOf(r) === -1){
                number.push(r)            
            }
        }
        
        let cards = [...Array(4)].map((item, i) => {
            return {nr: number[i], active: false}
        })
        let cardsDuplicate = JSON.parse(JSON.stringify( cards ))
        return cards.concat(cardsDuplicate)
    }

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
