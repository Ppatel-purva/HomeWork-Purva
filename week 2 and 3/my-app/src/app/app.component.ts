import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpDataRequestService } from './http-data-request.service';
import { getLocaleDateFormat } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

 
})
export class AppComponent {
  // title = 'my-app';

  constructor(private ht:HttpDataRequestService){}

  results:any;

  ngOnInit() { 
    this.ht.getdata().subscribe((data) => this.show(data));
  } 

  show(data:any){
    this.results= data;

  }

id="";
title="";
author=""


GetData(id:any){
  console.log(id);
  this.id=this.results[id-1].id;
  this.title=this.results[id-1].title;
  this.author=this.results[id-1].author;

}
}
