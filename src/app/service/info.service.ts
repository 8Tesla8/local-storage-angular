import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor() { }

  public get name(){
    return localStorage.getItem('name');
  }
  public set name(value:string){
    localStorage.setItem('name', value);  
  }

  public get user(): User{
    return JSON.parse(localStorage.getItem('user'));
  }
  public set user(value: User){
    localStorage.setItem('user', JSON.stringify(value));  
  }
}

export class User {
  public name: string = '';
  public surname: string = '';
}