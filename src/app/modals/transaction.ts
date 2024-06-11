import { ComptePaiement } from './comptePaiement';
import { Facture } from './facture'; // Assurez-vous de définir ce modèle

export interface Transaction {
  id: number;
  facture: Facture;
  montant: number;
  date: string; // Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
  status: string;
  type: string;
  comptePaiement: ComptePaiement;
}
