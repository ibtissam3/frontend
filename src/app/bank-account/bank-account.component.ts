import { Component, OnInit } from '@angular/core';
import { Client } from '../modals/client';
import { ClientService } from '../service/client.service';
import { BankAccountService } from '../service/bank-account.service';
import { CmiService } from '../service/cmi.service';
import { get } from 'video.js/dist/types/tech/middleware';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  telephone: string=localStorage.getItem('phone')!;
  account_number: number=0;
  bankAccount: any={};

  constructor(private clientService: ClientService , private bankService: BankAccountService, private cmiService: CmiService) { }

  ngOnInit(): void {
    this.getBankAccount();
  }

  getBankAccount(){ 
      this.bankService.findByTel(this.telephone).subscribe((data) => {
        console.log(data);
        this.bankAccount = data;
      });     
  }

  associateAccount(){ 
    this.clientService.getIdByTel(this.telephone).subscribe((id) => {
      this.cmiService.associateAccount(id, this.account_number).subscribe((data) => {
        console.log(data);
        this.getBankAccount();
      
      });
    });       
  }


}
