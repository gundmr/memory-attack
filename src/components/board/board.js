import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';



const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars= [
    {
        name: 'Lucas',
        img: "https://vignette.wikia.nocookie.net/strangerthings8338/images/b/be/Lucas-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193948",
        clicked: false
    },
    {
        name: 'Mike',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/3/37/Mike-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193949',
        clicked: false
    },
    {
        name: 'Eleven',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/3/31/Eleven-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193944',
        clicked: false
    },
    {
        name: 'Max',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/a/ae/Max-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193949',
        clicked: false
    },
    {
        name: 'Nancy',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/8/89/Nancy-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193950',
        clicked: false
    },
    {
        name: 'Will',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/1/12/Will-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193953',
        clicked: false
    },
    {
        name: 'Joyce',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/c/c6/Joyce-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193947',
        clicked: false
    },
    {
        name: 'Billy',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/1/19/Billy-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193941',
        clicked: false
    },
    {
        name: 'Steve',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/9/9b/Steve-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193952',
        clicked: false
    },
    {
        name: 'Dustin',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/d/d7/Dustin-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193943',
        clicked: false
    },
    {
        name: 'Jim',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/9/96/Hopper-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193946',
        clicked: false
    },
    {
        name: 'Jonathan',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/6/62/Jonathan-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193946',
        clicked: false
    },
    {
        name: 'Robin',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/c/c4/Robin-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193951',
        clicked: false
    },
    {
        name: 'Erica',
        img: 'https://vignette.wikia.nocookie.net/strangerthings8338/images/8/8a/Erica-S3-MP.jpg/revision/latest/scale-to-width-down/200?cb=20190703193945',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every character once. Once you click an item the grid will shuffle.<br/>Try not to click the same person twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}