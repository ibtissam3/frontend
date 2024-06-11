import { Client } from "./client";

export interface Bank {
    id: number;
    name: string;
    address: string;
    clients: Client[]; // Utilisez le modèle Client que vous avez déjà défini
  }