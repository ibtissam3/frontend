import { Component } from '@angular/core';
import { Creancier } from '../modals/creancier';
import { CmiService } from '../service/cmi.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent {
  creanciers: Creancier[]=[]
  constructor(private cmiService: CmiService,private route: Router) { }

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
  onLinkClick(debt:any, creditorimage:any) {
    console.log(debt);
        localStorage.setItem('image', creditorimage);
        console.log(debt.type, debt.codeDebt)
        this.route.navigate(['bill/form', debt.type, debt.codeDebt]);
  }
}
