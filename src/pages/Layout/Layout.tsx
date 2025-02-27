import { ReactNode } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar title='Github Finder'/>
            <main className="container mx-auto px-3">
                {children}
            </main>
            <Footer />
        </div>
    );
}