import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { NgClass,CommonModule} from "@angular/common";

@Component({
  selector: 'app-data-binding-example',
  imports: [RouterOutlet, FormsModule, NgClass,CommonModule],
  templateUrl: './data-binding-example.html',
  styleUrl: './data-binding-example.css',
})
export class DataBindingExample {
   title ='angular-data-binding';
  inputPlaceHolder='Enter text';
  isButtonDisabled=false;
  coords='';
  buttonClasses={
    'red-bg':this.isButtonDisabled,
    'blue-bg':!this.isButtonDisabled
  }
  clickCount=0;
  isValid=true;
  persons=[
    {name:'moshe',age:24},
    {name:'dan',age:56},
    {name:'yaffa',age:9},
    {name:'david',age:12}];
  messages:string[]=[];

  board:any[]=[];
  squareCounter=0;
  squaresNumber=64;
  selectValue='full';

  constructor(){}

  ngOnInit(): void {
   this.createBoard();
  }
  createBoard(){
    this.board=[];
    for(let i=0;i<this.squaresNumber;i++){
      let row=0;
      let col=0;
      if(this.squaresNumber<100){
      row=Math.floor(i/8);
      col=i%8;}
       if(this.squaresNumber===100){
      row=Math.floor(i/10);
      col=i%10;}
      const isBlack=(row+col)%2!==0;

      this.board.push({isBlack:isBlack, hasPiece:false});}
  }
  addPiece(square:any){
    if(square.isBlack)
      square.hasPiece=!square.hasPiece;
  }
  returnHelloWorld(){
    return 'hello world';
  }
  returnTitle(){
    return this.title;
  }
   onClickButtonDrill(){
    this.clickCount=(this.clickCount+1)%4;
   }
  onClickButtonEnable(){
    this.isButtonDisabled=!this.isButtonDisabled;
    this.buttonClasses={
    'red-bg':this.isButtonDisabled,
    'blue-bg':!this.isButtonDisabled
  }
  }
  onInputInputTitle(event){
    const text:string=event.target.value;
    if(text.length===0){
      this.title='data binding exemple';
      return;
    }
    this.title=text;
  }
  // drill 01
  mouseLocation(event){
    this.coords=event.offsetX+"/"+event.offsetY;
  }
  checkEmail(event){
    const email:string=event.target.value;
    if(email.length===0)
      this.isValid=true;
    const emailRegEx:RegExp=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isValid=emailRegEx.test(email)?true:false;
  }
  inputToMessage(input){
    // event.preventDefault();
    // const message:string=event.target['new-message'].value;
    // this.messages.push(message);
    // event.target['new-message'].value='';
    this.messages.push(input.value);
    input.value='';
  }
  onChangeSelect(event){
    this.selectValue=event.target.value;
  }
   onChangeBoardSelect(event){
    this.squaresNumber=parseInt(event.target.value);
    this.createBoard();
  }
}
