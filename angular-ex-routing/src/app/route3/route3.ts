import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route3',
  imports: [],
  templateUrl: './route3.html',
  styleUrl: './route3.css',
})
export class Route3 implements OnInit{
  id:string|null='';
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
       this.id=params.get('id')});
   
  }
}
