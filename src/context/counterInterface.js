import { useContext } from 'react';
import {Context} from './context'

export default () => {
    const [state, setState] = useContext(Context);
    
      const incrementActiveCards = () => {
          setState(state => ({ ...state, activeCards: state.activeCards + 1 }));
        }
        
        const decrementActiveCards = () => {
            setState(state => ({ ...state, activeCards: state.activeCards-- }))
         }
      
    
      return {
        incrementActiveCards, decrementActiveCards
      }
  };