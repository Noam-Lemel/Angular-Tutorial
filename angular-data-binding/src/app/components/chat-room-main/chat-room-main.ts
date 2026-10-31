import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ChatRoomMessage } from '../chat-room-message/chat-room-message';
import { Message } from '../../models/message.modle';
import { User } from '../../models/user.model';
import { ChatRoomSendMessage } from '../chat-room-send-message/chat-room-send-message'; 

@Component({
  selector: 'app-chat-room-main',
  imports: [ChatRoomMessage,ChatRoomSendMessage],
  templateUrl: './chat-room-main.html',
  styleUrl: './chat-room-main.css',
})
export class ChatRoomMain {
  @Input() messages:Message[]=[];
  @Input() myUser:User={userName:'',id:''};

  onSendMessage(newMessage){
    this.messages.push(newMessage);
  }
  onDeleteMessage(index){
    this.messages.splice(index,1);
  }
}