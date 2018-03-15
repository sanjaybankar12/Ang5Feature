import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from './../service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  posts:Post[];  
  paramStr:string;
  hobbies:string[];
  constructor(private dataService:DataService,private routes:ActivatedRoute) { }

  ngOnInit() {
      this.dataService.getPosts().subscribe(res=>this.posts=res); 
      this.dataService.hobby.subscribe(res=>this.hobbies=res);
      this.routes.params.subscribe(res=>this.paramStr=res.name);
   }

}

interface Post{
  id:number;
  title:string;
  body:string;
}
