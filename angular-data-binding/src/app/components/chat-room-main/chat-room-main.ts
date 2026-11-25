import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {ChatRoomMessage } from '../chat-room-message/chat-room-message';
import { Message } from '../../models/message.modle';
import { User } from '../../models/user.model';
import { ChatRoomSendMessage } from '../chat-room-send-message/chat-room-send-message'; 
import { ChatRoomService } from '../../services/chat-room.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-room-main',
  imports: [ChatRoomMessage,ChatRoomSendMessage],
  templateUrl: './chat-room-main.html',
  styleUrl: './chat-room-main.css',
  providers:[ChatRoomService]
})
export class ChatRoomMain implements OnInit,OnDestroy{
  // @Input() messages:Message[]=[];
  // @Input() myUser:User={userName:'',id:''};
  @Input() roomName:string|null='';
  messages:Message[]=[];
  myUser:User={userName:'',id:''};
  messagesSub;
  constructor(private chatRoomService:ChatRoomService){}
  ngOnInit(){
    this.chatRoomService.initRoom(this.roomName);
    this.messagesSub=this.chatRoomService.messageDate.subscribe((messages)=>{
      this.messages=messages;
    });
    // this.chatRoomService.messageSubjct.next();
    this.messages=this.chatRoomService.messages;
    this.myUser=this.chatRoomService.myUser;
  }
  ngOnDestroy(): void {
    this.messagesSub.unsubscribe();
  }
  // onSendMessage(newMessage){
  //   this.messages.push(newMessage);
  // }
  // onDeleteMessage(index){
  //   this.messages.splice(index,1);
  // }
}