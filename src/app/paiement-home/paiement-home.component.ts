import { Component, OnInit } from '@angular/core';
import { Creancier } from '../modals/creancier';
import { CmiService } from '../service/cmi.service';

@Component({
  selector: 'app-paiement-home',
  templateUrl: './paiement-home.component.html',
  styleUrls: ['./paiement-home.component.css']
})
export class PaiementHomeComponent implements OnInit {
  creanciers: Creancier[]=[]
  constructor(private cmiService: CmiService) { }

  ngOnInit(): void {
    this.getAllCreancier();
  }

  getAllCreancier(){
    return this.cmiService.getAllCreanciers().subscribe(
      data =>{
        this.creanciers=data;
        console.log(data);
      }
    )
  }
}
