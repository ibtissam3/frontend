import { Component, OnInit } from '@angular/core';
import { CmiService } from '../service/cmi.service';
import { switchMap } from 'rxjs/operators';
  import { of } from 'rxjs';
  
import { FactureService } from '../service/facture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paiement-recapitulatif',
  templateUrl: './paiement-recapitulatif.component.html',
  styleUrls: ['./paiement-recapitulatif.component.css']
})
export class PaiementRecapitulatifComponent implements OnInit {
  fullname = 'John Doe';
  montant = 300;
  imagePath: string | null = '';
  facture: any={};
  Creance: any={};
  Object: any={};
  id_creance: number = Number(localStorage.getItem('creance'));
  id_facture: number= Number(this.route.snapshot.paramMap.get('id_facture')!);
  id: number = Number(this.route.snapshot.paramMap.get('id')!);
  transactionType = localStorage.getItem('type')!;
  constructor(private cmiService: CmiService, private factureService: FactureService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.imagePath = localStorage.getItem('image');
    this.getCreance();
    this.getFacture();
  }
  
  getCreance() {
    this.cmiService.getCreancierByCode(this.id_creance).subscribe(
      data => {
        this.Creance = data;
        console.log(data);
      }
    );
  }

  getFacture() {
    this.factureService.getFactureById(this.id_facture).subscribe(
      data => {
        this.facture = data;
        console.log(data);
      }
    );
  }
}
