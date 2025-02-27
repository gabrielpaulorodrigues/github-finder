import { createContext, useState, ReactNode } from "react";
import { api } from "../services/api";

interface User {
    id: number;
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
}

interface GithubContextType {
    users: User[];
    user: User | null;
    loading: boolean;
    searchUsers: (text: string) => void;
    getUser: (login: string) => void;
    clearUsers: () => void;
}

export const GithubContext = createContext<GithubContextType | undefined>(undefined);

export const GithubProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    const searchUsers = async (text: string) => {
        setLoading(true);
        try {
            const response = await api.get(`/search/users?q=${text}`);
            setUsers(response.data.items);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const getUser = async (login: string) => {
        setLoading(true);
        try {
            const response = await api.get(`/users/${login}`);
            setUser(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const clearUsers = () => {
        setUsers([]);
    };

    return (
        <GithubContext.Provider value={{ users, user, loading, searchUsers, getUser, clearUsers }}>
            {children}
        </GithubContext.Provider>
    );
};