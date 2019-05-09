import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoriesComponent } from './stories/stories.component';



const learnStartRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'stories', component: StoriesComponent },
	{ path: '**', component: PageNotFoundComponent }
]


@NgModule({
  declarations: [LoginComponent, StoriesComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(
    	learnStartRoutes,
    	{ enableTracing: true } // debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
