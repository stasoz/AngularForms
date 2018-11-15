import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTest';

  toDoTextButton:string="Add item";
  toDoText:string ="My to-do"; 
  toDoTextButtonRemove="Remove all items";
  toDoList=[];

  ngOnInit(){}

  AddItem()
  {
    this.toDoList.push(this.toDoText);
    this.toDoText='';
  }
  RemoveItem()
  {  
    this.toDoList.length=0;   
  }
  RemoveByIndex(index)
  {
    this.toDoList.splice(this.toDoList.indexOf(index), 1);
  }
}
