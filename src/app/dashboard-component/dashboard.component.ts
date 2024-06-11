import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// import { AuthService } from '../auth/auth.service';
import { DashService } from './dashboard.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  fileName ?: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      if (file) {
        this.fileName = file.name;
      }
    }
  }

  ngOnDestroy(): void {
    // Add cleanup logic here if needed
  }
}
