import React, {useState} from 'react';

const Context = React.createContext([{}, () => {}]);

const ContextProvider = (props) => {
    const [state, setState] = useState({activeCards: 0, cardId: null});
    return (
        <Context.Provider value={[state, setState]}>
            {props.children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };