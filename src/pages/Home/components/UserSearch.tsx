import React, { useState } from 'react';
import { api } from "../../../services/api";
import { UserCard } from "./UserCard";

interface User {
    id: number;
    login: string;
    avatar_url: string;
}

interface UserSearchProps {
    setAlert: (msg: string, type: string) => void;
}

export function UserSearch({ setAlert }: UserSearchProps) {
    const [text, setText] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text === '') {
            setAlert('Please enter something', 'error');
        } else {
            setLoading(true);
            try {
                const response = await api.get(`/search/users?q=${text}`);
                console.log('Dados retornados pela API:', response.data.items);
                setUsers(response.data.items);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados do GitHub', error);
                setLoading(false);
            }
            setText('');
        }
    };

    const clearUsers = () => {
        setUsers([]);
    };

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
                <div>
                    <form onSubmit={onSubmit} autoComplete="off">
                        <div className="form-control">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    name="text"
                                    className="w-full pr-40 bg-gray-200 input input-lg"
                                    value={text}
                                    onChange={onChange}
                                />
                                <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                    Go
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {users.length > 0 && (
                    <div>
                        <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
                            Clear
                        </button>
                    </div>
                )}
            </div>

            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                    {users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
}