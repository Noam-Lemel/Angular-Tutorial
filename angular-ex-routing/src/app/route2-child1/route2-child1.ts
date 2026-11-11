import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route2-child1',
  imports: [],
  templateUrl: './route2-child1.html',
  styleUrl: './route2-child1.css',
})
export class Route2Child1 {
  constructor(private router:Router){}
  onClickButton(){
    this.router.navigate(['/route2/child2']);
  }
}
