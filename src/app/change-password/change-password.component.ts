import { Component, OnInit } from '@angular/core';
import { AgentService } from '../service/agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  new_password: string = '';
  email: string = localStorage.getItem('email') ?? '';

  constructor(private agentService : AgentService, private router: Router) { }

  ngOnInit(): void {
  }

  valider() {
    console.log(this.new_password);
    this.agentService.change_password(this.email,this.new_password).subscribe(
      data => {
        console.log(data);
        this.router.navigate([''])
      }
    )
  }
}
