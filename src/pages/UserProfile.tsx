import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { GithubContext } from '../context/GithubContext';

export function UserProfile() {

    const { login } = useParams<{ login: string }>();

    const githubContext = useContext(GithubContext);

    if (!githubContext) {
        return <p>Erro ao carregar o contexto do Github</p>;
    }
    const { user, loading, getUser } = githubContext;

    useEffect(() => {
        if (login) {
            getUser(login);
        }
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!user) {
        return <p>Usuário não encontrado</p>;
    }

    return (
        <div>
            <h1>Login: {user.login}</h1>
            <h1>Nome: {user.name}</h1>
            <img src={user.avatar_url} alt="Profile" />
            <p>Bio: {user.bio}</p>
            
        </div>
    );
}