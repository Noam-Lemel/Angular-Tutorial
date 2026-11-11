import { Routes } from '@angular/router';
import { Route1 } from './route1/route1';
import { Route2 } from './route2/route2';
import { PageNotFound } from './page-not-found/page-not-found';
import { Route3 } from './route3/route3';
import { Route2Child1 } from './route2-child1/route2-child1';
import { Route2Child2 } from './route2-child2/route2-child2';

export const routes: Routes = [
    {path:'',redirectTo:'route1',pathMatch:'full'},
    {path:'route1',component:Route1},
    {path:'route2',component:Route2, children:[
        {path:'child1',component:Route2Child1},
        {path:'child2',component:Route2Child2}
    ]},
    {path:'route3/:id',component:Route3},
    {path:'**',component:PageNotFound}
];
