import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Message } from "../models/message.modle";
import { Room } from "../models/room.model";
import { Subject, take } from "rxjs";
import { RoomsService } from "./rooms.service";
import { LoginService } from "./login.service";

@Injectable({providedIn:'root'})
export class ChatRoomService{
    // private _myUser:User={
    //     userName:'Noam',
    //     id:'11'
    // };
    private _myUser:User={userName:'',id:''};
    private _room:Room={name:'',users:[]};
    private _messages:Message[]=[];
    private _users:User[]=[];
    private _messageSubject= new Subject<Message[]>;
    messageDate=this._messageSubject.asObservable();
    private _usersSubject=new Subject<void>();
    usersUpdated=this._usersSubject.asObservable();
    constructor(private roomsService:RoomsService,
        private loginService:LoginService){}
    // private _users:User[]=[
    // {userName:'moshe'
    //   ,id:'01'
    // },
    // {userName:'david'
    //   ,id:'02'
    // },
    // {userName:'ronen'
    //   ,id:'3'
    // },
    // {userName:'shir'
    //   ,id:'4'
    // },
    // {userName:'michal'
    //   ,id:'5'
    // }
    // ];
    // private _messages:Message[]=[
    //     {
    //         user:{userName:'ronen',id:'3'},
    //         message:'Hi'
    //     },
    //     {
    //         user:this.myUser,
    //         message:'How are you?'
    //     }
    // ];
    get myUser(){
        return {...this._myUser};
    }
    get messages(){
        return [...this._messages];
    }
    getusers(){
        return this._room?.users?[...this._room.users]:[];
    }
    initRoom(roomName){
        this._room=this.roomsService.getRoom(roomName)!;
        if(!this._room){
            this.roomsService.roomsNames.pipe(take(1)).subscribe(()=>{
                this._room=this.roomsService.getRoom(roomName)!;
                this._usersSubject.next(undefined);
            });
            this.roomsService.getRooms()
        }
        this._myUser=this.loginService.myUser!;
    }

    addMessage(message:string){
        this._messages.push({user:{...this.myUser},message:message});
        this._messageSubject.next([...this._messages]);
    }
    deleteMessage(message:Message){
        this._messages.splice(this.messages.indexOf(message),1);
        this._messageSubject.next([...this._messages]);
    }
}