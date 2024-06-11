import { Component, OnInit } from '@angular/core';
import { ComptePaiement } from '../modals/comptePaiement';
import { PaymentAccountCreationRequest } from '../modals/paymentaccountcreactionrequest';
import { ComptePaiementService } from '../service/comptepaiement.service';

@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.css']
})
export class CompteClientComponent implements OnInit {
     compteClient: PaymentAccountCreationRequest={
      "firstName": "",
      "lastName": "",
      "phoneNumber": "",
      "email": "",
      "typeHissab": ""
    };
  constructor(private paiementCompteService: ComptePaiementService) { }

  ngOnInit(): void {
  }
  create(){
    this.paiementCompteService.createComptePaiement(this.compteClient).subscribe(
      data => {
        console.log(data);
        alert("Compte créé avec succès");
      },
      error => {
        console.log(error);
        alert("Erreur lors de la création du compte");
      }
    )
  }
}
