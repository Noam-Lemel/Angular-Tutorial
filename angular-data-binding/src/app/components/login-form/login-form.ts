import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm implements OnInit {
  loginForm!:FormGroup;
  userName!:AbstractControl;
  email!:AbstractControl;
  password!:AbstractControl;
  constructor(private fb:FormBuilder,private router:Router,private loginService:LoginService){};
  ngOnInit(){
    this.loginForm=this.fb.group({
      userName:['',[Validators.required,Validators.minLength(4)]],
      email:['',Validators.required],
      password:['',Validators.required]
    })
    this.userName=this.loginForm.get('userName')!;
    this.email=this.loginForm.get('email')!;
    this.password=this.loginForm.get('password')!;
  }
  onSubmitLoginFrom(){
    if(this.loginForm.valid)
      this.loginService.signin(this.userName.value,this.email.value,this.password.value);
    // this.router.navigate(['/rooms']);
  }
}
