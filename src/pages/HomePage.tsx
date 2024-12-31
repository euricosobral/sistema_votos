import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Vote, Settings } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Sistema de Votação
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <button
          onClick={() => navigate('/vote')}
          className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Vote className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Votação</h2>
          <p className="text-gray-600 text-center">
            Acesse a página de votação para registrar seu voto
          </p>
        </button>

        <button
          onClick={() => navigate('/admin')}
          className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Settings className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Configurações</h2>
          <p className="text-gray-600 text-center">
            Gerencie candidatos e configure o sistema
          </p>
        </button>
      </div>
    </div>
  );
}
