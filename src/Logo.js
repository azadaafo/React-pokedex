import React from 'react'
const Logo = (props) => {

    // function logWhenClicked() {
    //     console.log("it doesn't matter what the message is");
    // }

    console.log(props);
    return (
        <header>
            <h1>Welcome to the {props.appName}</h1>
            <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png' alt='' />
            <button onClick={props.handleClick} >Click me!</button>

        </header>
    )
}

export default Logo;