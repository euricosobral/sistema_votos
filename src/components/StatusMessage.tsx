import React from 'react';

interface StatusMessageProps {
  type: 'selected' | 'voted';
}

export function StatusMessage({ type }: StatusMessageProps) {
  if (type === 'selected') {
    return (
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-8">
        <p className="text-blue-700">
          Candidato selecionado! Clique em "Confirmar Voto" para registrar seu voto.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-8">
      <p className="text-green-700">
        Você pode escolher outro candidato para votar!
      </p>
    </div>
  );
}