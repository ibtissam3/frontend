import { Client } from './client';
import { Transaction } from './transaction';
 // Assurez-vous de définir ce modèle

export interface ComptePaiement {
  typeHissab: string; // Remplacez 'string' par le type approprié si vous avez un énumérateur correspondant en TypeScript
  paymentAccountId: number;
  client: Client;
  accountBalance: number;
  createdDate: string; // Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
  bankName: string;
  PhoneNumber: string;
  transactions: Transaction[];
}