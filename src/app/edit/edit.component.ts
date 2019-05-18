import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public get editName(){
    return localStorage.getItem('name');
  }
  public set editName(value:string){
    localStorage.setItem('name', value);  
  }
}
