import { Injectable,OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map,filter } from 'rxjs/operators';

@Injectable()

export class DataService implements OnInit{

    private hobbies=new BehaviorSubject<any>(['coding','swimming']);
    public hobby=this.hobbies.asObservable();
    constructor(private http:Http){

    }

    ngOnInit(){

    }

    changeHobby(hobby){
        this.hobbies.next(hobby);
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(map(res=>res.json()));
    }
}