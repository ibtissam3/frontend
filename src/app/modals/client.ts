import { User } from './user';

export interface Client extends User {
  is_first_time: boolean;
  otpToken?: any; // Remplacez 'any' par le type approprié
  comptePaiement?: any; // Remplacez 'any' par le type approprié
  birthdate: string; // Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
  commercialRn: string;
  patent: string;
  address: string;
  cin: string;
  createdDate: string; // Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
  bank?: any; // Remplacez 'any' par le type approprié
  bankAccounts?: any[]; // Remplacez 'any' par le type approprié
  cin_recto?: string;
  cin_verso?: string;
  isProfessional: boolean;
}
