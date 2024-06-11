import { User } from 'src/app/modals/user';

export interface Agent extends User {
  num_immatriculation: string;
  num_patente: string;
  date_naissance: string; // Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
  is_first_time: boolean;
  cin?: string;
}