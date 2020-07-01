import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { from } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ProfileModule { }
