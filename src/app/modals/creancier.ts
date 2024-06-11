import { Creance } from './creance'; // Assurez-vous de définir ce modèle

export interface Creancier {
  codeCreditor: number;
  creditorName: string;
  category: string;
  listCreances: Creance[];
  image: string;
}