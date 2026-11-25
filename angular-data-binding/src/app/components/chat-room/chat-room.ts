import { Component, OnInit,EventEmitter} from '@angular/core';
import { ChatRoomUsers } from '../chat-room-users/chat-room-users';
import { ChatRoomMain } from '../chat-room-main/chat-room-main';
import { ChatRoomPersonalMessage } from '../chat-room-personal-message/chat-room-personal-message';
import { User } from '../../models/user.model';
import { Message } from '../../models/message.modle';
import { ActivatedRoute } from '@angular/router';
import { ChatRoomService } from '../../services/chat-room.service';

@Component({
  selector: 'app-chat-room',
  imports: [ChatRoomUsers,ChatRoomMain,ChatRoomPersonalMessage],
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.css',
})
export class ChatRoom implements OnInit {
  roomName:string|null='';
  // myUser:User={
  //   userName:'Noam',
  //   id:'11'
  // }
  // users:User[]=[
  //   {userName:'moshe'
  //     ,id:'01'
  //   },
  //   {userName:'david'
  //     ,id:'02'
  //   },
  //   {userName:'ronen'
  //     ,id:'3'
  //   },
  //   {userName:'shir'
  //     ,id:'4'
  //   },
  //   {userName:'michal'
  //     ,id:'5'
  //   }
  // ]
  // messages:Message[]=[
  //   {
  //     user:{userName:'ronen',id:'3'},
  //     message:'Hi'
  //   },
  //   {
  //     user:this.myUser,
  //     message:'How are you?'
  //   }
  // ];
  constructor(private route:ActivatedRoute,private chatRoomService:ChatRoomService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.roomName=params.get('name');
      this.chatRoomService.initRoom(this.roomName);
    })
  }
}
