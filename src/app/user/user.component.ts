import { Component,OnInit } from '@angular/core';

import { DataService } from './../service/data.service';
import { DataModel } from './../model/data.model';

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html',
    styles:[ `
    
    ` ]
})

export class UserComponent implements OnInit{
    
    name:string;
    email:string;
    address:Address;
    hobbies:string[];
    hobby:string;
    count:number;
    isShowHobbies:boolean=false;
    mymodel:DataModel;
    receiveData:any;
    constructor(private dataService:DataService){
        this.mymodel=new DataModel();
    }

    ngOnInit(){
        this.name='Sanjay Bankar';
        this.email='sanjaybankar12@gmail.com';

        this.address={'city':'Pune','state':'MH','pin':411014};
        this.dataService.hobby.subscribe(res=>this.hobbies=res);
        this.dataService.changeHobby(this.hobbies);
        this.count=this.hobbies.length;
    }

    toggleHobbies(){
        this.isShowHobbies=!this.isShowHobbies;
    }

    removeHobbies(i){
        
        this.hobbies.splice(i,1);
        this.dataService.changeHobby(this.hobbies);
        this.count=this.hobbies.length;
    }

    addHobbies(){
        if(this.hobbies.indexOf(this.hobby)!=-1 || this.hobby.trim()==""){
            return false;
        }
        
        this.hobbies.push(this.hobby);
        this.dataService.changeHobby(this.hobbies);
        this.count=this.hobbies.length;
        this.hobby='';
        return true;
    }

    getNotification(evt){
        this.receiveData=evt;
    }
}

interface Address{
    city:string;
    state:string;
    pin:number;
}