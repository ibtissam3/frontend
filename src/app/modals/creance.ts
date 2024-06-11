import { Creancier } from './creancier'; // Assurez-vous de définir ce modèle
import { Impaye } from './impaye';
// Assurez-vous de définir ce modèle

export interface Creance {
  codeDebt: number;
  amount: number;
  debtName: string;
  creditor: Creancier;
  type: string;
  impayes: Impaye[];
}