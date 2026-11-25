import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Room } from "../models/room.model";
import { Subject, take } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable({providedIn:'root'})
export class RoomsService{
    private _rooms:Room[]=[];
    private dbUrl=environment.DB + '/rooms.json';
    private _roomsNameSubject=new Subject<string[]>();
    roomsNames=this._roomsNameSubject.asObservable();
    constructor(private http:HttpClient, private router:Router,private loginService:LoginService){
        // this._rooms=[
        //     {name:'cats',
        //         users:[
        //             {userName:'moshe',id:'01'},
        //             {userName:'david',id:'02'},
        //             {userName:'ronen',id:'3'},
        //             {userName:'shir',id:'4'},
        //             {userName:'michal',id:'5'}
        //         ]
        //     },{
        //         name:'toys',
        //         users:[
        //             {userName:'moshe',id:'01'},
        //             {userName:'david',id:'02'},
        //             {userName:'ronen',id:'3'},
        //             {userName:'shir',id:'4'},
        //             {userName:'michal',id:'5'}
        //         ]
        //     }
        // ]
    }
    // putRoomsInDb(){
    //     this.http.put(
    //         this.dbUrl
    //         ,this._rooms
    //     ).subscribe({next:(res)=>{
    //         console.log(res);
    //     },error:(err)=>{
    //         console.log(err);
    //     }});
    // }
   
    getRooms(){
        this.http.get(this.dbUrl,
            {params:new HttpParams().set('auth',this.loginService.token)})
        .subscribe(
            {next:(res)=>{
                this._rooms=[];
                for(let room in res){
                    console.log(res[room].users);
                    this._rooms.push({
                        name:res[room].name,
                        users:res[room].users || []
                    })
                }
                this._roomsNameSubject.next(this._rooms.map(room=>room.name));
            }
            ,error:(err)=>{console.log(err)}})
    }
    getRoom(roomName){
        return this._rooms.find(room=>room.name===roomName);
    }
    createRoom(roomName:string){
        // this._rooms.push({name:roomName,users:[]});
        // this._roomsNameSubject.next(this._rooms.map(room=>room.name));
        this.http.post(this.dbUrl,{name:roomName,users:[]},{params:new HttpParams().set('auth',this.loginService.token)})
        .subscribe({next:(res)=>{
           this.roomsNames.pipe(take(1)).subscribe(()=>{
            this.router.navigate(['/room',roomName]);
           }) 
           this.getRooms();
        },error:(err)=>{console.log(err)}})
    }
}