import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-chat-room-users',
  imports: [],
  templateUrl: './chat-room-users.html',
  styleUrl: './chat-room-users.css',
})
export class ChatRoomUsers implements OnInit{
  @Input() users:User[]=[];

  ngOnInit(): void {
    
  }

}
