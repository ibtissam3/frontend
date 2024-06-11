import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PaiementService } from '../service/paiement.service';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-paiment-form',
  templateUrl: './paiment-form.component.html',
  styleUrls: ['./paiment-form.component.css']
})
export class PaimentFormComponent implements OnInit {
  fullname : string = '';
  montant : number = 0;
  tel: string='';
  tel_recharge: string='';
  type: string=this.route.snapshot.paramMap.get('type')!;
  id: number= Number(this.route.snapshot.paramMap.get('id')!);
  id_client: number=0;
  imagePath: string | null = '';

  constructor(private route : ActivatedRoute,private paiementService: PaiementService, private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {  
    this.imagePath = localStorage.getItem('image');
    localStorage.setItem('creance',  this.id.toString());
    console.log(this.id);
  }

  donation() {
    this.clientService.getIdByTel(this.tel).subscribe(
      data => {
        const id_client = data;
        console.log(id_client);
          this.paiementService.createDonation(this.montant, this.fullname).subscribe(
            data => {
              console.log(data);
              console.log(data.id)
              localStorage.setItem('montant',this.montant.toString());
              localStorage.setItem('fullname',this.fullname);
              localStorage.setItem('phone',this.tel);
              localStorage.setItem('donation',data.id.toString());
            }
          );
        this.paiementService.generateOTP(id_client).subscribe(
          data => {
            console.log(data);
            this.router.navigate(['/verification',this.type,id_client]);
          }
        );
      }
    );
  }
  
  recharge() {
    this.clientService.getIdByTel(this.tel).subscribe(
      data => {
        const id_client = data;
        console.log(id_client);
          this.paiementService.createRecharge(this.montant, this.tel_recharge).subscribe(
            data => {
              console.log(data);
              localStorage.setItem('montant',this.montant.toString());
              localStorage.setItem('tel_recharge',this.tel_recharge);
              localStorage.setItem('phone',this.tel);
              localStorage.setItem('recharge',data.id.toString());
            }
          );
        this.paiementService.generateOTP(id_client).subscribe(
          data => {
            console.log(data);
            this.router.navigate(['/verification',this.type,id_client]);
          }
        );
      }
    );
  }
}
