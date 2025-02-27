import { Link } from "react-router-dom";

interface User {
    login: string;
    avatar_url: string;
}

interface UserCardProps {
    user: User;
}

export function UserCard({ user: { login, avatar_url } }: UserCardProps) {
    return (
        <div className="card shadow-md compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <Link to={`/users/${login}`} className="text-base-content text-opacity-40">
                        Ver perfil
                    </Link>
                </div>
            </div>
        </div>
    );
}