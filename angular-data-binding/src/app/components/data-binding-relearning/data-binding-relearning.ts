import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { NgClass,CommonModule} from "@angular/common";

@Component({
  selector: 'app-data-binding-relearning',
  imports: [RouterOutlet, FormsModule, NgClass,CommonModule],
  templateUrl: './data-binding-relearning.html',
  styleUrl: './data-binding-relearning.css',
})
export class DataBindingRelearning implements OnInit {
  title='angular-data-binding!!';
  inputPlaceHolder='enter text';
  isButtonDisabled=false;
  mouseDivX=0;
  mouseDivY=0;
  buttonClicksCounter=0;
  buttonDrillClasses={};
  isValidEmail=true;
  buttonClasses={
    'red-background':this.isButtonDisabled,
    'blue-background':!this.isButtonDisabled
  }
  persons=[
    {name:'moshe',age:24},
    {name:'dan',age:56},
    {name:'yaffa',age:9},
    {name:'david',age:12}
  ]
  currentMessage="";
  messages:string[]=[];

  squares:{isPieceExist:boolean}[]=[];

  selectValue='full';
  selectValueDrill='small';
  isBigBoard=false;
  squaresNumber:number=this.isBigBoard?100:64;


  ngOnInit(){
      this.createBoard();
    }

  retuenTitle(){
    return this.title;
  }
  onClickButtonEnable(){
    this.isButtonDisabled=!this.isButtonDisabled;
    this.buttonClasses={
    'red-background':this.isButtonDisabled,
    'blue-background':!this.isButtonDisabled
  }
  }
  onInputTitle(event){
    const text=event.target.value;
    if(text.length===0){
      this.title='Data Binding Example';
      return}
    this.title=text;
  }
  onMouseMoveInMouseDiv(event){
    this.mouseDivX=event.offsetX;
    this.mouseDivY=event.offsetY;
  }
  onClickDrillButton(){
    this.buttonClicksCounter=(this.buttonClicksCounter+1)%4;
    this.buttonDrillClasses={
    'yellow-background':this.buttonClicksCounter>=1,
    'red-border':this.buttonClicksCounter>=2,
    'red-text':this.buttonClicksCounter>=3
  }
  }
  onInputEmailValidion(event)
  {
    let email=event.target.value;
    if(email.length===0)
      this.isValidEmail=true;
    const emailRegEx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    this.isValidEmail=emailRegEx.test(email)?true:false;
  }
  addMessage(){
    if(!this.currentMessage.trim()) return;
    this.messages.unshift(this.currentMessage);
    this.currentMessage='';
  }
  isSquareBlack(index:number){
    const isEvenCoulmn=index%2===0;
    let isEvenRow=Math.floor(index/8)%2===0;
    if(this.squaresNumber===100)
      isEvenRow=Math.floor(index/10)%2===0;

    if(isEvenRow)
      return isEvenCoulmn? false:true;
    else
      return isEvenCoulmn? true:false;
  }
  onClickSquare(index){
    if(this.isSquareBlack(index)){
      this.squares[index].isPieceExist=!this.squares[index].isPieceExist;
    }
  }
  onChangeSelect(event){
    this.selectValue=event.target.value;
  }
  onChangeSelectDrill(event){
    this.selectValueDrill=event.target.value;
    this.isBigBoard=this.selectValueDrill==='small'?false:true;
    this.squaresNumber=this.isBigBoard?100:64;
    this.createBoard();
  }
  createBoard(){
    this.squares=[];
    for(let i=0; i<this.squaresNumber; i++){
      this.squares.push({
        isPieceExist:false
      });
    }
  }
  
}
