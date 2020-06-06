import React, { useState } from 'react'
import { Card, CardFront, CardBack} from './cardStyle'

export default (props) => {
    const [active, setActive] = useState(false)

    const onClickHandler = () => {
        setActive(!active)
    }

    return (
        <Card onClick={onClickHandler}>
            <CardFront active={active}>
                <h1>Flip</h1>
            </CardFront>
            <CardBack active={active}>
                <h2>Back</h2>
                <p>backtext</p>
            </CardBack>
        </Card>
    )
}