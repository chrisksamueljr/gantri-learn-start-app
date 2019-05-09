import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoriesComponent } from './stories/stories.component';


    import { FormsModule } from '@angular/forms';

// Material Modules have to be defined in the app-routing module in order to work?

import {  MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatSidenavModule, 
  MatToolbarModule,
  MatIconModule, 

  MatButtonModule,

  MatDialogModule,
   MatInputModule,
} from '@angular/material';
const learnStartRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'stories', component: StoriesComponent },
	{ path: '**', component: PageNotFoundComponent }
]


@NgModule({
  declarations: [LoginComponent, StoriesComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MatCardModule,
     MatSidenavModule, 
  MatToolbarModule,
  MatIconModule, 
  ReactiveFormsModule,
  MatButtonModule,
FormsModule,
  MatDialogModule,
   MatInputModule,
    RouterModule.forRoot(
    	learnStartRoutes,
    	{ enableTracing: true } // debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
