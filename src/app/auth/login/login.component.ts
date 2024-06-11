// import {Component} from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { AgentService } from 'src/app/service/agent.service';
// import { Router } from '@angular/router';
// import { AuthenticationService } from 'src/app/service/authentication.service';
// // import { AuthService } from '../auth.service';
//
// @Component({
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
//
// export class LoginComponent {
//   isLoading = false;
//   password: string='';
//   email: string='';
//   constructor(
//     private agentService: AgentService,
//     private route: ActivatedRoute,
//     private router: Router,
//     private authenticateService: AuthenticationService
//   ) {}
//   onLogin(form: NgForm) {
//     if (form.invalid) {
//       return;
//     }
//     this.isLoading = true;
//     // this.authService.login(form.value.email, form.value.password);
//   }
//   valider(){
//     this.agentService.agentInfosVerification(this.email, this.password).subscribe(
//       (response) => {
//         console.log(response);
//         if(response){
//           console.log('login success');
//           localStorage.setItem('email',this.email);
//           this.router.navigate(['change_password']);
//         } else {
//           console.log('login failed');
//           alert('login failed');
//         }
//       },
//       (error) => {
//         console.log('error');
//       }
//     );
//   }
//   // valider(){
//   //   this.authenticateService.authenticate({email: this.email,password: this.password}).subscribe({
//   //     next: (response) => {
//   //       console.log(response);
//   //       if(response){
//   //         console.log('login success');
//   //         localStorage.setItem('email',this.email);
//   //         this.router.navigate(['change_password']);
//   //       } else {
//   //         console.log('login failed');
//   //         alert('login failed');
//   //       }
//   //     },
//   //     error: (error) => {
//   //       console.log('error');
//   //     }
//   //   });
//   //   }
//   }
import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/service/agent.service';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../service/authentication.service";
import {AuthenticationRequest} from "../../modals/AuthenticationRequest";
import {TokenService} from "../../service/token/token.service";

// import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  authenticationRequest: AuthenticationRequest = {email: '', password: ''}; // Initialize with empty strings
  errorMessage: Array<string> = []; // Change to an array of strings
  isLoggedIn = false; // Add isLoggedIn property
  constructor(
    private authenticationService: AuthenticationService,
    // private utilisateurService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    // Check if user is already logged in
  }

  login() {
    this.errorMessage = []; // Clear error messages
    this.authenticationService.authenticate(this.authenticationRequest).subscribe({
      next: (data) => {
        console.log(data);
        console.log(data.access_token)
        this.tokenService.token = data.access_token as string;
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', data.email);
        localStorage.setItem('phone', data.telephone);
        // Check if it's the user's first time
        if (data.first_time) {
          // Navigate to change_password component
          this.router.navigate(['change_password']);
        } else {
          // Navigate to home
          this.router.navigate(['']);
        }
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMessage = err.error.validationErrors;
        } else {
          this.errorMessage.push(err.error.errorMsg);
        }
      }
    });
  }
  //implicit

  // isLoading = false;
  // password: string='';
  // email: string='';
  // authenticationRequest: AuthenticationRequest = {email: '', password: ''};
  // errorMessage: Array<string> = [];
  // isLoggedIn = false;
  //
  // constructor(
  //   private agentService: AgentService,
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private authenticationService: AuthenticationService,
  //
  //   // private authenticateService: AuthenticationService
  // ) {}
  // onLogin(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   this.isLoading = true;
  //   // this.authService.login(form.value.email, form.value.password);
  // }
  // valider() {
  //   this.errorMessage = []; // Clear error messages
  //   this.authenticationService.authenticate(this.authenticationRequest).subscribe({
  //     next: (data) => {
  //       localStorage.setItem('accessToken', data.token as string); // Store token in localStorage
  //       this.isLoggedIn = true; // Set isLoggedIn to true
  //       localStorage.setItem('isLoggedIn', 'true'); // Store isLoggedIn in localStorage
  //       this.router.navigate(['/dash']); // Navigate to '/dash' after successful authentication
  //     },
  //     error: (err) => {
  //       console.log(err);
  //       if (err.error && err.error.validationErrors) {
  //         this.errorMessage = err.error.validationErrors;
  //       } else if (err.error && err.error.errorMsg) {
  //         this.errorMessage.push(err.error.errorMsg);
  //       }
  //     }
  //   });
  // }
  // this.agentService.agentInfosVerification(this.email, this.password).subscribe(
  //   (response) => {
  //     console.log(response);
  //     if(response){
  //       console.log('login success');
  //       localStorage.setItem('email',this.email);
  //       this.router.navigate(['change_password']);
  //     } else {
  //       console.log('login failed');
  //       alert('login failed');
  //     }
  //   },
  //   (error) => {
  //     console.log('error');
  //   }
  // );
  // }
  // valider(){
  //   this.authenticateService.authenticate({email: this.email,password: this.password}).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       if(response){
  //         console.log('login success');
  //         localStorage.setItem('email',this.email);
  //         this.router.navigate(['change_password']);
  //       } else {
  //         console.log('login failed');
  //         alert('login failed');
  //       }
  //     },
  //     error: (error) => {
  //       console.log('error');
  //     }
  //   });
  //   }
}
