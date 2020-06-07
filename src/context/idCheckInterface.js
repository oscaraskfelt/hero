import { useContext } from 'react'
import {Context} from './context'

export default () => {
    const [state, setState] = useContext(Context)
    
      const setId = (id) => {
            setState(state => ({ ...state, cardId: id }))
        }

        const checkId = (id) => {
            let match = id === state.cardId
            ? true
            : false
            if(match){
                setState(state => ({ ...state, activeCards: 0 }))
            }
            return match
          }
        
        const removeId = () => {
            setState(state => ({ ...state, cardId: null }))
         }
      
      return {
        setId, removeId, checkId
      }
  }