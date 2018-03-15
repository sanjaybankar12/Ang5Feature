import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from  './app.component';
import { UserComponent } from  './../app/user/user.component';
import { AboutComponent } from './about/about.component';

import { DataService } from './service/data.service';
import { ChildComponent } from './child/child.component';

const appRoutes:Routes=[
    {
        path:'',
        component:UserComponent
    },
    {
        path:'about/:name',
        component:AboutComponent
    }
];

@NgModule({
    imports:[ BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpModule ],
    declarations:[ AppComponent,UserComponent, AboutComponent, ChildComponent ],
    providers:[ DataService ],
    bootstrap:[ AppComponent ]
})

export class AppModule{
    
}