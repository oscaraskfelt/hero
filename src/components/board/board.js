import React from 'react'
import Card from '../card/card'
import { Board } from './boardStyle'

export default () => {
    return (
        <Board>
            {[...Array(6)].map((el, i) => {
                return(
                    <Card key={i}/>
                )}
            )}
        </Board>
    )
}
