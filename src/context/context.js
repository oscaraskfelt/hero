import React, {useState} from 'react'

const Context = React.createContext([{}, () => {}])

const ContextProvider = (props) => {
    const [state, setState] = useState({
        activeCards: 0, 
        cards: {
            hand: [], completed: [], active:[]
            },
        board: {
            numberOfCards : 3,
            playedRounds: 0
            }
        })

    return (
        <Context.Provider value={[state, setState]}>
            {props.children}
        </Context.Provider>
    );
}

export { Context, ContextProvider }