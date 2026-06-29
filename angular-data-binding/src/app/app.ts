import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { NgClass,CommonModule} from "@angular/common";
import { DataBindingExample } from './components/data-binding-example/data-binding-example';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, FormsModule, NgClass,CommonModule,DataBindingExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
 
}
