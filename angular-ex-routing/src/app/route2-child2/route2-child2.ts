import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-route2-child2',
  imports: [],
  templateUrl: './route2-child2.html',
  styleUrl: './route2-child2.css',
})
export class Route2Child2 {
  constructor(private router:Router){}

  onClickButton(){
    this.router.navigate(['/route2/child1'])
  }
}
