import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { Transaction } from "../modals/transaction";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  id_client_connecte: number | undefined;
  isExpanded = false;
  transactions: Transaction[] = [];

  //constructor(private authService: AuthService, // Injectez votre service d'authentification
  //private transactionService: TransactionService) { }

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    // Remplacez ceci par l'appel à votre méthode pour obtenir l'ID du client connecté
    this.id_client_connecte = 3; //this.authService.getClientId();
    if (this.id_client_connecte) {
      this.getClientTransactions();
    }
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  getClientTransactions(): void {
    if (this.id_client_connecte) {
      this.transactionService.getProfessionalClientTransactions(this.id_client_connecte).subscribe(transactions => {
        this.transactions = transactions;
      });
    }
  }
}
