import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { User } from '../../models/user.model';
import { ChatRoomUsersSearch } from '../chat-room-users-search/chat-room-users-search';
import { ChatRoomPersonalMessage } from '../chat-room-personal-message/chat-room-personal-message';
import { ChatRoomService } from '../../services/chat-room.service';

@Component({
  selector: 'app-chat-room-users',
  imports: [ ChatRoomUsersSearch,ChatRoomPersonalMessage],
  templateUrl: './chat-room-users.html',
  styleUrl: './chat-room-users.css',
})
export class ChatRoomUsers implements OnInit, OnDestroy{
  // @Input() users:User[]=[];
  @Output() pick_user=new EventEmitter<User>;
  users:User[]=[];
  usersToDisplay:User[]=[];
  toUser:User={userName:'',id:''};
  isModalOn=false;
  userSub;
  onPickUser(user){
    this.toUser=user;
    this.isModalOn=true;
    this.pick_user.emit(user);
  }
  sendPersonalMessage(){
     this.isModalOn=false;
  }
  constructor(private chatRoomService:ChatRoomService,private cdr:ChangeDetectorRef){}
  ngOnInit(): void {
    this.userSub=this.chatRoomService.usersUpdated.subscribe(()=>{
       this.users=this.chatRoomService.getusers();
       this.usersToDisplay=[...this.users];
       this.cdr.detectChanges();
    })
    this.users=this.chatRoomService.getusers();
    this.usersToDisplay=[...this.users];
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onUserSearch(users){
    this.users=this.chatRoomService.getusers();
    this.usersToDisplay=this.users.filter(user=>user.userName.includes(users));
  }
  // onUserClick(user){
  //   this.pick_user.emit(user);
  // }
}
