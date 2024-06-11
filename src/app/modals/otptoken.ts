import { Client } from './client'; // Assurez-vous de définir ce modèle

export interface OTPToken {
  id: number;
  verificationCode: string;
  ExperationDate: number; // Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
  client: Client;
}