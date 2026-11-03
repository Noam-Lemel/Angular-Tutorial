import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';
import { ChatRoomUsersSearch } from '../chat-room-users-search/chat-room-users-search';
import { ChatRoomPersonalMessage } from '../chat-room-personal-message/chat-room-personal-message';

@Component({
  selector: 'app-chat-room-users',
  imports: [ ChatRoomUsersSearch,ChatRoomPersonalMessage],
  templateUrl: './chat-room-users.html',
  styleUrl: './chat-room-users.css',
})
export class ChatRoomUsers implements OnInit{
  @Input() users:User[]=[];
  @Output() pick_user=new EventEmitter<User>;
  usersToDisplay:User[]=[];
  toUser:User={userName:'',id:''};
  isModalOn=false;
  onPickUser(user){
    this.toUser=user;
    this.isModalOn=true;
  }
  sendPersonalMessage(){
     this.isModalOn=false;
  }

  ngOnInit(): void {
    this.usersToDisplay=[...this.users];
  }
  onUserSearch(users){
    this.usersToDisplay=this.users.filter(user=>user.userName.includes(users));
  }
  onUserClick(user){
    this.pick_user.emit(user);
  }
}
