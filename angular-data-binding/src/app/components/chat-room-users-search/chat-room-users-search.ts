import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-room-users-search',
  imports: [],
  templateUrl: './chat-room-users-search.html',
  styleUrl: './chat-room-users-search.css',
})
export class ChatRoomUsersSearch {
  @Output() users_to_display= new EventEmitter<string>;
  onInput(event){
    this.users_to_display.emit(event.target.value);
  }
}
