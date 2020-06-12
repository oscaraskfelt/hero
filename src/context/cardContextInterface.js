import { useContext } from 'react'
import {Context} from './context'

export default () => {
    const [state, setState] = useContext(Context)
    const {hand, active} = state.cards
    
    const setCards = (cards) => {
        //sets the hand of cards
        setState(state => ({
            ...state, 
            cards: {
                ...state.cards, 
                hand: cards} 
            }))
    }
    
    const incrementActiveCards = () => {
        //increase active cards by 1
        setState(state => ({ ...state, activeCards: state.activeCards + 1 }))
    }
    
    const setActive = (id) => {
        //add id to active array
        active.push(id)
        //add active to card in hand
        hand[id].active = true

        setState(state => ({
            ...state, 
            cards: {
                ...state.cards,
                hand: hand,
                active: active} 
            }))
    }

    const setAmountOfCards = (cards) => {
        //set amount of cards on the board
        setState(state => ({
            ...state, 
            board: {
                ...state.board, 
                numberOfCards : cards
            }
        }))
    }

    const checkMatch = () => {  
        //checks if its a match or not...      
        const firstCard = hand[active[0]]
        const secondCard = hand[active[1]]
        if(firstCard.nr === secondCard.nr){
            setState(state => ({
                ...state,
                activeCards: 0, 
                cards: {
                    ...state.cards,
                    active: [],
                    completed: [...state.cards.completed, firstCard.nr]
                } 
            }))
            if(state.cards.completed.length + 1 === state.board.numberOfCards){
                setState(state => ({
                    ...state,
                    cards : {...state.cards, completed: []},
                }))                
                //setTimeoute to delay a new set of cards
                setTimeout(() => {
                    let updatedRounds = state.board.playedRounds + 1
                    setState(state => ({
                        ...state,
                        board: {
                            ...state.board, 
                            playedRounds : updatedRounds
                        }
                    }))                
                }, 2000);
                
            }
        }
        else {
            //setTimeoute to delay card reset
            setTimeout(() => {
                active.map(item => {
                    return hand[item].active = false
                })
                
                setState(state => ({
                    ...state,
                    activeCards: 0, 
                    cards: {
                        ...state.cards,
                        hand: hand,
                        active: []
                        } 
                    }))
            }, 1000);
        }
    }

    

    return {
        setCards, 
        checkMatch, 
        incrementActiveCards, 
        setActive,
        setAmountOfCards
        }
  }