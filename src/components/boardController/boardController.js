import React, { useContext } from 'react'
import cardContextInterface from '../../context/cardContextInterface'
import { Context } from '../../context/context'
import { BoardController, ButtonContainer, Button, StatDiv   } from './boardControllerStyle'

export default () => {    
    const [state] = useContext(Context)
    const {setAmountOfCards} = cardContextInterface()

    const onClickHandler = e => {
        setAmountOfCards(parseInt(e.target.value))
    }

    return (
        <BoardController>
            <ButtonContainer>
                <Button value={"3"} onClick={onClickHandler}>
                    3
                </Button>
                <Button value={"5"} onClick={onClickHandler}>
                    5
                </Button>
                <Button value={"8"} onClick={onClickHandler}>
                    8
                </Button>
            </ButtonContainer>
            <StatDiv>
                Rounds won: {state.board.playedRounds}
            </StatDiv>
        </BoardController>
    )
}
