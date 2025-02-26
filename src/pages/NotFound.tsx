import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <p className="mb-8 text-5xl">404 - Página não encontrada</p> 
          <Link className="btn btn-primary btn-lg" to="/"><FaHome className="mr-2" />Voltar para Home</Link>
        </div>
      </div>
    </div>
  );
}

