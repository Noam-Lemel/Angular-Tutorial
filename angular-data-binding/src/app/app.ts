import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { NgClass,CommonModule} from "@angular/common";
import { DataBindingExample } from './components/data-binding-example/data-binding-example';
import {DataBindingRelearning} from './components/data-binding-relearning/data-binding-relearning';
import {Header} from './components/header/header';
import { ChatRoom } from './components/chat-room/chat-room';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, FormsModule, NgClass,CommonModule,DataBindingExample,DataBindingRelearning,
  Header,ChatRoom, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  
}
