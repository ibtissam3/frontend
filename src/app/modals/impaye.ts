import { Creance } from './creance'; // Assurez-vous de définir ce modèle

export interface Impaye {
  id: number;
  montant: number;
  type: string;
  description: string;
  creance: Creance;
}