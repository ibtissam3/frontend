import { Component, OnInit } from '@angular/core';
import { Client } from '../modals/client';
import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  client:Client={
  "id": 0,
  "firstName": "",
  "lastName": "",
  "telephone": "",
  "email": "",
  "username":"",
  "password": "",
  "is_first_time": true,
  "birthdate": '',// Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
  "commercialRn": "",
  "patent": "",
  "address": "",
  "cin": "",
  "createdDate": "", // Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
  "num_piece_identite":"",
    "isProfessional": false,
  }
   email="";
  constructor(private agentService: AgentService ) { }

  ngOnInit(): void {
  }
  create(){
    if(this.client.email!==this.email){
      console.log(this.client);
      alert("Les emails ne correspondent pas")
   }
   else{
       this.agentService.createClient(this.client).subscribe(data=>{
         console.log(data);
         alert(`Client créé avec succès \n Veuillez noter que le mot de passe par défaut est: ${data.password} \n Veuillez le changer dès votre première connexion`);
       }
      )
    }
    }

    onFileSelected(event: any) {
      if (event.target.files && event.target.files.length >= 2) {
        const recto = event.target.files.item(0);
        let reader = new FileReader();
        reader.onload = (event: any) => {
          this.client.cin_recto = event.target.result.split(',')[1];
        }
        reader.readAsDataURL(recto);

        const verso = event.target.files.item(1);
        let reader1 = new FileReader();
        reader1.onload = (event: any) => {
          this.client.cin_verso = event.target.result.split(',')[1];
        }
        reader1.readAsDataURL(verso);
      }
    }

}
