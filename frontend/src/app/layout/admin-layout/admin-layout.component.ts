import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, NavbarComponent, SidebarComponent],
  templateUrl: './admin-layout.component.html',
  styles: [`
    mat-sidenav-container {
      background-color: transparent;
    }
  `]
})
export class AdminLayoutComponent {
  @ViewChild('drawer') drawer!: MatSidenav;

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
