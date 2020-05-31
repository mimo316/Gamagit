import React, {useState} from 'react';
import api from '../../services/api'
import * as S from './style'
import {useHistory} from 'react-router-dom'

function Home() {
  const history = useHistory();
  const [user, setUser] = useState('')
  const [error, setError] =useState(false);

    async function handleSearch() {
      try {
        const response = await api.get(`https://api.github.com/users/${user}/repos`)
        const repositories = (response.data)
        const repositoriesName = []

        repositories.map(repos => repositoriesName.push(repos.name))
        localStorage.setItem('repositories',JSON.stringify(repositoriesName)) 
        history.push('/repositories')
      } catch (error) {
        setError(true)
      }
        
      }
    
      return (
        <S.HomeContainer>

        
        <S.Content>
        <S.Input 
        name="usuario"
        id="usuario"
        className="usuarioInput"
        placeholder="Search an User..." onChange={e => setUser(e.target.value)}/>
    
        <S.Button type="button" onClick={handleSearch}>Search</S.Button>
        </S.Content>
        {error ? <S.ErrorMsg>User not Found</S.ErrorMsg> : null}
        </S.HomeContainer>
      )
}

export default Home;