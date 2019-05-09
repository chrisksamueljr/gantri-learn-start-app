import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { StoriesComponent } from './stories/stories.component';
import { AppRoutingModule } from './app-routing.module';
import { 
  MatSidenavModule, 
  MatToolbarModule,
  MatIconModule, 
  MatButtonModule,

  MatDialogModule,
   MatInputModule,
} from '@angular/material';

import {  MatCardModule } from '@angular/material/card';



const MATERIALS_MODULES = [
	MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
   MatInputModule,
];


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // PageNotFoundComponent,
    // StoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
