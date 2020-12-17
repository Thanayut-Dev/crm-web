import { SearchbarModule } from './../searchbar/searchbar.module';
import { ProfileModule } from './../profile/profile.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ToolbarModule } from '../toolbar/toolbar.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    ToolbarModule,
    ProfileModule,
    SearchbarModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
