import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { FinancialReport } from '../modals/financial-report';

// Importez AuthService si vous en avez besoin pour récupérer l'identifiant du client connecté
// import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.css']
})
export class GraphComponent implements OnInit {
  financialReport: FinancialReport | undefined;
  incomingHeight: string = '0%';
  outgoingHeight: string = '0%';

  //constructor(private authService: AuthService, // Injectez votre service d'authentification
  //private transactionService: TransactionService) { }

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactionReport();
  }

  getTransactionReport(): void {
    const clientId = 3; // Remplacez ceci par l'appel à votre méthode pour obtenir l'ID du client connecté://this.authService.getClientId();
    if (clientId) {
      this.transactionService.getProfessionalClientTransactions(clientId).subscribe(transactions => {
        const totalIncoming = transactions.filter(transaction => transaction.type === 'incoming')
            .reduce((acc, transaction) => acc + transaction.montant, 0);
        const totalOutgoing = transactions.filter(transaction => transaction.type === 'outgoing')
            .reduce((acc, transaction) => acc + transaction.montant, 0);
        this.financialReport = { totalIncoming, totalOutgoing };
        this.updateGraph();
      });
    }
  }

  updateGraph(): void {
    if (this.financialReport) {
      const maxTransactionValue = 100000;
      const incomingPercentage = Math.min((this.financialReport.totalIncoming / maxTransactionValue) * 100, 100);
      const outgoingPercentage = Math.min((this.financialReport.totalOutgoing / maxTransactionValue) * 100, 100);
      this.incomingHeight = `${incomingPercentage}%`;
      this.outgoingHeight = `${outgoingPercentage}%`;
      console.log('Rapport financier reçu :', this.financialReport);
    }
  }
}
