import { Routes } from '@angular/router';
import { Rooms } from './components/rooms/rooms';
import { Home } from './components/home/home';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { ChatRoom } from './components/chat-room/chat-room';
import { UserEntrance } from './components/user-entrance/user-entrance';
import { SubscribeForm } from './components/subscribe-form/subscribe-form';
import { LoginForm } from './components/login-form/login-form';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'room/:name',component:ChatRoom},
    {path:'user',component:UserEntrance,children:[
        {path:'',component:LoginForm},
        {path:'subscribe',component:SubscribeForm}
    ]},
    {path:'rooms',component:Rooms},
    {path:'**',component:PageNotFound}
];
