import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

interface NavbarProps {
    title: string;
}

export function Navbar({ title = 'Github Finder' }: NavbarProps) {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <FaGithub className="inline pr-2 text-3xl" />
                    <Link to='/' className="text-lg font-bold align-middle">
                        {title}
                    </Link>
                </div>

                <div className="flex space-x-4">
                    <Link to='/' className="btn btn-ghost btn-sm rounded-btn">
                        Home
                    </Link>
                    <Link to='/about' className="btn btn-ghost btn-sm rounded-btn">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
