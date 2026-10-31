import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-chat-room-personal-message',
  imports: [],
  templateUrl: './chat-room-personal-message.html',
  styleUrl: './chat-room-personal-message.css',
})
export class ChatRoomPersonalMessage {
  @Input() toUser:User={userName:'', id:''};  
  @Output() send_personal_message=new EventEmitter();

  onSendClick(){
    this.send_personal_message.emit();
  }
}
