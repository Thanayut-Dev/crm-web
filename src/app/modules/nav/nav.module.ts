import { SidebarModule } from './../sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    HeaderModule,
    SidebarModule
  ],
  exports:[NavComponent]
})
export class NavModule { }
