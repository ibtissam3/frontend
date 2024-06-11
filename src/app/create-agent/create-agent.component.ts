import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Agent } from '../modals/agent';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent implements OnInit {

  agent:Agent={
    "id": 0,
    "firstName": "",
    "lastName": "",
    "telephone": "",
    "email": "",
    "username":"",
    "password": "",
    "is_first_time": true,
    "date_naissance": '',// Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
    "num_immatriculation": "",
    "num_patente": "",
    "createdDate": "", // Utilisez Date si vous préférez travailler avec des objets Date en TypeScript
    "num_piece_identite":""
    }
     email="";
    constructor(private adminService: AdminService) { }
  
    ngOnInit(): void {
    }
    create(){
      if(this.agent.email!==this.email){
        console.log(this.agent);
        alert("Les emails ne correspondent pas")
     }
     else{
         this.adminService.createAgent(this.agent).subscribe(data=>{
           console.log(data);
           alert(`Agent créé avec succès \n Veuillez noter que le mot de passe par défaut est: ${data.password} \n Veuillez le changer dès votre première connexion`);
         } 
        )
      }
      }
}
