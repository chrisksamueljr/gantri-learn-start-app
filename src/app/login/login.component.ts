import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


	 // email = new FormControl('', [Validators.required,Validators.email]);


	 // getErrorMessage() {
	 // 	return this.email.hasError('required') ? 'You must enter a value': 
	 // 	this.email.hasError('email') ? 'Not a valid email' : '';
	 // }


	 ngOnInit() {}
}
