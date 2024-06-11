import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostCreateComponent} from "./posts/post-create/post-create.component";
import {HeaderSideMenuComponent} from "./header-side-menu/header-side-menu.component";
import {PostListComponent} from "./posts/post-list/post-list.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {HelpComponent} from "./help/help.component";
import {DashboardComponent} from "./dashboard-component/dashboard.component";
import {TestComponent} from "./test-component/test.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatChipsModule} from "@angular/material/chips";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { CompteClientComponent } from './compte-client/compte-client.component';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import {MatTabsModule} from "@angular/material/tabs";
import { HomeComponent } from './home/home.component';
import { CreateAgencyComponent } from './create-agency/create-agency.component';
import { PaiementHomeComponent } from './paiement-home/paiement-home.component';
import { PaimentFormComponent } from './paiment-form/paiment-form.component';
import { PaiementRecapitulatifComponent } from './paiement-recapitulatif/paiement-recapitulatif.component';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AgencySidebarComponent } from './agency-sidebar/agency-sidebar.component';
import { ClientSidebarComponent } from './client-sidebar/client-sidebar.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { ListImpayeComponent } from './list-impaye/list-impaye.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { VerificationPaiementComponent } from './verification-paiement/verification-paiement.component';
import { HistoriqueComponent } from './historique/historique.component';
import { PwalletComponent } from './pwallet/pwallet.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { ProfileComponent } from './profile/profile.component';
// import { MatVideoModule } from 'mat-video';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderSideMenuComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent,
    HelpComponent,
    DashboardComponent,
    TestComponent,
    CompteClientComponent,
    BillPaymentComponent,
    HomeComponent,
    CreateAgencyComponent,
    PaiementHomeComponent,
    PaimentFormComponent,
    PaiementRecapitulatifComponent,
    HeaderComponent,
    AdminHomeComponent,
    AgencySidebarComponent,
    ClientSidebarComponent,
    ClientHomeComponent,
    CreateClientComponent,
    CreateAgentComponent,
    ListImpayeComponent,
    ChangePasswordComponent,
    VerificationPaiementComponent,
    HistoriqueComponent,
    PwalletComponent,
    BankAccountComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    // MatVideoModule,
    MatProgressBarModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
