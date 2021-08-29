// Write your Character component here
import React from "react"
import styled from 'styled-components'

export default function Character({info}) {
    return(
        <NewCharacter className='character'>
            <CharName>{info.name}</CharName>
            <CharacterButton>{info.birth_year}</CharacterButton>
            
        </NewCharacter>
    )}


const NewCharacter = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 15px;
        padding: 0 40px;
        border: solid grey;
        font-family: 'Bungee', cursive;

`
const CharacterButton = styled.button `
        justify-content: center;
        padding: 5px 35px;
        margin: 10px;
        font-weight: bold; 
        
`

const CharName = styled.h2`
    justify-content: center;
    padding: 5px 35px;
`