import React from 'react';
import { Vote } from 'lucide-react';

interface ConfirmVoteButtonProps {
  onConfirm: () => void;
  disabled: boolean;
}

export function ConfirmVoteButton({ onConfirm, disabled }: ConfirmVoteButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onConfirm}
        className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={disabled}
      >
        <Vote className="w-5 h-5 mr-2" />
        Confirmar Voto
      </button>
    </div>
  );
}