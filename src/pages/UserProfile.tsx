import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from "../services/api";

interface User {
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
}

export function UserProfile() {
    const { login } = useParams<{ login: string }>();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`/users/${login}`);
                setUser(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados do GitHub', error);
                setLoading(false);
            }
        };

        fetchUser();
    }, [login]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!user) {
        return <p>Usuário não encontrado</p>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="Profile" />
            <p>{user.bio}</p>
        </div>
    );
}