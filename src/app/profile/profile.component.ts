import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  client: any;
  id_client: number = Number(this.route.snapshot.paramMap.get('id')!);
  constructor(private clientService:ClientService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getClient();
  }
  getClient(){
    this.clientService.getClient(this.id_client).subscribe((data: any) => {
       console.log(data);
       this.client = data;
       console.log(this.client);
     });   
 }
   update(){
      this.clientService.update(this.client).subscribe((data: any) => {
        console.log(data);
        this.getClient();
      });
   }
}
