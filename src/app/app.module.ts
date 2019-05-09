import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { StoriesComponent } from './stories/stories.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIALS_MODULES = [
	MatToolbarModule	
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
    AppRoutingModule,
    MATERIALS_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
