import React from 'react'
import './Button.scss'

const Button = ({label}) => {

    const follow = () => {
        alert("Thanks for following us!");
    }

    return (
        <div>
            <button onClick={follow}>{label}</button>
        </div>
    )
}

export default Button
