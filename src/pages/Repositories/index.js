import React, {useEffect, useState} from 'react'
import * as S from './style'

import {useHistory} from 'react-router-dom';

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);
    const history = useHistory()
    useEffect(() => {
        
        if(localStorage !== null) {

            let repositoresName = localStorage.getItem('repositories')
            repositoresName = JSON.parse(repositoresName)
            setRepositories(repositoresName)
            //localStorage.clear()
        } else {
            history.push('/')
        }
    }, [])
    return (
        <S.Container>
        <S.Title>Repositories</S.Title>
        <S.List>
           {repositories.map(repos => {
               return (
                <S.ListItem>{ repos }</S.ListItem>
               )} 
           )}
        </S.List>
        <S.LinkHome to='/'>Back</ S.LinkHome>
        </S.Container>
    )
}