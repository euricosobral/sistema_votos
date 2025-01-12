import React from 'react';
import { VotingSettings as VotingSettingsType } from '../types';

interface VotingSettingsComponentProps {
  settings: VotingSettingsType;
  onUpdateSettings: (settings: VotingSettingsType) => void;
}

export function VotingSettings({ settings, onUpdateSettings }: VotingSettingsComponentProps) {
  return (
    <div>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome da Eleição
          </label>
          <input
            type="text"
            value={settings.electionName}
            onChange={(e) => onUpdateSettings({
              ...settings,
              electionName: e.target.value
            })}
            placeholder="Digite o nome da eleição"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número máximo de votos por usuário
          </label>
          <select
            value={settings.maxVotesPerUser}
            onChange={(e) => onUpdateSettings({
              ...settings,
              maxVotesPerUser: Number(e.target.value) as 1 | 2 | 3
            })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3"
          >
            <option value={1}>1 voto</option>
            <option value={2}>2 votos</option>
            <option value={3}>3 votos</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Senha de Administrador
          </label>
          <input
            type="password"
            value={settings.adminPassword}
            onChange={(e) => onUpdateSettings({
              ...settings,
              adminPassword: e.target.value
            })}
            placeholder="Digite a nova senha"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3"
          />
          <p className="mt-1 text-sm text-gray-500">
            Deixe em branco para manter a senha atual
          </p>
        </div>
      </div>
    </div>
  );
}