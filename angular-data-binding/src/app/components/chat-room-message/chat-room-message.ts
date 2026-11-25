import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Message } from '../../models/message.modle';
import { User } from '../../models/user.model';
import { NgClass } from '@angular/common';
import { ChatRoomService } from '../../services/chat-room.service';

@Component({
  selector: 'app-chat-room-message',
  imports: [NgClass],
  templateUrl: './chat-room-message.html',
  styleUrl: './chat-room-message.css',
})
export class ChatRoomMessage {
  @Input() message:Message={user:{userName:'',id:''},message:''};
  @Input() myUser:User={userName:'',id:''};
  // @Input() myUserId:string='';
  @Output() delete_message=new EventEmitter();
  isMyMessage
  messageClass='';
  myUserId:string='';
  messageId:number=0;
  constructor(private chatRoomService:ChatRoomService){}
  ngOnInit():void{
    this.myUserId=this.chatRoomService.myUser.id;
    this.isMyMessage=this.myUserId===this.message.user.id;
    if(this.isMyMessage)
      this.messageClass='my-message';
  }
  onClick(){
    // this.delete_message.emit();
    this.chatRoomService.deleteMessage(this.message);

  }
}
