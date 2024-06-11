import { ComptePaiement } from './comptePaiement'; // Assurez-vous de définir ce modèle
import { Transaction } from './transaction'; // Assurez-vous de définir ce modèle

export interface Facture {
  customerId: number;
  amount: number;
  description: string;
  paid: boolean;
  dueDate: string; // Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
  comptePaiement: ComptePaiement;
  transaction: Transaction;
  id: number;
}