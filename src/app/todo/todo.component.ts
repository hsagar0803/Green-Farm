import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
title='';

mytodos:any;
  constructor(private dbservice:DatabaseService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }
  fetchTodos(){
    this.dbservice.fetchTodo().then(data =>{
      this.mytodos=data;
     // console.log(data);
    }).catch(error =>{
      alert(error);
    })
  }
  editTodo(todo:any){
     let newValue:any = prompt('Do you want change a old value?', todo.title);
     //console.log(this.title);
     if(newValue !=='') {
       this.dbservice.editTodoWith(todo.todoId, newValue);
      // console.log(newValue);
       this.fetchTodos();  
     }
  }
  deleteTodo(todoId:string){
    this.dbservice.deleteTodoWith(todoId);
    this.fetchTodos();
  }

  saveTodo(){
    this.dbservice.saveDataWithTitle(this.title);
    this.fetchTodos();
    this.title ='';
  }
 
}
