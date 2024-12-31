import React, { useState } from 'react';
import { Candidate } from '../types';
import ImageUpload from './ImageUpload';

interface EditCandidateFormProps {
  candidate: Candidate;
  onSave: (updatedCandidate: Candidate) => void;
  onCancel: () => void;
}

export default function EditCandidateForm({ candidate, onSave, onCancel }: EditCandidateFormProps) {
  const [name, setName] = useState(candidate.name);
  const [information, setInformation] = useState(candidate.information);
  const [photoUrl, setPhotoUrl] = useState(candidate.photoUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...candidate,
      name,
      information,
      photoUrl
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Editar Candidato</h3>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Informações
        </label>
        <textarea
          value={information}
          onChange={(e) => setInformation(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Foto
        </label>
        <ImageUpload
          currentImage={photoUrl}
          onImageSelected={setPhotoUrl}
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
