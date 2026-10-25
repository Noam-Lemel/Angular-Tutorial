import { Component } from '@angular/core';
import { ChatRoomUsers } from '../chat-room-users/chat-room-users';
import { ChatRoomMain } from '../chat-room-main/chat-room-main';
import { User } from '../../models/user.model';
import { Message } from '../../models/message.modle';

@Component({
  selector: 'app-chat-room',
  imports: [ChatRoomUsers,ChatRoomMain],
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.css',
})
export class ChatRoom {
  myUser:User={
    userName:'Noam',
    id:'11'
  }
  users:User[]=[
    {userName:'moshe'
      ,id:'01'
    },
    {userName:'david'
      ,id:'02'
    },
    {userName:'ronen'
      ,id:'3'
    },
    {userName:'shir'
      ,id:'4'
    },
    {userName:'michal'
      ,id:'5'
    }
  ]
  messages:Message[]=[
    {
      user:{userName:'ronen',id:'3'},
      message:'Hi'
    },
    {
      user:this.myUser,
      message:'How are you?'
    }
  ];
}
