import { Component,Input } from '@angular/core';
import { Message } from '../../models/message.modle';

@Component({
  selector: 'app-chat-room-message',
  imports: [],
  templateUrl: './chat-room-message.html',
  styleUrl: './chat-room-message.css',
})
export class ChatRoomMessage {
  @Input() message:Message={user:{userName:'',id:''},message:''};
}
