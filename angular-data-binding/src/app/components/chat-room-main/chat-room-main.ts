import { Component, Input } from '@angular/core';
import {ChatRoomMessage } from '../chat-room-message/chat-room-message';
import { Message } from '../../models/message.modle';

@Component({
  selector: 'app-chat-room-main',
  imports: [ChatRoomMessage],
  templateUrl: './chat-room-main.html',
  styleUrl: './chat-room-main.css',
})
export class ChatRoomMain {
  @Input() messages:Message[]=[];
}
