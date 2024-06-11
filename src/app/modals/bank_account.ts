import { Client } from './client';

export interface BankAccount {
  id: number;
  accountNumber: string;
  balance: number;
  client: Client; // Utilisez le modèle Client que vous avez déjà défini
}