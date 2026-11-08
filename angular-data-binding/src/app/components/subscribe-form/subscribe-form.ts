import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators  } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-subscribe-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './subscribe-form.html',
  styleUrl: './subscribe-form.css',
})
export class SubscribeForm implements OnInit {
  // inputTitle=new FormControl('Initial Value');
  // onClickButtonDefult(){
  //   this.inputTitle.setValue('Defult');
  // }
  subscribeForm!:FormGroup;
  firstName!:AbstractControl;
  lastName!:AbstractControl;
  email!:AbstractControl;
  age!:AbstractControl;
  password!:AbstractControl;
  passwordRepeated!:AbstractControl;
  terms!:AbstractControl;

  constructor(private fb:FormBuilder){}
  ngOnInit():void{
    // this.subscribeForm=new FormGroup({
    //   firstName:new FormControl('',[Validators.required,Validators.minLength(4)]),
    //   lastName:new FormControl('',[Validators.required]),
    //   email:new FormControl('',[Validators.required]),
    //   age:new FormControl(0,[Validators.required,Validators.min(12)]),
    //   password:new FormControl('',[Validators.required]),
    //   passwordRepeated:new FormControl('',[Validators.required]),
    //   terms:new FormControl(false,[Validators.required])
    // })
    this.subscribeForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(4),this.mosheValidator],],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      age:[0,[Validators.required,Validators.min(12)]],
      password:['',[Validators.required,this.passwordValidator]],
      passwordRepeated:['',[Validators.required,this.passwordValidator]],
      terms:[false,[Validators.requiredTrue]]
    },{validators:this.passwordRepeatedValidator});
    this.firstName=this.subscribeForm.get('firstName')!;
    this.lastName=this.subscribeForm.get('lastName')!;
    this.email=this.subscribeForm.get('email')!;
    this.age=this.subscribeForm.get('age')!;
    this.password=this.subscribeForm.get('password')!;
    this.passwordRepeated=this.subscribeForm.get('passwordRepeated')!;
    this.terms=this.subscribeForm.get('terms')!;
  }
  mosheValidator(control:AbstractControl):ValidationErrors | null{
    const invalid=control.value.trim().toLowerCase()==='moshe';
    return invalid?{'namemoshe':control.value}:null;
  }
  passwordValidator(control:AbstractControl):ValidationErrors | null{
    if(!control.value) return null;
    const includeDigits=(/[0-9]+/).test(control.value);
    const includespaces=control.value.includes(' ');
    return  includespaces?{'includespace':true}:(includeDigits?null:{'notincludedigits':true});
  }
  passwordRepeatedValidator(control:FormGroup):ValidationErrors|null{
    const password=control.get('password')?.value;
    const passwordRepaeted=control.get('passwordRepeated')?.value;
    return password!==passwordRepaeted?{'passwordnotrepaeted':true}:null;
  }
  onSubmitSubscribeFrom(){
    console.log(this.subscribeForm.get('lastName')!.value);
  }
  invalidFirstNameMessage(){
    const errors=this.firstName.errors;
    if(errors?.['required'])
      return 'you must enter your first name.';
    if(errors?.['minlength'])
      return 'First name must be at least 4 characters';
    if(errors?.['namemoshe'])
      return 'First name cannot be Moshe!';
    else
      return;
  }
  invalidAgeMessage(){
    const errors=this.age.errors;
    if(errors?.['required'])
      return 'you must enter your age';
    if(errors?.['min'])
      return 'Age must be at least 12 years old';
    else return;
  }
  invalidPasswordMessage(){
    const errors=this.password.errors;
    if(errors?.['required'])
      return 'you must enter password.';
    if(errors?.['includespace'])
      return 'the password cant include space';
    if(errors?.['notincludedigits'])
      return 'the password nust include at least one number';
    else return;
  }
  invalidPasswordRepeatedMessage(){
    if(this.passwordRepeated.errors?.['required'])
      return 'you must enter password.';
    if(this.subscribeForm.errors?.['passwordnotrepaeted'])
      return 'this is not match to the password';
    else return;
  }
}
