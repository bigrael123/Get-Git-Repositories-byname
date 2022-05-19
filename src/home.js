import logo from './logo.svg';
import './App.css';
import './style.css';
import React, {useState} from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function App(props) {
  const[usuario, setUsuario] = useState('');
  const[erro, setErro] = useState(false)
  let Navigate = useNavigate();
  function getUserrepo(){
    
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {const repositories = response.data
    
    const repositoriesName = [];
    JSON.stringify(repositories);
    repositories.map((repositories) =>{
      repositoriesName.push(repositories.name)
      localStorage.setItem('repositories', JSON.stringify(repositoriesName));
      localStorage.setItem('usuario', JSON.stringify(usuario));
      Navigate('/repositories', {repositoriesName: repositoriesName}, {usuario: usuario})
    });
  }).catch(err => {
    setErro(true);
  });
  }
  return (
        <>
          <input placeholder='Usuário' className='UsuarioInput' onChange={e => setUsuario(e.target.value)}></input>
          <button className='button' type = "button" onClick={getUserrepo}>Pesquisar</button>
          {erro ? <span id='NE'>Usuário Não Encontrado</span> : ''}
        </>
  );
}

export default App;
