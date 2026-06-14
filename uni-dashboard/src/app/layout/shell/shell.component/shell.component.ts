import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatBadge } from '@angular/material/badge';
@Component({
  selector: 'app-shell-component',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css',
  imports: [MatSidenavModule,MatListModule,MatIconModule,RouterOutlet,RouterLink,MatButtonModule,MatBadge,MatToolbarModule],
})
export class ShellComponent { }
