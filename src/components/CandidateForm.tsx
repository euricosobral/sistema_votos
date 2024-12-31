import React, { useState, useEffect } from 'react';
import { PlusCircle, Save } from 'lucide-react';
import { Candidate } from '../types';
import ImageUpload from './ImageUpload';

interface CandidateFormProps {
  onAddCandidate: (candidate: Candidate) => void;
  initialData?: Candidate | null;
}

export default function CandidateForm({ onAddCandidate, initialData }: CandidateFormProps) {
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [information, setInformation] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPhotoUrl(initialData.photoUrl);
      setInformation(initialData.information);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const candidate: Candidate = {
      id: initialData?.id || Date.now().toString(),
      name,
      photoUrl,
      information,
      votes: initialData?.votes || 0
    };
    onAddCandidate(candidate);
    setName('');
    setPhotoUrl('');
    setInformation('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        {initialData ? 'Editar Candidato' : 'Adicionar Novo Candidato'}
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Foto do Candidato</label>
          <ImageUpload
            onImageSelect={setPhotoUrl}
            currentImage={photoUrl}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Informações</label>
          <textarea
            value={information}
            onChange={(e) => setInformation(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {initialData ? (
            <>
              <Save className="w-5 h-5 mr-2" />
              Salvar Alterações
            </>
          ) : (
            <>
              <PlusCircle className="w-5 h-5 mr-2" />
              Adicionar Candidato
            </>
          )}
        </button>
      </div>
    </form>
  );
}