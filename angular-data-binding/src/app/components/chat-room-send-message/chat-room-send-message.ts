import { Component, EventEmitter, Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { Message } from '../../models/message.modle';

@Component({
  selector: 'app-chat-room-send-message',
  imports: [FormsModule],
  templateUrl: './chat-room-send-message.html',
  styleUrl: './chat-room-send-message.css',
})
export class ChatRoomSendMessage {
  @Input() myUser:User={userName:'',id:''};
  @Output() send_message= new EventEmitter<Message>;
  newMessage:string='';

  onClick(){
    this.send_message.emit({user:this.myUser,message:this.newMessage});
    this.newMessage='';
  }
}
