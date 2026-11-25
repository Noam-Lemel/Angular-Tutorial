import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoomsService } from '../../services/rooms.service';
import { Subscription } from 'rxjs';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-rooms',
  imports: [RouterLink,FormsModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms implements OnInit, OnDestroy {
  roomsNames:string[]=[];
  roomsNamesSub;
  inputValue='';
  constructor(private router:Router,private roomsService:RoomsService, private cdr:ChangeDetectorRef){}

  ngOnInit(): void {
    // this.roomsNames=this.roomsService.getRoomsNames();
    this.roomsNamesSub=this.roomsService.roomsNames.subscribe((roomsnames:string[])=>{
      this.roomsNames=roomsnames;
      this.cdr.detectChanges();
    });
    this.roomsService.getRooms();
    // this.roomsService.putRoomsInDb();
  }
  ngOnDestroy(): void {
    this.roomsNamesSub.unsubscribe();
  }
  onClickAddButton(){
    // this.roomsNames.push(this.inputValue);
    this.roomsService.createRoom(this.inputValue);
    // this.router.navigate(['/room',this.inputValue]);
    this.inputValue='';
  }
}
