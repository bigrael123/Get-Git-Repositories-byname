import React, { useEffect, useState  } from "react";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import * as S from'./Style'
export default function Returnreps(props) {
        const [repositories, setRepositories] = useState([])
        const [usuario, setUsuario] = useState([])
        let Navigate = useNavigate();
        useEffect(() =>{
                let usuario = localStorage.getItem('usuario');
                let repositories = localStorage.getItem('repositories');
                if(repositories != null){
                        usuario = JSON.parse(usuario);
                repositories = JSON.parse(repositories);
                console.log(repositories);
                setRepositories(repositories);
                setUsuario(usuario);
                localStorage.clear();
                }
                else{
                        Navigate('/')
                }
                
        }, [])
    return (
            <>
                    <h1>Repositório: {usuario}</h1>
                    <ol>{repositories.map((repository) =>(
                            <li>Repositório: {repository}</li>))}
                        </ol>
                        <S.LinkHome to="/">Voltar</S.LinkHome>
            </>
    );
  }
  