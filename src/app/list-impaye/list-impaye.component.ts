import { Component, OnInit } from '@angular/core';
import { ImpayeService } from '../service/impaye.service';
import { get } from 'video.js/dist/types/tech/middleware';
import { ActivatedRoute } from '@angular/router';
import { Impaye } from '../modals/impaye';
import { ClientService } from '../service/client.service';
import { PaiementService } from '../service/paiement.service';

@Component({
  selector: 'app-list-impaye',
  templateUrl: './list-impaye.component.html',
  styleUrls: ['./list-impaye.component.css']
})
export class ListImpayeComponent implements OnInit {
  id_client: number=0;
  id_creance : number = Number(this.route.snapshot.paramMap.get('id_creance')!);
  tel : string = '';
  impayes: Impaye[] = [];

  constructor(private impayeService: ImpayeService, private route : ActivatedRoute, private clientService :  ClientService, private paiementService: PaiementService) { }

  ngOnInit(): void {
    this.getImpayesByDebtCode(this.id_client, this.id_creance);
  }

  getImpayesByDebtCode(creance_id: number, client_id: number) {
    this.impayeService.getImpayesByDebtCode(creance_id, client_id).subscribe(
      data => {
        console.log(data);
        this.impayes = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  payer(impaye: number){
      this.clientService.getTel(this.id_client).subscribe(
      data => {
        console.log(data.replace('+', ''));
        this.tel = data.replace('+', '');
        this.paiementService.confirmerPaiement(impaye,this.tel).subscribe(
          data =>{
            console.log(data);
          }
        );
      },
      error => {
        console.log(error);
      }
      );
      alert("Paiement effectué avec succès")
      this.getImpayesByDebtCode(this.id_client, this.id_creance);
    }
    getIdClient(){
      this.clientService.getIdByTel(this.tel).subscribe(
        data => {
          this.id_client = data;
          console.log(data);
        }
      );
    }
}
